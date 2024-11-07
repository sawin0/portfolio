import React from 'react';
import { HERO_CONTENT, SKILLS } from '../constants';
import aboutImg from "../assets/about.jpg";


const SkillBadge = (props) => (
  <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md dark:bg-neutral-800">
    <span className="text-2xl" style={{ color: props.color }}>{props.icon}</span>
    <span className="text-sm text-neutral-700 dark:text-neutral-300">{props.name}</span>
  </div>
);

const About = () => {
  // Static content instead of importing from constants
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center">
        <h2 className="mb-0 mt-8 inline-flex text-4xl font-light tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          About
          <span className="ml-2 text-neutral-500 dark:text-neutral-400">Me</span>
        </h2>
        <div className="mb-8 mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </div>

      {/* Content Grid */}
      <div className="grid gap-1 lg:grid-cols-2 lg:gap-8">
        {/* Image Container */}
        <div className="relative flex items-center justify-center">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-xl dark:bg-neutral-800">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-pink-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />

            <img
              src={aboutImg}
              alt="About me"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <p className="max-w-xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {HERO_CONTENT}
            </p>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  SkillBadge(skill)
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="pt-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                View Resume
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className='py-4'></div>
    </div>
  );
};

export default About;
