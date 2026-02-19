export interface RamadanDay {
    day: number;
    date: string; // ISO string
    hijriDate: string;
    ashra: 1 | 2 | 3;
    sehri: string;
    iftar: string;
}

// Data transcribed directly from User's Calendar Image
// Starts Feb 19, 2026 (1st Ramadan)
export const ramadan2026Data: RamadanDay[] = [
    // Ashra 1 (Mercy)
    { day: 1, date: "2026-02-19", hijriDate: "1 Ramadan 1447", ashra: 1, sehri: "5:46 AM", iftar: "6:29 PM" },
    { day: 2, date: "2026-02-20", hijriDate: "2 Ramadan 1447", ashra: 1, sehri: "5:46 AM", iftar: "6:29 PM" },
    { day: 3, date: "2026-02-21", hijriDate: "3 Ramadan 1447", ashra: 1, sehri: "5:45 AM", iftar: "6:30 PM" },
    { day: 4, date: "2026-02-22", hijriDate: "4 Ramadan 1447", ashra: 1, sehri: "5:44 AM", iftar: "6:31 PM" },
    { day: 5, date: "2026-02-23", hijriDate: "5 Ramadan 1447", ashra: 1, sehri: "5:43 AM", iftar: "6:31 PM" },
    { day: 6, date: "2026-02-24", hijriDate: "6 Ramadan 1447", ashra: 1, sehri: "5:43 AM", iftar: "6:32 PM" },
    { day: 7, date: "2026-02-25", hijriDate: "7 Ramadan 1447", ashra: 1, sehri: "5:42 AM", iftar: "6:32 PM" },
    { day: 8, date: "2026-02-26", hijriDate: "8 Ramadan 1447", ashra: 1, sehri: "5:41 AM", iftar: "6:33 PM" },
    { day: 9, date: "2026-02-27", hijriDate: "9 Ramadan 1447", ashra: 1, sehri: "5:40 AM", iftar: "6:33 PM" },
    { day: 10, date: "2026-02-28", hijriDate: "10 Ramadan 1447", ashra: 1, sehri: "5:39 AM", iftar: "6:34 PM" },

    // Ashra 2 (Forgiveness)
    { day: 11, date: "2026-03-01", hijriDate: "11 Ramadan 1447", ashra: 2, sehri: "5:38 AM", iftar: "6:34 PM" },
    { day: 12, date: "2026-03-02", hijriDate: "12 Ramadan 1447", ashra: 2, sehri: "5:38 AM", iftar: "6:34 PM" }, // Image might say 5:38
    { day: 13, date: "2026-03-03", hijriDate: "13 Ramadan 1447", ashra: 2, sehri: "5:37 AM", iftar: "6:35 PM" },
    { day: 14, date: "2026-03-04", hijriDate: "14 Ramadan 1447", ashra: 2, sehri: "5:37 AM", iftar: "6:35 PM" },
    { day: 15, date: "2026-03-05", hijriDate: "15 Ramadan 1447", ashra: 2, sehri: "5:36 AM", iftar: "6:36 PM" },
    { day: 16, date: "2026-03-06", hijriDate: "16 Ramadan 1447", ashra: 2, sehri: "5:35 AM", iftar: "6:36 PM" },
    { day: 17, date: "2026-03-07", hijriDate: "17 Ramadan 1447", ashra: 2, sehri: "5:34 AM", iftar: "6:37 PM" },
    { day: 18, date: "2026-03-08", hijriDate: "18 Ramadan 1447", ashra: 2, sehri: "5:33 AM", iftar: "6:37 PM" },
    { day: 19, date: "2026-03-09", hijriDate: "19 Ramadan 1447", ashra: 2, sehri: "5:32 AM", iftar: "6:38 PM" },
    { day: 20, date: "2026-03-10", hijriDate: "20 Ramadan 1447", ashra: 2, sehri: "5:31 AM", iftar: "6:38 PM" },

    // Ashra 3 (Protection from Hellfire)
    { day: 21, date: "2026-03-11", hijriDate: "21 Ramadan 1447", ashra: 3, sehri: "5:30 AM", iftar: "6:39 PM" },
    { day: 22, date: "2026-03-12", hijriDate: "22 Ramadan 1447", ashra: 3, sehri: "5:29 AM", iftar: "6:39 PM" },
    { day: 23, date: "2026-03-13", hijriDate: "23 Ramadan 1447", ashra: 3, sehri: "5:28 AM", iftar: "6:40 PM" },
    { day: 24, date: "2026-03-14", hijriDate: "24 Ramadan 1447", ashra: 3, sehri: "5:27 AM", iftar: "6:40 PM" },
    { day: 25, date: "2026-03-15", hijriDate: "25 Ramadan 1447", ashra: 3, sehri: "5:26 AM", iftar: "6:41 PM" },
    { day: 26, date: "2026-03-16", hijriDate: "26 Ramadan 1447", ashra: 3, sehri: "5:25 AM", iftar: "6:41 PM" },
    { day: 27, date: "2026-03-17", hijriDate: "27 Ramadan 1447", ashra: 3, sehri: "5:24 AM", iftar: "6:42 PM" },
    { day: 28, date: "2026-03-18", hijriDate: "28 Ramadan 1447", ashra: 3, sehri: "5:23 AM", iftar: "6:42 PM" },
    { day: 29, date: "2026-03-19", hijriDate: "29 Ramadan 1447", ashra: 3, sehri: "5:22 AM", iftar: "6:43 PM" },
    { day: 30, date: "2026-03-20", hijriDate: "30 Ramadan 1447", ashra: 3, sehri: "5:21 AM", iftar: "6:43 PM" },
];
