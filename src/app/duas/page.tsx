'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from '@/styles/SehriIftar.module.css'; // Reusing premium card styles

const DuasPage: React.FC = () => {
    const { t, language } = useLanguage();

    const todasDuas = [
        {
            title: 'Taraweeh Dua',
            arabic: 'سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ، سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ، سُبْحَانَ الْمَلِكِ الْحَيِّ الَّذِي لَا يَنَامُ وَلَا يَمُوتُ، سُبُّوحٌ قُدُّوسٌ رَبُّنَا وَرَبُّ الْمَلَائِكَةِ وَالرُّوحِ، اَللَّهُمَّ أَجِرْنَا مِنَ النَّارِ يَا مُجِيرُ يَا مُجِيرُ يَا مُجِيرُ',
            urdu: 'پاک ہے وہ اللہ جو زمین و آسمان کی بادشاہی کا مالک ہے، پاک ہے وہ اللہ جو عزت، عظمت، ہیبت، قدرت، بڑائی اور غلبہ والا ہے۔ پاک ہے وہ بادشاہ جو زندہ ہے، نہ سوتا ہے اور نہ مرتا ہے۔ بہت زیادہ پاک اور بہت زیادہ مقدس ہے ہمارا رب اور فرشتوں اور روح کا رب۔ اے اللہ! ہمیں آگ سے بچا، اے بچانے والے، اے بچانے والے، اے بچانے والے۔',
            category: 'Special Ramadan'
        },
        {
            title: 'First Ashra (Days 1-10)',
            arabic: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
            urdu: 'اے میرے رب! مجھے بخش دے اور مجھ پر رحم فرما اور تو سب سے بہتر رحم فرمانے والا ہے۔',
            category: 'Mercy'
        },
        {
            title: 'Second Ashra (Days 11-20)',
            arabic: 'أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ',
            urdu: 'میں اللہ سے اپنے تمام گناہوں کی بخشش مانگتا ہوں جو میرا رب ہے اور اسی کی طرف رجوع کرتا ہوں۔',
            category: 'Forgiveness'
        },
        {
            title: 'Third Ashra (Days 21-30)',
            arabic: 'اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
            urdu: 'اے اللہ! مجھے آگ کے عذاب سے بچا۔',
            category: 'Protection'
        }
    ];

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>{t('duas')}</h1>

            <div style={{ display: 'grid', gap: '30px' }}>
                {todasDuas.map((dua, i) => (
                    <div key={i} className="glass-card animate-fade-in" style={{ padding: '40px', textAlign: 'center' }}>
                        <span style={{ color: 'var(--accent)', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 700 }}>{dua.category}</span>
                        <h3 style={{ margin: '15px 0' }}>{dua.title}</h3>
                        <p className="arabic-text" style={{ fontSize: '2.2rem', margin: '30px 0', lineHeight: 1.6 }}>{dua.arabic}</p>
                        <p className="urdu-text" style={{ fontSize: '1.4rem', color: 'var(--text-gold)', opacity: 0.9 }}>{dua.urdu}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DuasPage;
