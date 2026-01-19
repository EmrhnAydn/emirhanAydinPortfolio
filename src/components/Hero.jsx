import { memo } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

function Hero() {
    const { t } = useLanguage();

    const handleScrollDown = () => {
        const element = document.querySelector('#education');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero__bg-elements">
                {/* CSS-animated glows */}
                <div className="hero__glow hero__glow--1" />
                <div className="hero__glow hero__glow--2" />
                <div className="hero__grid" />

                {/* CSS-animated particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="hero__particle"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="hero__content">
                <p className="hero__greeting">
                    {t.hero.greeting}
                </p>

                <h1 className="hero__name">
                    {t.hero.name}
                </h1>

                <p className="hero__title">
                    <span className="hero__title-text">
                        {t.hero.title}
                    </span>
                </p>

                <p className="hero__description">
                    {t.hero.description}
                </p>

                <button
                    className="hero__cta"
                    onClick={handleScrollDown}
                >
                    <span>{t.hero.cta}</span>
                    <span className="hero__cta-arrow">
                        <FiArrowDown className="hero__cta-icon" />
                    </span>
                </button>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
            </div>
        </section>
    );
}

export default memo(Hero);
