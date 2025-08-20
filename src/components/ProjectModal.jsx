import React from 'react';

const ProjectModal = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="backdrop-blur-md bg-gray-900/70 p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md mx-4 my-6 transform transition-all duration-300 hover:scale-105"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          {selectedProject.title}
        </h2>
        <div className="mb-3">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full max-h-48 object-contain rounded-md bg-gray-800/50"
          />
        </div>
        <p className="text-xs sm:text-sm text-gray-300 mb-3">{selectedProject.desc}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
          {selectedProject.tech.map((tech) => (
            <span
              key={tech}
              className="px-1 sm:px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={selectedProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-purple-400 transition text-xs sm:text-sm"
          >
            Live Demo
          </a>
          <a
            href={selectedProject.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-purple-400 transition text-xs sm:text-sm"
          >
            GitHub
          </a>
        </div>
        <button
          onClick={() => setSelectedProject(null)}
          aria-label="Close modal"
          className="mt-4 w-full py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 text-xs sm:text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
