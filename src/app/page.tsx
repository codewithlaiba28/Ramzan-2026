'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import CrescentMoon from '@/components/CrescentMoon';
import { getPrayerTimes } from '@/utils/prayer-times';
import { getHijriDate } from '@/utils/hijri';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const { t, language } = useLanguage();
  const [now, setNow] = useState(new Date());
  const [countdown, setCountdown] = useState({ iftar: '00:00:00', sehri: '00:00:00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();
      setNow(current);

      const times = getPrayerTimes(current);

      const calculateDiff = (timeStr: string) => {
        const [time, period] = timeStr.split(' ');
        let [h, m] = time.split(':').map(Number);
        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;

        const target = new Date(current);
        target.setHours(h, m, 0, 0);

        let diff = target.getTime() - current.getTime();
        if (diff < 0) diff += 24 * 60 * 60 * 1000;

        const hh = Math.floor(diff / (1000 * 60 * 60));
        const mm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((diff % (1000 * 60)) / 1000);

        return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
      };

      setCountdown({
        iftar: calculateDiff(times.maghrib),
        sehri: calculateDiff(times.fajr)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerTimes = getPrayerTimes(now);
  const hijriDateStr = getHijriDate(now);
  const engDateStr = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <CrescentMoon />
          <h1 className={`${styles.title} ${language === 'ur' ? 'urdu-text' : ''}`}>
            {t('ramadan_mubarak')}
          </h1>
          <div className={styles.dateInfo}>
            <span className={styles.hijriDate}>{hijriDateStr}</span>
            <span className={styles.englishDate}>{engDateStr}</span>
          </div>
          <p className={styles.subtitle}>{t('karachi_pakistan')}</p>
        </div>
      </header>

      <section className={styles.countdownSection}>
        <div className={`${styles.timerCard} glass-card`}>
          <span className={styles.timerLabel}>{t('countdown_to_iftar')}</span>
          <div className={styles.timerValue}>{countdown.iftar}</div>
          <div style={{ marginTop: '10px', opacity: 0.7 }}>
            {t('today_iftar')}: {prayerTimes.maghrib}
          </div>
        </div>

        <div className={`${styles.timerCard} glass-card`}>
          <span className={styles.timerLabel}>{t('today_sehri')}</span>
          <div className={styles.timerValue}>{prayerTimes.fajr}</div>
          <div style={{ marginTop: '10px', opacity: 0.7 }}>
            {language === 'ur' ? 'سحری ختم ہونے میں باقی' : 'Time left for Sehri'}: {countdown.sehri}
          </div>
        </div>
      </section>

      <section className={styles.prayerTimesList}>
        {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((p) => (
          <div key={p} className={`${styles.prayerCardSmall} glass-card`}>
            <span style={{ color: 'var(--text-gold)', fontWeight: 600 }}>{p}</span>
            <span style={{ fontSize: '1.2rem' }}>{prayerTimes[p.toLowerCase() as keyof typeof prayerTimes]}</span>
          </div>
        ))}
      </section>

      <div className={`${styles.ashraHighlight} glass-card`}>
        <h3 className={styles.subtitle}>{t('ashra_1')}</h3>
        <p className={`${styles.duaLarge} arabic-text`}>
          لَّهُمَّ ارْحَمْنِي يَا أَرْحَمَ الرَّاحِمِينَ
        </p>
        <p className="urdu-text" style={{ fontSize: '1.4rem' }}>اے اللہ! مجھ پر رحم فرما اے سب سے بڑھ کر رحم فرمانے والے۔</p>
      </div>

      <h2 className={styles.sectionTitle}>🌙 Ramadan Sunnahs & Essentials</h2>
      <section className={styles.sunnahGrid}>
        <div className={`${styles.sunnahCard} glass-card`}>
          <div className={styles.sunnahIcon}>📿</div>
          <div className={styles.sunnahContent}>
            <h4>Daily Adhkar</h4>
            <p>Engage in constant remembrance of Allah (SWT) throughout the day, especially before Iftar.</p>
          </div>
        </div>
        <div className={`${styles.sunnahCard} glass-card`}>
          <div className={styles.sunnahIcon}>🥣</div>
          <div className={styles.sunnahContent}>
            <h4>Delayed Sehri</h4>
            <p>It is Sunnah to delay the pre-dawn meal until shortly before Fajr begins.</p>
          </div>
        </div>
        <div className={`${styles.sunnahCard} glass-card`}>
          <div className={styles.sunnahIcon}>🌴</div>
          <div className={styles.sunnahContent}>
            <h4>Opening with Dates</h4>
            <p>Break your fast with an odd number of dates and plain water as practiced by the Prophet (PBUH).</p>
          </div>
        </div>
        <div className={`${styles.sunnahCard} glass-card`}>
          <div className={styles.sunnahIcon}>📘</div>
          <div className={styles.sunnahContent}>
            <h4>Quran Recitation</h4>
            <p>Ramadan is the month of the Quran. Aim to complete at least one full recitation this month.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
