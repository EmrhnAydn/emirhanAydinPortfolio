import { motion } from 'motion/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

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

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.projects.title}
                </motion.h2>

                <motion.div
                    className="projects__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.projects.items.map((project, index) => (
                        <motion.div
                            key={index}
                            className="projects__card card"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="projects__card-glow" />

                            <div className="projects__card-header">
                                <motion.div
                                    className="projects__icon"
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <FiGithub />
                                </motion.div>
                                <motion.a
                                    href="#"
                                    className="projects__link"
                                    whileHover={{ scale: 1.1, rotate: 45 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FiExternalLink />
                                </motion.a>
                            </div>

                            <motion.h3
                                className="projects__title"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {project.title}
                            </motion.h3>
                            <p className="projects__description">{project.description}</p>

                            <div className="projects__tech">
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="projects__tech-tag"
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
