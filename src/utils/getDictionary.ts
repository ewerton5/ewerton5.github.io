import type { Dictionary, Locale } from "types/dictionary";

const languages = ["pt-BR", "en-US"] as const;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    "pt-BR": () =>
        import("dictionaries/pt-BR.json").then((module) => module.default),
    "en-US": () =>
        import("dictionaries/en-US.json").then((module) => module.default)
};

export function isValidLocale(locale: string): locale is Locale {
    return languages.includes(locale as Locale);
}

export function getSafeLocale(locale: string): Locale {
    return isValidLocale(locale) ? locale : "en-US";
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
    return dictionaries[getSafeLocale(locale)]?.();
}
