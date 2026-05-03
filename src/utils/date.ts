export const MONTHS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
] as const;

export function formatDate(date: string) {
    const [year, month] = date.split("-");
    return `${MONTHS[parseInt(month) - 1]} ${year}`;
}
