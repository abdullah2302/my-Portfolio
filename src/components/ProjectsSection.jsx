import React, { useEffect } from 'react';
import { resolveAssetPath } from '../utils/assets';
import { useIntersectionObserver } from '../hooks';

const ProjectsSection = ({ projectsRef, projects, setSelectedProject, onProjectsVisibleChange }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Notify parent when this section becomes visible to activate the nav link
  useEffect(() => {
    if (isVisible && typeof onProjectsVisibleChange === 'function') {
      onProjectsVisibleChange(true);
    }
    // We intentionally do not send false; multi-section observer manages deactivation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <section
      id="projects"
      ref={(el) => {
        projectsRef.current = el;
        ref.current = el;
      }}
      className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            My Projects
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A collection of my latest work, showcasing my skills in modern web development and design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="project-card__image-wrapper">
                <img
                  src={resolveAssetPath(project.image)}
                  alt={project.title}
                  className="project-card__image transition-transform duration-300 group-hover:scale-105 will-change-transform"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    // prevent infinite loop
                    target.onerror = null;
                    try { console.warn('Project image failed to load:', target.src); } catch (_) {}
                    const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'>\n` +
                      `  <defs>\n` +
                      `    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\n` +
                      `      <stop offset='0%' stop-color='#334155'/>\n` +
                      `      <stop offset='100%' stop-color='#1f2937'/>\n` +
                      `    </linearGradient>\n` +
                      `  </defs>\n` +
                      `  <rect width='800' height='450' fill='url(#g)'/>\n` +
                      `  <g fill='none' stroke='#94a3b8' stroke-width='2' opacity='0.4'>\n` +
                      `    <rect x='40' y='40' width='720' height='370' rx='24'/>\n` +
                      `  </g>\n` +
                      `  <g fill='#e2e8f0' opacity='0.85' font-family='Inter, Arial, sans-serif' text-anchor='middle'>\n` +
                      `    <text x='400' y='230' font-size='28'>${project.title.replace(/&/g, '&amp;')}</text>\n` +
                      `    <text x='400' y='270' font-size='16' fill='#cbd5e1'>Image not available</text>\n` +
                      `  </g>\n` +
                      `</svg>`
                    )}`;
                    target.src = placeholder;
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tech Stack Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded-full border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-white/20 text-white/80 text-sm font-medium rounded-xl text-center transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
            More projects coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
