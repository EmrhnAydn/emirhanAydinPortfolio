import { useState, useEffect, memo } from 'react';
import { FiGlobe, FiMenu, FiX, FiZap } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

function Navbar() {
    const { t, toggleLanguage, displayLabel } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
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
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                {/* CSS Lightning Animation */}
                <div className="navbar__lightning-track">
                    <div className="navbar__lightning-bolt" />
                </div>

                <a href="#home" className="navbar__logo">
                    <span className="navbar__logo-bolt">
                        <FiZap />
                    </span>
                    <span className="navbar__logo-text">Emirhan Aydın</span>
                </a>

                <div className="navbar__right">
                    <ul className="navbar__menu">
                        {navItems.map((item, index) => (
                            <li
                                key={item.key}
                                className="navbar__menu-item"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <a
                                    href={item.href}
                                    className="navbar__link"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {t.nav[item.key]}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="navbar__lang-btn"
                        onClick={toggleLanguage}
                    >
                        <FiGlobe className="navbar__lang-icon" />
                        <span>{displayLabel}</span>
                    </button>

                    <button
                        className="navbar__mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
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
            </div>
        </nav>
    );
}

export default memo(Navbar);
