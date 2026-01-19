import { motion } from 'motion/react';
import { FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

export default function Experience() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.experience.title}
                </motion.h2>

                <motion.div
                    className="experience__timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t.experience.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="experience__item"
                            variants={itemVariants}
                        >
                            <div className="experience__marker">
                                <motion.div
                                    className="experience__dot"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)"
                                    }}
                                >
                                    <FiBriefcase />
                                </motion.div>
                                <motion.div
                                    className="experience__line"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.2 + 0.3,
                                        duration: 0.5
                                    }}
                                />
                            </div>

                            <motion.div
                                className="experience__card card"
                                whileHover={{
                                    scale: 1.02,
                                    x: 10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="experience__header">
                                    <motion.h3
                                        className="experience__position"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.2 }}
                                    >
                                        {item.position}
                                    </motion.h3>
                                    <motion.span
                                        className="experience__period badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                    >
                                        {item.period}
                                    </motion.span>
                                </div>
                                <p className="experience__company">{item.company}</p>
                                <p className="experience__description">{item.description}</p>
                                <div className="experience__highlights">
                                    {item.highlights.map((highlight, hIndex) => (
                                        <motion.span
                                            key={hIndex}
                                            className="experience__tag"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.2 + hIndex * 0.1 + 0.4
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -2
                                            }}
                                        >
                                            {highlight}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
