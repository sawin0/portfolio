import React from 'react';
import { Card, CardContent } from './ui/Card';
import { EXPERIENCES } from '../constants';
import { Badge } from './ui/Badge';

const Calendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const Building2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M8 14h.01"></path>
    </svg>
);

const Code2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const ExperienceCard = ({ experience }) => (
    <Card className="w-full transition-all duration-300 bg-white/50 dark:bg-neutral-900/50">
        <CardContent className="pt-6">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex items-center lg:w-1/4 text-neutral-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.year}</span>
                </div>

                <div className="lg:w-3/4">
                    <div className="flex flex-col mb-3">
                        <h3 className="font-semibold text-lg">{experience.role}</h3>
                        <div className="flex items-center text-neutral-500">
                            <Building2 className="w-4 h-4 mr-2" />
                            <span className="text-sm">{experience.company}</span>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-500 mb-4">{experience.description}</p>

                    <div className="flex items-center gap-2 mb-2">
                        <Code2 className="w-4 h-4 text-neutral-500" />
                        <span className="text-sm text-neutral-500">Technologies</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="bg-neutral-100 dark:bg-neutral-800"
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

const Experience = () => {
    return (
        <section className="pt-10">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-0">
                    Experience
                </h2>
                <div className="mb-8 mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

                <div className="max-w-4xl mx-auto">
                    {EXPERIENCES.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
