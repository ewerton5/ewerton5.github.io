import AcademicFormationSection from "Components/Organisms/AcademicFormationSection";
import CertificationsFormationSection from "Components/Organisms/CertificationsFormationSection";
import LanguagesFormationSection from "Components/Organisms/LanguagesFormationSection";
import MainLayout from "Components/Templates/MainLayout";

export default function Graduation() {
    return (
        <MainLayout>
            <div className="w-full animate-fade-in-up">
                <h1 className="text-center mb-xlarge">
                    Formação & Conhecimento
                </h1>

                <AcademicFormationSection />
                <CertificationsFormationSection />
                <LanguagesFormationSection />
            </div>
        </MainLayout>
    );
}
