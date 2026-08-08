import type ptBREducation from "data/pt-BR/education.json";
import type ptBRProfile from "data/pt-BR/profile.json";
import type ptBRServices from "data/pt-BR/services.json";
import type ptBRSetup from "data/pt-BR/setup.json";
import type ptBRTestimonials from "data/pt-BR/testimonials.json";
import type ptBRTimeline from "data/pt-BR/timeline.json";

export type Profile = typeof ptBRProfile;
export type Service = (typeof ptBRServices)[number];
export type Testimonial = (typeof ptBRTestimonials)[number];
export type TimelineItem = (typeof ptBRTimeline)[number];
export type SetupItem = (typeof ptBRSetup)[number];
export type Education = typeof ptBREducation;
