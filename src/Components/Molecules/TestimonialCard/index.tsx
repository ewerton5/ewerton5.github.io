import { FaQuoteLeft } from "react-icons/fa";

type TestimonialCardProps = {
    text: string;
    name: string;
    role: string;
    avatarUrl: string;
};

const TestimonialCard = ({
    text,
    name,
    role,
    avatarUrl
}: TestimonialCardProps) => (
    <div className="bg-white rounded-2xl p-large shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative flex flex-col justify-between">
        <FaQuoteLeft className="absolute top-6 right-6 text-[32px] text-gray-200 opacity-50" />
        <p className="text-small text-text-secondary italic leading-[1.7] mb-large relative z-10">
            {`"${text}"`}
        </p>
        <div className="flex items-center gap-small">
            <img
                src={avatarUrl}
                alt={name}
                className="w-[50px] h-[50px] rounded-full object-cover shrink-0"
            />
            <div>
                <h4 className="text-small text-secondary mb-[2px]">{name}</h4>
                <span className="text-xxsmall text-gray-500">{role}</span>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
