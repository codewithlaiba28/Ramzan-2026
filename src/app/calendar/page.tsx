'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ramadan2026Data } from '@/data/ramadan-data';
import styles from '@/styles/Calendar.module.css';

const CalendarPage: React.FC = () => {
    const { t, language } = useLanguage();

    // Simple "today" logic for highlighting
    const todayDate = new Date().toDateString();

    return (
        <div className={styles.main}>
            <h1 className={`${styles.title} ${language === 'ur' ? 'urdu-text' : ''}`}>
                {t('calendar')}
            </h1>

            <div className={styles.tableContainer}>
                <table className={styles.calendarTable}>
                    <thead>
                        <tr>
                            <th>{language === 'ur' ? 'روزہ' : 'Day'}</th>
                            <th>{language === 'ur' ? 'تاریخ' : 'Date'}</th>
                            <th>{language === 'ur' ? 'ہجری' : 'Hijri'}</th>
                            <th>{language === 'ur' ? 'سحری' : 'Sehri'}</th>
                            <th>{language === 'ur' ? 'افطار' : 'Iftar'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ramadan2026Data.map((day) => (
                            <tr
                                key={day.day}
                                className={`${styles[`rowAshra${day.ashra}`]} ${day.date === todayDate ? styles.today : ''}`}
                            >
                                <td>{day.day}</td>
                                <td>{new Date(day.date).toLocaleDateString(language === 'ur' ? 'ur-PK' : 'en-US', { day: 'numeric', month: 'short' })}</td>
                                <td className={styles.hijriCell}>{day.hijriDate}</td>
                                <td>{day.sehri}</td>
                                <td>{day.iftar}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalendarPage;
