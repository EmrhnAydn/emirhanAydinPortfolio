import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiX, FiGithub, FiExternalLink, FiLock, FiBook, FiImage } from 'react-icons/fi';
import { getProjectText } from '../../data/projectsData';
import ReadmeViewer from './ReadmeViewer';
import ImageGallery from './ImageGallery';
import './ProjectModal.css';

export default function ProjectModal({ project, language, onClose }) {
    const hasGithub = project?.github?.url;
    const hasReadme = project?.github?.showReadme;
    const hasImages = project?.images && project.images.length > 0;
    const isPrivate = project?.visibility === 'private';
    const hasLiveUrl = project?.liveUrl;

    const title = getProjectText(project, 'title', language);
    const description = getProjectText(project, 'description', language);
    const longDescription = getProjectText(project, 'longDescription', language);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="project-modal"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="project-modal__header">
                        <div className="project-modal__header-content">
                            <div className="project-modal__icon">
                                {isPrivate ? <FiLock /> : hasGithub ? <FiGithub /> : <FiImage />}
                            </div>
                            <div>
                                <h2 className="project-modal__title">{title}</h2>
                                <p className="project-modal__subtitle">{description}</p>
                            </div>
                        </div>

                        <button
                            className="project-modal__close"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Tech Tags */}
                    <div className="project-modal__tech">
                        {project.tech.map((tech, index) => (
                            <span key={index} className="project-modal__tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="project-modal__actions">
                        {hasGithub && !isPrivate && (
                            <a
                                href={project.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal__action-btn"
                            >
                                <FiGithub />
                                <span>{language === 'tr' ? 'GitHub\'da Gör' : 'View on GitHub'}</span>
                            </a>
                        )}
                        {hasLiveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal__action-btn project-modal__action-btn--primary"
                            >
                                <FiExternalLink />
                                <span>{language === 'tr' ? 'Canlı Demo' : 'Live Demo'}</span>
                            </a>
                        )}
                    </div>

                    {/* Content */}
                    <div className="project-modal__content">
                        {/* Long Description */}
                        {longDescription && (
                            <div className="project-modal__section">
                                <h3 className="project-modal__section-title">
                                    {language === 'tr' ? 'Proje Hakkında' : 'About Project'}
                                </h3>
                                <p className="project-modal__description">{longDescription}</p>
                            </div>
                        )}

                        {/* Private Notice */}
                        {isPrivate && (
                            <div className="project-modal__private-notice">
                                <FiLock />
                                <span>
                                    {language === 'tr'
                                        ? 'Bu proje gizlilik anlaşması kapsamında olduğu için detaylar paylaşılamamaktadır.'
                                        : 'This project is under NDA and details cannot be shared publicly.'}
                                </span>
                            </div>
                        )}

                        {/* Images Section - Now before README */}
                        {hasImages && (
                            <div className="project-modal__section">
                                <h3 className="project-modal__section-title">
                                    <FiImage /> {language === 'tr' ? 'Ekran Görüntüleri' : 'Screenshots'}
                                </h3>
                                <ImageGallery images={project.images} language={language} />
                            </div>
                        )}

                        {/* README Section - Now after Images */}
                        {hasReadme && !isPrivate && (
                            <div className="project-modal__section">
                                <h3 className="project-modal__section-title">
                                    <FiBook /> README
                                </h3>
                                <ReadmeViewer github={project.github} language={language} />
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
