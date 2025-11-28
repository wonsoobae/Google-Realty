import React from 'react';
import { SectionTitle, Label } from '../components/Typography';
import { CAREER_HISTORY } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <SectionTitle>Professional Experience</SectionTitle>
      <div className="space-y-12">
        {CAREER_HISTORY.map((item, index) => (
          <div key={item.id} className="relative pl-8 md:pl-0">
            
            {/* Timeline Line (Desktop only) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200 -ml-6 md:ml-[140px]"></div>

            <div className="md:flex gap-8">
              {/* Left Column: Period & Company */}
              <div className="md:w-36 flex-shrink-0 md:text-right relative">
                <div className="md:sticky md:top-24">
                    <span className="block font-sans text-sm font-bold text-secondary mb-1">
                    {item.period}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                    {item.company}
                    </h3>
                     {/* Dot */}
                    <div className="hidden md:block absolute top-1.5 right-[-38px] w-3 h-3 rounded-full bg-primary border-4 border-white shadow-sm z-10"></div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="flex-grow mt-4 md:mt-0 bg-white md:bg-transparent p-6 md:p-0 rounded border md:border-0 border-gray-100 shadow-sm md:shadow-none">
                <h4 className="font-serif text-xl font-bold text-primary mb-2 flex items-center">
                   {item.role}
                </h4>
                <p className="font-sans text-gray-600 italic mb-4">
                  {item.description}
                </p>

                <div className="mb-4">
                  <Label className="text-xs text-gray-400 mb-2 block">Key Achievements</Label>
                  <ul className="space-y-2">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="font-sans text-gray-700 text-sm md:text-base flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                   <Label className="text-xs text-gray-400 mb-2 block">Tech Stack</Label>
                   <div className="flex flex-wrap gap-2">
                     {item.techStack.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                         {tech}
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
  );
};

export default Experience;
