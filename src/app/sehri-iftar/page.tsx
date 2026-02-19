'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getPrayerTimes } from '@/utils/prayer-times';
import styles from '@/styles/SehriIftar.module.css';

const SehriIftarPage: React.FC = () => {
    const { t, language } = useLanguage();
    const prayerTimes = getPrayerTimes(new Date());

    return (
        <div className={styles.main}>
            <h1 className={`${styles.title} animate-fade-in`}>
                {t('sehri_iftar')}
            </h1>

            <div className={styles.dualSection}>
                <div className={`${styles.duaCard} glass-card animate-fade-in`}>
                    <span className={styles.categoryLabel}>{language === 'ur' ? 'سحری' : 'SEHRI'}</span>
                    <div className={styles.timeValue}>{prayerTimes.fajr}</div>
                    <h3>{language === 'ur' ? 'سحری کی دعا' : 'Sehri Dua'}</h3>
                    <p className={`${styles.duaArabic} arabic-text`}>وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ</p>
                    <p className={`${styles.duaUrdu} urdu-text`}>اور میں نے کل کے رمضان کے روزے کی نیت کی</p>
                </div>

                <div className={`${styles.duaCard} glass-card animate-fade-in`}>
                    <span className={styles.categoryLabel}>{language === 'ur' ? 'افطار' : 'IFTAR'}</span>
                    <div className={styles.timeValue}>{prayerTimes.maghrib}</div>
                    <h3>{language === 'ur' ? 'افطار کی دعا' : 'Iftar Dua'}</h3>
                    <p className={`${styles.duaArabic} arabic-text`}>اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِك آمنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</p>
                    <p className={`${styles.duaUrdu} urdu-text`}>اے اللہ! میں نے تیرے لیے روزہ رکھا اور تجھ پر ایمان لایا اور تجھ پر بھروسہ کیا اور تیرے دیے ہوئے رزق سے افطار کیا</p>
                </div>
            </div>

            <div className={`${styles.foodSection} glass-card animate-fade-in`}>
                <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>🌙 Recommended Sunnah Foods</h2>
                <div className={styles.foodGrid}>
                    <div className={styles.foodItem}>
                        <span className={styles.icon}>🌴</span>
                        <div>
                            <h4>Dates (Khajoor)</h4>
                            <p>Perfect for instant energy and restoring blood sugar levels.</p>
                        </div>
                    </div>
                    <div className={styles.foodItem}>
                        <span className={styles.icon}>💧</span>
                        <div>
                            <h4>Water</h4>
                            <p>Hydrate slowly and avoid icy cold drinks immediately at Iftar.</p>
                        </div>
                    </div>
                    <div className={styles.foodItem}>
                        <span className={styles.icon}>🥛</span>
                        <div>
                            <h4>Milk/Yogurt</h4>
                            <p>Excellent for Sehri to keep you full and prevent acidity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SehriIftarPage;
