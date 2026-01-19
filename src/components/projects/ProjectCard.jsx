import { memo, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiImage, FiLock } from 'react-icons/fi';
import { getProjectText } from '../../data/projectsData';
import './ProjectCard.css';

// Animation variants moved outside component to prevent recreation on each render
const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const hoverTransition = { duration: 0.3 };

function ProjectCard({ project, language, onOpenModal }) {
    const hasGithub = project.github?.url;
    const hasReadme = project.github?.showReadme;
    const hasImages = project.images && project.images.length > 0;
    const isPrivate = project.visibility === 'private';
    const hasLiveUrl = project.liveUrl;

    const title = getProjectText(project, 'title', language);
    const description = getProjectText(project, 'description', language);

    // Memoize badge to prevent recalculation - only show for private projects
    const badge = useMemo(() => {
        if (isPrivate) {
            return { icon: <FiLock />, text: language === 'tr' ? 'Gizli' : 'Private', className: 'badge--private' };
        }
        return null;
    }, [isPrivate, language]);

    const handleCardClick = useCallback(() => {
        if (!isPrivate || project.longDescription) {
            onOpenModal(project);
        }
    }, [isPrivate, project, onOpenModal]);

    const stopPropagation = useCallback((e) => e.stopPropagation(), []);

    return (
        <motion.div
            className={`project-card card ${isPrivate ? 'project-card--private' : ''}`}
            variants={cardVariants}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: hoverTransition
            }}
            onClick={handleCardClick}
        >
            <div className="project-card__glow" />

            {/* Badge */}
            {badge && (
                <div className={`project-card__badge ${badge.className}`}>
                    {badge.icon}
                    <span>{badge.text}</span>
                </div>
            )}

            {/* Header with icons */}
            <div className="project-card__header">
                <div className="project-card__icon">
                    {isPrivate ? <FiLock /> : hasGithub ? <FiGithub /> : <FiImage />}
                </div>

                <div className="project-card__actions">
                    {hasGithub && !isPrivate && (
                        <a
                            href={project.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            onClick={stopPropagation}
                            title="GitHub"
                        >
                            <FiGithub />
                        </a>
                    )}
                    {hasLiveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            onClick={stopPropagation}
                            title={language === 'tr' ? 'Canlı Demo' : 'Live Demo'}
                        >
                            <FiExternalLink />
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 className="project-card__title">{title}</h3>

            {/* Description */}
            <p className="project-card__description">{description}</p>

            {/* Content indicators - only show image count */}
            {hasImages && (
                <div className="project-card__indicators">
                    <span className="project-card__indicator" title={language === 'tr' ? 'Görseller' : 'Images'}>
                        <FiImage /> {project.images.length} {language === 'tr' ? 'görsel' : 'images'}
                    </span>
                </div>
            )}

            {/* Tech tags - simplified without individual animations */}
            <div className="project-card__tech">
                {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="project-card__tech-tag">
                        {tech}
                    </span>
                ))}
            </div>

            {/* View more hint */}
            <div className="project-card__hint">
                <span>{language === 'tr' ? 'Detaylar için tıkla' : 'Click for details'}</span>
            </div>
        </motion.div>
    );
}

export default memo(ProjectCard);
