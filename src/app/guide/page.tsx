'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/styles/Guide.module.css';

const GuidePage: React.FC = () => {
    const { t, language } = useLanguage();

    const sections = [
        {
            title: language === 'ur' ? 'روزہ توڑنے والی چیزیں' : 'Acts that Invalidates Fast',
            urduTitle: 'مفسداتِ روزہ',
            items: [
                { en: 'Eating or drinking intentionally', ur: 'جان بوجھ کر کچھ کھانا یا پینا' },
                { en: 'Vomiting intentionally', ur: 'جان بوجھ کر قے کرنا' },
                { en: 'Smoking or using inhalers incorrectly', ur: 'سگریٹ نوشی یا غلط طریقے سے انہیلر کا استعمال' }
            ]
        },
        {
            title: language === 'ur' ? 'وہ چیزیں جن سے روزہ نہیں ٹوٹتا' : 'Acts that do NOT Break Fast',
            urduTitle: 'غیر مفسدات',
            items: [
                { en: 'Eating or drinking out of forgetfulness', ur: 'بھولے سے کچھ کھا پی لینا' },
                { en: 'Using Miswak or toothbrush (without paste)', ur: 'مسواک کرنا یا ٹوتھ برش استعمال کرنا' },
                { en: 'Applying oil, kohl, or eye drops', ur: 'تیل، سرمہ یا آنکھ میں دوا ڈالنا' },
                { en: 'Injections for medical purposes', ur: 'طبی ضرورت کے لیے انجیکشن لگوانا' }
            ]
        },
        {
            title: 'Zakat & Charity in Ramadan',
            urduTitle: 'زکوٰۃ اور صدقات',
            items: [
                { en: 'Ramadan is the best time for Zakat', ur: 'رمضان زکوٰۃ کی ادائیگی کے لیے بہترین وقت ہے' },
                { en: 'Calculated as 2.5% of total wealth', ur: 'کل جمع شدہ مال کا ڈھائی فیصد' }
            ]
        }
    ];

    return (
        <div className={styles.main}>
            <h1 className={`${styles.title} animate-fade-in`}>
                {t('guide')}
            </h1>

            <div className={styles.contentGrid}>
                {sections.map((section, idx) => (
                    <div key={idx} className={`${styles.section} glass-card animate-fade-in`}>
                        <div className={styles.sectionHeader}>
                            <h2>{section.title}</h2>
                            <span className="urdu-text" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{section.urduTitle}</span>
                        </div>
                        <ul className={styles.guideList}>
                            {section.items.map((item, i) => (
                                <li key={i} className={styles.guideItem}>
                                    <p className={styles.englishText}>{item.en}</p>
                                    <p className={`${styles.urduText} urdu-text`}>{item.ur}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuidePage;
