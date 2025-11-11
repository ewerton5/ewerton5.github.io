export const currencyFormat = (lang: string, currency: string) =>
    new Intl.NumberFormat(lang, {
        style: "currency",
        currency
    });
