import TimelineCard from "Components/Molecules/TimelineCard";
import timelineData from "data/timeline.json";

const TimelineSection = () => (
    <section className="mb-xxlarge">
        <h2 className="text-center mb-large">Minha Jornada</h2>
        {timelineData.map((item) => (
            <TimelineCard
                key={item.id}
                year={item.year}
                title={item.title}
                description={item.description}
            />
        ))}
    </section>
);

export default TimelineSection;
