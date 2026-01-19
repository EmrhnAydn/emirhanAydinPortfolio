import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // 'en' means showing "TR" button (content is English, click to switch to Turkish)
    // 'tr' means showing "EN" button (content is Turkish, click to switch to English)
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'tr' : 'en');
    };

    const t = translations[language];

    // Display shows opposite: when language is 'en', display 'TR' (indicating you can switch to TR)
    const displayLabel = language === 'en' ? 'TR' : 'EN';

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, displayLabel }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
