import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

export default function Skills() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.skills.title}
                </motion.h2>

                <motion.div
                    className="skills__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.skills.categories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skills__category card"
                            variants={categoryVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.h3
                                className="skills__category-title"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                            >
                                {category.name}
                            </motion.h3>
                            <motion.div
                                className="skills__items"
                                variants={containerVariants}
                            >
                                {category.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skills__item"
                                        variants={skillVariants}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
