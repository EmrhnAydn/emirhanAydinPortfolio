import { motion } from 'motion/react';
import { FiLinkedin, FiGithub, FiDownload, FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
    const { t } = useLanguage();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FiLinkedin,
            url: 'https://www.linkedin.com/in/emirhan-ayd%C4%B1n-7374b3252/',
            color: '#0A66C2'
        },
        {
            name: 'GitHub',
            icon: FiGithub,
            url: 'https://github.com/EmrhnAydn',
            color: '#ffffff'
        }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t.contact.title}
                </motion.h2>

                <motion.p
                    className="contact__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {t.contact.subtitle}
                </motion.p>

                <div className="contact__content">
                    <div className="contact__social-links">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__social-link"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: `0 20px 40px rgba(139, 92, 246, 0.3)`
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="contact__social-icon"
                                    style={{ '--icon-color': link.color }}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <link.icon />
                                </motion.div>
                                <span className="contact__social-name">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="/Emirhan_Aydin_CV.pdf"
                        download
                        className="contact__cv-button"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiDownload className="contact__cv-icon" />
                        <span>{t.contact.downloadCV}</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
