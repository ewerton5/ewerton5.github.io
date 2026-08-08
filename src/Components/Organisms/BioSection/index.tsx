import { Fragment } from "react";

import BioPanel from "Components/Molecules/BioPanel";
import type { Profile } from "types/data";

type BioSectionProps = {
    profile: Profile;
};

export default function BioSection({ profile }: BioSectionProps) {
    return (
        <section className="mb-xxlarge">
            <BioPanel>
                {profile.bio.map((segments, pIndex) => (
                    <p key={pIndex}>
                        {segments.map((segment, sIndex) =>
                            segment.bold ? (
                                <strong key={sIndex}>{segment.text}</strong>
                            ) : (
                                <Fragment key={sIndex}>{segment.text}</Fragment>
                            )
                        )}
                    </p>
                ))}
            </BioPanel>
        </section>
    );
}
