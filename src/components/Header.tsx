'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import styles from '@/styles/Header.module.css';

const Header: React.FC = () => {
    const { t, language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: t('home'), path: '/' },
        { name: t('calendar'), path: '/calendar' },
        { name: t('namaz'), path: '/namaz' },
        { name: t('sehri_iftar'), path: '/sehri-iftar' },
        { name: t('guide'), path: '/guide' },
        { name: t('duas'), path: '/duas' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <div className={`${styles.logoMain} ${language === 'ur' ? 'urdu-text' : ''}`}>
                            {t('ramadan_mubarak')}
                        </div>
                        <div className={styles.logoYear}>2026</div>
                    </Link>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={styles.navLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <LanguageToggle />
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={styles.hamburger}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
