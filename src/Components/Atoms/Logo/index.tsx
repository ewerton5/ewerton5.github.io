import profile from "data/profile.json";

export default function Logo() {
    return (
        <img
            src={profile.profilePicture}
            alt={profile.shortName}
            className="w-[40px] h-[40px] object-cover rounded-[20px]"
        />
    );
}
