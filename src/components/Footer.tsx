'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
    const { t, language } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={language === 'ur' ? 'urdu-text' : ''}>{t('ramadan_mubarak')}</h2>
                        <p className={language === 'ur' ? 'urdu-text' : ''}>
                            {language === 'ur'
                                ? 'رمضان 2026 کے لیے آپ کی جامع اسلامی گائیڈ۔'
                                : 'Your comprehensive Islamic guide for Ramadan 2026.'}
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>{language === 'ur' ? 'فوری لنکس' : 'Quick Links'}</h4>
                            <Link href="/">{t('home')}</Link>
                            <Link href="/calendar">{t('calendar')}</Link>
                            <Link href="/namaz">{t('namaz')}</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>{language === 'ur' ? 'دیگر' : 'More'}</h4>
                            <Link href="/sehri-iftar">{t('sehri_iftar')}</Link>
                            <Link href="/guide">{t('guide')}</Link>
                            <Link href="/duas">{t('duas')}</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Ramadan Mubarak. All rights reserved.</p>
                    <div className={styles.social}>
                        {/* Social Icons Placeholder */}
                        <span>𝕏</span>
                        <span>📸</span>
                        <span>📘</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
