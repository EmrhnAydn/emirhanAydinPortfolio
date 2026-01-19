import { useState, useCallback, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projectsData';
import ProjectCard from './projects/ProjectCard';
import './Projects.css';

// Lazy load ProjectModal - only loaded when user clicks a project
const ProjectModal = lazy(() => import('./projects/ProjectModal'));

// Animation variants moved outside component
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

// Loading fallback for modal
const ModalLoader = () => (
    <div className="modal-loader">
        <div className="modal-loader__spinner" />
    </div>
);

export default function Projects() {
    const { language, t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = useCallback((project) => {
        setSelectedProject(project);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    return (
        <>
            <section id="projects" className="projects section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
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
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                language={language}
                                onOpenModal={handleOpenModal}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Modal - Lazy Loaded */}
            {selectedProject && (
                <Suspense fallback={<ModalLoader />}>
                    <ProjectModal
                        project={selectedProject}
                        language={language}
                        onClose={handleCloseModal}
                    />
                </Suspense>
            )}
        </>
    );
}
