import profile from "data/profile.json";

const Logo = () => (
    <img
        src={profile.profilePicture}
        alt="Ewerton Vieira"
        className="w-[40px] h-[40px] object-cover rounded-[20px]"
    />
);

export default Logo;
