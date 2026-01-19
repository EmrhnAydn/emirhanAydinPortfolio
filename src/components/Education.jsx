import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import kocaeliLogo from '../assets/kocaeli-logo.png';
import './Education.css';

export default function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" className="education section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {t.education.title}
                </motion.h2>

                <div className="education__grid">
                    {t.education.items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="education__card card"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="education__logo-wrapper"
                                initial={{ opacity: 0, rotate: -10 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                whileHover={{
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <img
                                    src={kocaeliLogo}
                                    alt="Kocaeli University"
                                    className="education__logo"
                                />
                            </motion.div>
                            <div className="education__content">
                                <motion.h3
                                    className="education__degree"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {item.degree}
                                </motion.h3>
                                <motion.p
                                    className="education__school"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {item.school}
                                </motion.p>
                                <motion.div
                                    className="education__meta"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <span className="education__period badge">{item.period}</span>
                                    <span className="education__gpa badge">{item.gpa}</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
