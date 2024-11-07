import { forwardRef } from 'react';
import { PROJECTS } from '../constants';


const Projects = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="border-b border-neutral-900 pb-0 pt-10">
      {/* Increased max-width constraint and padding */}
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mb-8 mt-4 h-1 w-20 bg-blue-500 mx-auto rounded-full" />


        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-800/50 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Project Image */}
                <div className="relative sm:w-1/4">
                  <img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      Technologies
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
);

export default Projects;
