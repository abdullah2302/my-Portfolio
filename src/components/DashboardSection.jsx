import React from 'react';
import { useIntersectionObserver } from '../hooks';

const DashboardSection = ({ dashboardRef, projectsCount, skillsCount }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const stats = [
    { 
      title: 'Projects', 
      value: `${projectsCount}+`, 
      desc: 'Completed Works',
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    { 
      title: 'Experience', 
      value: 'Fresher', 
      desc: 'In Web Dev',
      icon: '💼',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      title: 'Skills', 
      value: `${skillsCount}+`, 
      desc: 'Tech Mastered',
      icon: '⚡',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/20 to-teal-500/20'
    },
  ];

  return (
    <section 
      id="dashboard" 
      ref={(el) => {
        dashboardRef.current = el;
        ref.current = el;
      }} 
      className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            Dashboard
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A quick overview of my journey, experience, and expertise in web development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{stat.icon}</div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-white/80">{stat.title}</h3>
                
                {/* Value */}
                <p className={`text-3xl sm:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                  {stat.value}
                </p>
                
                {/* Description */}
                <p className="text-white/60 text-sm">{stat.desc}</p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Always learning and improving my skills
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
