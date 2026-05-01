type HeroImageProps = {
    src: string;
    alt: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-[380px] h-[380px] rounded-full object-cover border-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-laptop:w-[300px] max-laptop:h-[300px] max-tablet:w-[250px] max-tablet:h-[250px] max-tablet:mb-medium"
        />
    );
}
