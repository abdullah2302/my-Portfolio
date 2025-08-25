import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/abdullah2302',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4 .1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.94.67 1.9v2.81c0 .27.16.58.67.49A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-900',
      hoverGradient: 'from-gray-600 to-gray-800'
    },
    {
      href: 'https://linkedin.com/in/abdullah-azhar23',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9.02h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.46a2.06 2.06 0 01-2.06-2.06c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zm1.78 13h-3.56V9.02h3.56v11.43zM22 2H2v20h20V2z" />
        </svg>
      ),
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'from-blue-500 to-blue-600'
    },
    {
      href: 'mailto:abdullahrajpoot8776@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      gradient: 'from-red-500 to-red-600',
      hoverGradient: 'from-red-400 to-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Abdullah.
                </span>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
                A passionate full-stack developer creating modern web experiences with cutting-edge technologies and innovative design patterns.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-gradient-to-r ${social.gradient} text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 hover:bg-gradient-to-r ${social.hoverGradient}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform transition-transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white/70">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:abdullahrajpoot8776@gmail.com" className="hover:text-white transition-colors duration-300">
                    abdullahrajpoot8776@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-white/70">
                  <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Available for remote work</span>
                </div>
                <div className="flex items-center text-white/70">
                  <svg className="w-5 h-5 mr-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 sm:mb-0">
                © 2025 Abdullah Azhar. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for opportunities
                </span>
                <span>•</span>
                <span>Made with ❤️ & React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
