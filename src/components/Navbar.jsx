import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
    const { t, toggleLanguage, displayLabel } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', href: '#home' },
        { key: 'education', href: '#education' },
        { key: 'experience', href: '#experience' },
        { key: 'skills', href: '#skills' },
        { key: 'projects', href: '#projects' },
        { key: 'contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="navbar__container">
                <motion.a
                    href="#home"
                    className="navbar__logo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Emirhan Aydın
                </motion.a>

                <div className="navbar__right">
                    <ul className="navbar__menu">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.key}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {t.nav[item.key]}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.button
                        className="navbar__lang-btn"
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <FiGlobe className="navbar__lang-icon" />
                        <span>{displayLabel}</span>
                    </motion.button>

                    <button
                        className="navbar__mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
                initial={false}
                animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {t.nav[item.key]}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.nav>
    );
}
