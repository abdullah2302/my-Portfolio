import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks';

// Counter Animation Component
const CounterAnimation = ({ end, duration, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;
    
    const timer = setTimeout(() => {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return count;
};

const AboutSection = ({ aboutRef, skills }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section 
      id="about" 
      ref={(el) => {
        aboutRef.current = el;
        ref.current = el;
      }} 
      className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            About Me
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Get to know me better - my journey, skills, and what drives me in web development
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* About Card */}
          <div className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">About</h3>
              <p className="text-white/70 leading-relaxed">
                I'm Abdullah, a creative developer passionate about building sleek, user-centric web applications with modern tech stacks. I believe in creating experiences that not only look great but also solve real problems.
              </p>
            </div>
          </div>

          {/* Skills Card */}
                     <div className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-2000 transform hover:scale-105 hover:-translate-y-2 ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`} style={{ transitionDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-6 text-white text-center">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                      <span className="text-white/60 text-xs">{skill.level}</span>
                    </div>
                                         <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                               <div
                          className={`bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-5000 ease-out ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            width: isVisible ? skill.level : '0%',
                            transitionDelay: `${800 + (index * 300)}ms`
                          }}
                        />
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Achievements</h3>
              <ul className="space-y-3 text-left">
                {[
                  'Built impactful personal projects',
                  'Contributed to open-source',
                  'Mastered modern frameworks',
                  'Continuous learning mindset',
                  'Problem-solving approach'
                ].map((achievement, index) => (
                  <li key={index} className="flex items-center text-white/70 text-sm">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
                 <div className={`mt-16 text-center transition-all duration-1000 transform ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
         }`} style={{ transitionDelay: '8000ms' }}>
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 max-w-2xl">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4 animate-pulse"></span>
            <p className="text-lg">
              "I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web. Every project is an opportunity to learn and grow."
            </p>
          </div>
        </div>

        {/* Skills Progress Visualization */}
                 <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-1000 transform ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
         }`} style={{ transitionDelay: '1000ms' }}>
          {skills.map((skill, index) => (
            <div key={skill.name} className="text-center group">
                             <div className="relative w-20 h-20 mx-auto mb-4">
                 <svg className={`w-20 h-20 transform -rotate-90 transition-all duration-2000 ease-out ${
                   isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                 }`} viewBox="0 0 36 36" style={{ transitionDelay: `${1200 + (index * 200)}ms` }}>
                  <path
                    className="text-white/10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                                     <path
                     className={`text-transparent transition-all duration-3000 ease-out ${
                       isVisible ? 'opacity-100' : 'opacity-0'
                     }`}
                     stroke="url(#gradient)"
                     strokeWidth="2"
                     strokeDasharray={isVisible ? `${parseInt(skill.level)} 100` : '0 100'}
                     strokeLinecap="round"
                     fill="none"
                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                     style={{ 
                       transitionDelay: `${1200 + (index * 200)}ms`,
                       transition: 'stroke-dasharray 3s ease-out'
                     }}
                   />
                </svg>
                                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className={`text-sm font-bold text-white transition-all duration-1000 ${
                     isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                   }`} style={{ transitionDelay: `${1400 + (index * 200)}ms` }}>
                     {isVisible ? (
                       <CounterAnimation 
                         end={parseInt(skill.level)} 
                         duration={2000} 
                         delay={1400 + (index * 200)}
                       />
                     ) : (
                       '0'
                     )}%
                   </span>
                 </div>
              </div>
              <p className={`text-white/80 text-sm font-medium transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`} style={{ transitionDelay: `${1600 + (index * 200)}ms` }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default AboutSection;
