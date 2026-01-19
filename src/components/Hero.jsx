import { motion } from 'motion/react';
import { FiArrowDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
    const { t } = useLanguage();

    const handleScrollDown = () => {
        const element = document.querySelector('#education');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Floating animation variants
    const floatingAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Letter animation for name
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.05,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const nameLetters = t.hero.name.split('');

    return (
        <section id="home" className="hero">
            <div className="hero__bg-elements">
                <motion.div
                    className="hero__glow hero__glow--1"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="hero__glow hero__glow--2"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <div className="hero__grid" />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="hero__particle"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            <div className="hero__content">
                <motion.p
                    className="hero__greeting"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {t.hero.greeting}
                </motion.p>

                <h1 className="hero__name">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={letterVariants}
                            className="hero__letter"
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    className="hero__title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <motion.span
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="hero__title-text"
                    >
                        {t.hero.title}
                    </motion.span>
                </motion.p>

                <motion.p
                    className="hero__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    {t.hero.description}
                </motion.p>

                <motion.button
                    className="hero__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleScrollDown}
                >
                    <span>{t.hero.cta}</span>
                    <motion.span
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FiArrowDown className="hero__cta-icon" />
                    </motion.span>
                </motion.button>
            </div>

            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                {...floatingAnimation}
            >
                <motion.div
                    className="hero__scroll-mouse"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className="hero__scroll-wheel"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
