import TimelineCard from "Components/Molecules/TimelineCard";
import type { TimelineItem } from "types/data";
import type { Dictionary } from "types/dictionary";

type TimelineSectionProps = {
    dict: Dictionary;
    timeline: TimelineItem[];
};

export default function TimelineSection({
    dict,
    timeline
}: TimelineSectionProps) {
    return (
        <section className="mb-xxlarge">
            <h2 className="text-center mb-large">{dict.timeline.title}</h2>
            {timeline.map((item) => (
                <TimelineCard
                    key={item.id}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </section>
    );
}
