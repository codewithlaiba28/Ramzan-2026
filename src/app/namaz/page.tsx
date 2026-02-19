'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPrayerTimes } from '@/utils/prayer-times';
import styles from '@/styles/Namaz.module.css';

const NamazPage: React.FC = () => {
    const { t, language } = useLanguage();
    const prayerTimes = getPrayerTimes(new Date());

    const prayers = [
        { name: 'Fajr', urdu: 'فجر', time: prayerTimes.fajr },
        { name: 'Dhuhr', urdu: 'ظہر', time: prayerTimes.dhuhr },
        { name: 'Asr', urdu: 'عصر', time: prayerTimes.asr },
        { name: 'Maghrib', urdu: 'مغرب', time: prayerTimes.maghrib },
        { name: 'Isha', urdu: 'عشاء', time: prayerTimes.isha },
        { name: 'Tahajjud', urdu: 'تہجد', time: prayerTimes.tahajjud },
        { name: 'Taraweeh', urdu: 'تراویح', time: prayerTimes.taraweeh },
    ];

    return (
        <div className={styles.main}>
            <h1 className={`${styles.title} ${language === 'ur' ? 'urdu-text' : ''}`}>
                {t('namaz')}
            </h1>

            <div className={styles.prayerGrid}>
                {prayers.map((prayer) => (
                    <div key={prayer.name} className={`${styles.prayerRow} glass-card animate-fade-in`}>
                        <div className={styles.labelSection}>
                            <span className={styles.prayerName}>{prayer.name}</span>
                            <h3 className={`${styles.urduName} urdu-text`}>{prayer.urdu}</h3>
                        </div>
                        <div className={styles.prayerTime}>{prayer.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NamazPage;
