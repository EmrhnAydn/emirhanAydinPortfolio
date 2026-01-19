import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projectsData';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';
import './Projects.css';

export default function Projects() {
    const { language, t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
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
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                language={language}
                                onOpenModal={handleOpenModal}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    language={language}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}
