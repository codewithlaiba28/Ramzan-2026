import { ramadan2026Data } from '@/data/ramadan-data';

export interface PrayerTimes {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    tahajjud: string;
    taraweeh: string;
}

export const getPrayerTimes = (date: Date): PrayerTimes => {
    const dateStr = date.toISOString().split('T')[0];
    const ramadanDay = ramadan2026Data.find(d => d.date === dateStr);

    if (ramadanDay) {
        // Exact timings from User Calendar
        // Dhuhr: typically ~12:40 PM in Karachi during Feb/March
        // Asr: ~5:00 PM (Hanafi typical) or 4:15 (Shafi) - Standard Karachi calenders usually list ~5:15 PM later in month
        // Isha: ~8:15 PM
        // We will use standard offsets compatible with the Sehri/Iftar bounds

        return {
            fajr: ramadanDay.sehri, // Sehri ends = Fajr starts
            dhuhr: "12:40 PM",
            asr: "5:00 PM", // Standard average for early March
            maghrib: ramadanDay.iftar, // Iftar = Maghrib
            isha: "8:15 PM",
            tahajjud: "4:00 AM",
            taraweeh: "8:45 PM"
        };
    }

    // Fallback (Approximate Feb 19)
    return {
        fajr: "5:46 AM",
        dhuhr: "12:40 PM",
        asr: "4:55 PM",
        maghrib: "6:29 PM",
        isha: "8:15 PM",
        tahajjud: "4:00 AM",
        taraweeh: "8:45 PM"
    };
};
