import { memo } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title experience__title-animated">
                    {t.experience.title}
                </h2>

                <div className="experience__timeline">
                    {t.experience.items.map((item, index) => (
                        <div
                            key={index}
                            className="experience__item"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="experience__marker">
                                <div className="experience__dot">
                                    <FiBriefcase />
                                </div>
                                <div className="experience__line" />
                            </div>

                            <div className="experience__card card">
                                <div className="experience__header">
                                    <h3 className="experience__position">
                                        {item.position}
                                    </h3>
                                    <span className="experience__period badge">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="experience__company">{item.company}</p>
                                <p className="experience__description">{item.description}</p>
                                <div className="experience__highlights">
                                    {item.highlights.map((highlight, hIndex) => (
                                        <span
                                            key={hIndex}
                                            className="experience__tag"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Experience);
