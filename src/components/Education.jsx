import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import kocaeliLogo from '../assets/kocaeli-logo.png';
import './Education.css';

function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title education__title-animated">
                    {t.education.title}
                </h2>

                <div className="education__grid">
                    {t.education.items.map((item, index) => (
                        <div
                            key={index}
                            className="education__card card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="education__logo-wrapper">
                                <img
                                    src={kocaeliLogo}
                                    alt="Kocaeli University"
                                    className="education__logo"
                                    loading="lazy"
                                />
                            </div>
                            <div className="education__content">
                                <h3 className="education__degree">
                                    {item.degree}
                                </h3>
                                <p className="education__school">
                                    {item.school}
                                </p>
                                <div className="education__meta">
                                    <span className="education__period badge">{item.period}</span>
                                    <span className="education__gpa badge">{item.gpa}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Education);
