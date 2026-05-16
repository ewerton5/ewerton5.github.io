"use client";

import { useState } from "react";

import LightboxModal from "Components/Molecules/LightboxModal";
import PlatformInfo from "Components/Molecules/PlatformInfo";
import PlatformTabs from "Components/Molecules/PlatformTabs";
import ProjectHeader from "Components/Molecules/ProjectHeader";
import ProjectLinksBar from "Components/Molecules/ProjectLinksBar";
import ImageCarousel from "Components/Organisms/ImageCarousel";
import type { Project } from "types/project";

type ProjectDetailsClientProps = {
    project: Project;
};

export default function ProjectDetailsClient({
    project
}: ProjectDetailsClientProps) {
    const [activePlatformIndex, setActivePlatformIndex] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    const { title, categories, startDate, technologies, links, platforms } =
        project;

    if (!platforms || platforms.length === 0) return null;

    const safeIndex = Math.min(activePlatformIndex, platforms.length - 1);
    const activePlatform = platforms[safeIndex];

    return (
        <div className="flex flex-col gap-large">
            <ProjectHeader
                title={title}
                categories={categories}
                startDate={startDate}
                technologies={technologies}
            />

            <ProjectLinksBar links={links} />

            <PlatformTabs
                platforms={platforms}
                activeIndex={safeIndex}
                onChange={setActivePlatformIndex}
            />

            <PlatformInfo
                name={activePlatform.name}
                description={activePlatform.detailedDescription}
                learnings={activePlatform.learnings}
            />

            <ImageCarousel
                images={activePlatform.images}
                platformName={activePlatform.name}
                onImageClick={setFullscreenImage}
            />

            {fullscreenImage && (
                <LightboxModal
                    imageUrl={fullscreenImage}
                    onClose={() => setFullscreenImage(null)}
                />
            )}
        </div>
    );
}
