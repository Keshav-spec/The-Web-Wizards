import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useUserData } from '../UserDataContext';

const Projects1 = () => {
  const { userData } = useUserData();

  // Provide safe defaults for projects data
  const safeProjects = userData?.projects || [];

  return (
    <div className="pt-16 bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-12">
          My Projects
        </h1>

        {safeProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeProjects.map((project, index) => {
              // Safe defaults for each project
              const safeProject = {
                title: project?.title || "Untitled Project",
                description: project?.description || "No description available",
                image: project?.image || "https://source.unsplash.com/500x300/?coding,project",
                technologies: project?.technologies || [],
                githubUrl: project?.githubUrl || "#",
                liveUrl: project?.liveUrl || "#",
                ...project
              };

              return (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="relative">
                    <img
                      src={safeProject.image}
                      alt={safeProject.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-75"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{safeProject.title}</h3>
                    <p className="text-gray-400 mb-4">{safeProject.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {safeProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech || `Tech ${techIndex + 1}`}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={safeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} className="mr-1" />
                        Code
                      </a>
                      <a
                        href={safeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-80 transition duration-500"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No projects added yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects1;