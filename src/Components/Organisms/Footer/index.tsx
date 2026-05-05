import SocialMediaGroup from "Components/Molecules/SocialMediaGroup";
import profile from "data/profile.json";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-large">
            <div className="flex flex-col justify-center items-center max-w-[1120px] mx-auto px-small">
                <section className="w-full">
                    <div className="flex justify-between items-center w-full max-tablet:flex-col max-tablet:gap-small">
                        <small className="text-text-secondary text-xsmall">
                            {profile.shortName} © {new Date().getFullYear()}{" "}
                            Todos os direitos reservados.
                        </small>
                        <div className="flex justify-between items-center gap-small">
                            <SocialMediaGroup />
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}
