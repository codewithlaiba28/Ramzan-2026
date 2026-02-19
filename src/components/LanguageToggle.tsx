'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/styles/LanguageToggle.module.css';

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.container}>
            <button
                className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
            >
                English
            </button>
            <button
                className={`${styles.button} ${language === 'ur' ? styles.active : ''} urdu-text`}
                onClick={() => setLanguage('ur')}
            >
                اردو
            </button>
        </div>
    );
};

export default LanguageToggle;
