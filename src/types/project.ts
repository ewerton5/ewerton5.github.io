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
};
