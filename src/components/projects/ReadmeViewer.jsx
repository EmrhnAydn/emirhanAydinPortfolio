import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiLoader, FiAlertCircle, FiExternalLink } from 'react-icons/fi';
import './ReadmeViewer.css';

export default function ReadmeViewer({ github, language }) {
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReadme = async () => {
            if (!github?.owner || !github?.repo) {
                setError(language === 'tr' ? 'GitHub bilgileri eksik' : 'GitHub info missing');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Try to fetch README from GitHub API
                const response = await fetch(
                    `https://api.github.com/repos/${github.owner}/${github.repo}/readme`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github.v3.raw'
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const content = await response.text();
                setReadme(content);
            } catch (err) {
                console.error('Failed to fetch README:', err);
                setError(
                    language === 'tr'
                        ? 'README yüklenemedi. Repo private olabilir veya README dosyası mevcut değil.'
                        : 'Failed to load README. The repo might be private or README file doesn\'t exist.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchReadme();
    }, [github, language]);

    if (loading) {
        return (
            <div className="readme-viewer readme-viewer--loading">
                <FiLoader className="readme-viewer__spinner" />
                <span>{language === 'tr' ? 'README yükleniyor...' : 'Loading README...'}</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="readme-viewer readme-viewer--error">
                <FiAlertCircle />
                <span>{error}</span>
                {github?.url && (
                    <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="readme-viewer__github-link"
                    >
                        <FiExternalLink />
                        {language === 'tr' ? 'GitHub\'da Görüntüle' : 'View on GitHub'}
                    </a>
                )}
            </div>
        );
    }

    return (
        <div className="readme-viewer">
            <div className="readme-viewer__content">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // Custom link handling to open in new tab
                        a: ({ node, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" />
                        ),
                        // Style code blocks
                        code: ({ node, inline, className, children, ...props }) => {
                            return inline ? (
                                <code className="readme-inline-code" {...props}>
                                    {children}
                                </code>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {readme}
                </ReactMarkdown>
            </div>
        </div>
    );
}
