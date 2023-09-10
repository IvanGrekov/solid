export const getCurrentMonth = (): number => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    return currentMonth;
}

export const getMonthName = (month: number): string => {
    const date = new Date(2042, month);
    const monthName = date.toLocaleString('en-US', { month: 'long' });

    return monthName;
}

export const getCurrentYear = (): number => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
}
