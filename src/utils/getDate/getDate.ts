const getFormattedDate = (daysToAdd: number = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const getCurrentDate = () => getFormattedDate();
export const getTomorrowDate = () => getFormattedDate(1);
export const getAfterTomorrowDate = () => getFormattedDate(2);