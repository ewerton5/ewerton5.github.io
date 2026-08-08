import type { Profile } from "types/data";

type LogoProps = {
    profile: Profile;
};

export default function Logo({ profile }: LogoProps) {
    return (
        <img
            src={profile.profilePicture}
            alt={profile.shortName}
            className="w-[40px] h-[40px] object-cover rounded-[20px]"
        />
    );
}
