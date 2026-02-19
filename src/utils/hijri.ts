export const getHijriDate = (date: Date): string => {
    // Manual offset logic for Karachi 2026
    // Feb 19, 2026 = 1 Ramadan 1447
    const ramadanStart = new Date(2026, 1, 19); // Months are 0-indexed
    const diffTime = date.getTime() - ramadanStart.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays < 30) {
        return `${diffDays + 1} Ramadan 1447`;
    }

    // Fallback to standard conversion for other dates
    return new Intl.DateTimeFormat('en-u-ca-islamic-uma-nu-latn', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
};

export const getRamadanDay = (date: Date): number | null => {
    const ramadanStart = new Date(2026, 1, 19);
    const diffTime = date.getTime() - ramadanStart.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays < 30) {
        return diffDays + 1;
    }
    return null;
};
