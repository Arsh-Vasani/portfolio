"use client"

import { Project } from '@/data/resumeData';
import { useState } from 'react';

interface ProjectsShowcaseProps {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const featuredProjects = projects.filter(p => p.featured);
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getProjectGradient = (index: number) => {
    const gradients = [
      'from-purple-500 via-pink-500 to-red-500',
      'from-cyan-500 via-blue-500 to-indigo-500',
      'from-green-500 via-emerald-500 to-teal-500',
      'from-orange-500 via-yellow-500 to-amber-500',
      'from-violet-500 via-purple-500 to-fuchsia-500',
      'from-rose-500 via-pink-500 to-purple-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full  to-cyan-900/20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
              My Projects
            </h2>
            <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mt-4 rounded-full animate-pulse-glow"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Explore my creative journey through innovative projects that push the boundaries of technology and design.
          </p>
        </div>
        <div className='flex gap-20 justify-center mb-25'>
         
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-y-8 items-center gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass rounded-xl overflow-hidden border border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 items-end h-full">
                  {/* Project Header with Gradient */}
                  <div className={`h-36 bg-gradient-to-br ${getProjectGradient(index)} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>

                    {/* Floating Elements */}
                    {/* <div className="absolute top-3 right-3 flex space-x-2">
                      <span className="px-2 py-1 glass text-white text-xs font-semibold rounded-full border border-white/20 backdrop-blur-sm">
                        {project.category}
                      </span>
                      
                    </div> */}

                    {/* Project Icon/Letter */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                        {project.name.charAt(0)}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    {/* {hoveredProject === project.id && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                        <div className="text-white">
                          <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                          <p className="text-xs opacity-90 line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* Project Content */}
                  <div className="p-4 flex flex-col h-full">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-3 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300 text-xs flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies - Compact */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30 hover:from-purple-500/40 hover:to-cyan-500/40 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-400 text-xs font-medium rounded-full border border-gray-500/30">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons - Compact */}
                    <div className="flex space-x-2 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center py-2 px-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs"
                        >
                          <span className="flex items-center justify-center space-x-1">
                            <span>Demo</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border border-purple-400/50 text-purple-300 text-center py-2 px-2 rounded-lg font-semibold hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all duration-300 glass text-xs"
                        >
                          <span className="flex items-center justify-center space-x-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                            <span>Code</span>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Redesigned */}
        <div className="text-center">
          <div className="relative">
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-purple-400/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate and turn your ideas into extraordinary digital experiences that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start a Project</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#about"
                    className="group glass text-purple-300 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/20 hover:text-white transition-all duration-300 transform hover:scale-105 border border-purple-400/30"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
