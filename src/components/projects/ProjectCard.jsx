import { motion } from 'motion/react';
import { FiExternalLink, FiGithub, FiImage, FiBook, FiLock, FiEye } from 'react-icons/fi';
import { getProjectText } from '../../data/projectsData';
import './ProjectCard.css';

export default function ProjectCard({ project, language, onOpenModal, index }) {
    const hasGithub = project.github?.url;
    const hasReadme = project.github?.showReadme;
    const hasImages = project.images && project.images.length > 0;
    const isPrivate = project.visibility === 'private';
    const hasLiveUrl = project.liveUrl;

    const title = getProjectText(project, 'title', language);
    const description = getProjectText(project, 'description', language);

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

    // Determine project type badge
    const getProjectBadge = () => {
        if (isPrivate) {
            return { icon: <FiLock />, text: language === 'tr' ? 'Gizli' : 'Private', className: 'badge--private' };
        }
        if (hasReadme && hasImages) {
            return { icon: <FiEye />, text: language === 'tr' ? 'Tam Detay' : 'Full Details', className: 'badge--full' };
        }
        if (hasReadme) {
            return { icon: <FiBook />, text: 'README', className: 'badge--readme' };
        }
        if (hasImages) {
            return { icon: <FiImage />, text: language === 'tr' ? 'Galeri' : 'Gallery', className: 'badge--gallery' };
        }
        return null;
    };

    const badge = getProjectBadge();

    const handleCardClick = () => {
        if (!isPrivate || project.longDescription) {
            onOpenModal(project);
        }
    };

    return (
        <motion.div
            className={`project-card card ${isPrivate ? 'project-card--private' : ''}`}
            variants={cardVariants}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
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
                <motion.div
                    className="project-card__icon"
                    whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                    }}
                >
                    {isPrivate ? <FiLock /> : hasGithub ? <FiGithub /> : <FiImage />}
                </motion.div>

                <div className="project-card__actions">
                    {hasGithub && !isPrivate && (
                        <motion.a
                            href={project.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            title="GitHub"
                        >
                            <FiGithub />
                        </motion.a>
                    )}
                    {hasLiveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__link"
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            title={language === 'tr' ? 'Canlı Demo' : 'Live Demo'}
                        >
                            <FiExternalLink />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Title */}
            <motion.h3
                className="project-card__title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
            >
                {title}
            </motion.h3>

            {/* Description */}
            <p className="project-card__description">{description}</p>

            {/* Content indicators */}
            <div className="project-card__indicators">
                {hasReadme && (
                    <span className="project-card__indicator" title="README">
                        <FiBook /> README
                    </span>
                )}
                {hasImages && (
                    <span className="project-card__indicator" title={language === 'tr' ? 'Görseller' : 'Images'}>
                        <FiImage /> {project.images.length}
                    </span>
                )}
            </div>

            {/* Tech tags */}
            <div className="project-card__tech">
                {project.tech.map((tech, techIndex) => (
                    <motion.span
                        key={techIndex}
                        className="project-card__tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.4 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(139, 92, 246, 0.2)",
                            color: "#a78bfa"
                        }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* View more hint */}
            <div className="project-card__hint">
                <span>{language === 'tr' ? 'Detaylar için tıkla' : 'Click for details'}</span>
            </div>
        </motion.div>
    );
}
