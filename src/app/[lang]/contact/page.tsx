import ContactConversationSection from "Components/Organisms/ContactConversationSection";
import SocialNetworksSection from "Components/Organisms/SocialNetworksSection";
import MainLayout from "Components/Templates/MainLayout";
import type { Locale } from "types/dictionary";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type ContactProps = {
    params: Promise<{ lang: string }>;
};

export default async function Contact({ params }: ContactProps) {
    const { lang } = (await params) as { lang: Locale };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );

    return (
        <MainLayout lang={lang} dict={dict} profile={profile}>
            <div className="w-full max-w-[900px] mx-auto animate-fade-in-up">
                <ContactConversationSection dict={dict} profile={profile} />
                <SocialNetworksSection dict={dict} profile={profile} />
            </div>
        </MainLayout>
    );
}
