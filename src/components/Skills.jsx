import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

// Simple component - no motion animations for performance
function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title skills__title-animated">
                    {t.skills.title}
                </h2>

                <div className="skills__grid">
                    {t.skills.categories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="skills__category card"
                            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                        >
                            <h3 className="skills__category-title">
                                {category.name}
                            </h3>
                            <div className="skills__items">
                                {category.items.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skills__item"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Skills);
