export type PlatformDetail = {
    name: string;
    detailedDescription: string;
    learnings: string[];
    images: string[];
};

export type Project = {
    id: string;
    slug: string;
    title: string;
    categories: string[];
    startDate: string;
    shortDescription: string;
    technologies: string[];
    images: {
        thumbnail: string;
    };
    backgroundColor: string;
    links?: {
        web?: string;
        github?: string;
        android?: string;
        ios?: string;
    };
    platforms?: PlatformDetail[];
};
