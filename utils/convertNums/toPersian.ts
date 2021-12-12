export const toPersianDigits = (value: string): string => {
    const id: Array<string> = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return value.replace(/[0-9]/g, (x: string) => id[+x]);
};