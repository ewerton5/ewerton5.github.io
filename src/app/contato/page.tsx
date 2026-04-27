import ContactConversationSection from "Components/Organisms/ContactConversationSection";
import SocialNetworksSection from "Components/Organisms/SocialNetworksSection";
import MainLayout from "Components/Templates/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <div className="w-full max-w-[900px] mx-auto animate-fade-in-up">
                <ContactConversationSection />
                <SocialNetworksSection />
            </div>
        </MainLayout>
    );
};

export default Contact;
