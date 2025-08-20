import React from 'react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="backdrop-blur-xl border-b shadow-2xl glass" style={{ borderColor: 'var(--color-border-primary)' }}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-full lg:max-w-7xl px-4 py-4">
          <div className="flex justify-between items-center w-full sm:w-auto">
            <span className="text-2xl sm:text-3xl font-black tracking-tight hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-500 cursor-pointer gradient-text">
              Abdullah.
            </span>
            <button
              className="sm:hidden focus:outline-none group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} style={{ backgroundColor: 'var(--color-text-primary)' }}></span>
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--color-text-primary)' }}></span>
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} style={{ backgroundColor: 'var(--color-text-primary)' }}></span>
              </div>
            </button>
          </div>
          <div
            className={`${isMenuOpen ? 'flex opacity-100 scale-100' : 'hidden opacity-0 scale-95'
              } sm:flex sm:opacity-100 sm:scale-100 flex-col sm:flex-row w-full sm:w-auto mt-4 sm:mt-0 space-y-3 sm:space-y-0 sm:space-x-1 md:space-x-2 lg:space-x-4 transition-all duration-500 ease-out`}
          >
            {['home', 'dashboard','projects', 'about','contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium group overflow-hidden ${
                  activeSection === section
                    ? 'shadow-lg'
                    : 'hover:glass-secondary'
                }`}
                style={{
                  background: activeSection === section ? 'var(--gradient-primary)' : 'transparent',
                  color: activeSection === section ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  boxShadow: activeSection === section ? '0 10px 15px -3px var(--color-shadow-primary)' : 'none'
                }}
              >
                <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                {activeSection === section && (
                  <div className="absolute inset-0 rounded-xl animate-pulse" style={{ background: 'var(--gradient-primary)' }}></div>
                )}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download="Abdullah_Resume.pdf"
              className="relative px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm group overflow-hidden"
              style={{ 
                background: 'var(--gradient-primary)',
                color: 'var(--color-text-primary)'
              }}
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var( --color-accent)' }}></div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
