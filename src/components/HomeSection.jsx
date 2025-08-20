import React from 'react';
import { useParticles } from '../hooks';

const HomeSection = ({ homeRef, scrollToSection }) => {
  const particles = useParticles(50);
  return (
    <section
      id="home"
      ref={homeRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-primary)' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle absolute rounded-full backdrop-blur-sm"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              background: 'var(--gradient-primary)',
              opacity: 0.4,
              '--duration': particle.duration,
              '--move-x': particle.moveX,
              '--move-y': particle.moveY,
              '--end-x': particle.endX,
              '--end-y': particle.endY,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse opacity-20" style={{ background: 'var(--gradient-primary)' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000 opacity-20" style={{ background: 'var(--gradient-secondary)' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-lg animate-bounce opacity-20" style={{ background: 'var(--gradient-accent)' }}></div>

      {/* Main Content */}
      <div className="text-center max-w-4xl sm:max-w-5xl lg:max-w-6xl p-6 sm:p-8 lg:p-12 relative z-10">
        {/* Greeting Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up glass border" style={{ borderColor: 'var(--color-border-primary)', color: 'var(--color-text-secondary)' }}>
          <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: 'var(--color-success)' }}></span>
          Available for opportunities
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight animate-fade-in-up animation-delay-200" style={{ color: 'var(--color-text-primary)' }}>
          Hi, I'm{' '}
          <span 
            className="bg-clip-text text-transparent font-black"
            style={{ 
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Abdullah
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400" style={{ color: 'var(--color-text-secondary)' }}>
          Crafting{' '}
          <span className="font-semibold" style={{ color: 'var(--color-text-accent)' }}>
            modern
          </span>{' '}
          and{' '}
          <span className="font-semibold" style={{ color: 'var(--color-text-accent)' }}>
            intuitive
          </span>{' '}
          web solutions that inspire.
        </p>

        {/* Description */}
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600" style={{ color: 'var(--color-text-muted)' }}>
          Full-stack developer passionate about creating exceptional user experiences 
          with cutting-edge technologies and innovative design patterns.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
          <button
            onClick={() => scrollToSection && scrollToSection('projects')}
            className="group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
            style={{ 
              background: 'var(--gradient-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-secondary)' }}></div>
          </button>
          
          <button
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="group px-8 py-4 rounded-2xl border-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            style={{ 
              borderColor: 'var(--color-border-primary)',
              color: 'var(--color-text-primary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--color-glass-secondary)';
              e.target.style.borderColor = 'var(--color-border-secondary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'var(--color-border-primary)';
            }}
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator moved outside of content for better responsiveness */}
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to dashboard"
        onClick={() => scrollToSection && scrollToSection('dashboard')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToSection && scrollToSection('dashboard');
          }
        }}
        className="scroll-indicator animate-bounce cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110"
      >
        <div className="scroll-indicator__shell">
          <div className="scroll-indicator__dot" />
        </div>
        <div className="scroll-indicator__label">Scroll</div>
      </button>
    </section>
  );
};

export default HomeSection;
