import type { Locale } from "types/dictionary";

const PREFERRED_LANG_STORAGE_KEY = "preferred-lang";

export function resolvePreferredLocale(): Locale {
    try {
        const stored = window.localStorage.getItem(PREFERRED_LANG_STORAGE_KEY);

        if (stored === "pt-BR" || stored === "en-US") {
            return stored;
        }
    } catch {
        console.warn(
            "localStorage indisponível. A preferência de idioma não será persistida."
        );
    }

    const browserLanguage = window.navigator.language ?? "";

    return browserLanguage.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US";
}
