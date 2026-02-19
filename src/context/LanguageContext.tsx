'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    calendar: 'Calendar',
    namaz: 'Namaz Times',
    sehri_iftar: 'Sehri & Iftar',
    guide: 'Ramadan Guide',
    duas: 'Duas & Azkar',
    ramadan_mubarak: 'Ramadan Mubarak 2026',
    hijri_date: 'Hijri Date',
    today_sehri: "Today's Sehri",
    today_iftar: "Today's Iftar",
    countdown_to_iftar: 'Countdown to Iftar',
    countdown_to_sehri: 'Countdown to Sehri',
    karachi_pakistan: 'Karachi, Pakistan',
    quote_of_day: 'Islamic Quote of the Day',
    quick_links: 'Quick Links',
    ashra_1: '1st Ashra (Mercy)',
    ashra_2: '2nd Ashra (Forgiveness)',
    ashra_3: '3rd Ashra (Protection)',
  },
  ur: {
    home: 'مرحبا',
    calendar: 'رمضان کیلنڈر',
    namaz: 'نماز اوقات',
    sehri_iftar: 'سحری و افطار',
    guide: 'رمضان گائیڈ',
    duas: 'دعا و اذکار',
    ramadan_mubarak: 'رمضان مبارک ١٤٤٧',
    hijri_date: 'ہجری تاریخ',
    today_sehri: 'آج کی سحری',
    today_iftar: 'آج کی افطار',
    countdown_to_iftar: 'افطار میں باقی وقت',
    countdown_to_sehri: 'سحری میں باقی وقت',
    karachi_pakistan: 'کراچی، پاکستان',
    quote_of_day: 'آج کی اسلامی بات',
    quick_links: 'فوری لنکس',
    ashra_1: 'پہلا عشرہ (رحمت)',
    ashra_2: 'دوسرا عشرہ (مغفرت)',
    ashra_3: 'تیسرا عشرہ (نجات)',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ur' ? 'urdu-text' : ''} dir={language === 'ur' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
