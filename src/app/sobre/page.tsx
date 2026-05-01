import BioSection from "Components/Organisms/BioSection";
import SetupSection from "Components/Organisms/SetupSection";
import TimelineSection from "Components/Organisms/TimelineSection";
import MainLayout from "Components/Templates/MainLayout";

export default function About() {
    return (
        <MainLayout>
            <div className="w-full animate-fade-in-up">
                <h1 className="text-center mb-large">Sobre Mim</h1>

                <BioSection />
                <TimelineSection />
                <SetupSection />
            </div>
        </MainLayout>
    );
}
