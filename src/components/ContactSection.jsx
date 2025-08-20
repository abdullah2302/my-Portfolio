import React from 'react';

const ContactSection = ({ contactRef, userInput, setUserInput, messages, handleChatSubmit }) => {
  return (
    <section id="contact" ref={contactRef} className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            Ask About Me
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Have questions about my skills, experience, or projects? Let's chat! I'm here to answer anything you'd like to know.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="relative">
          {/* Main Chat Container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">Abdullah's AI Assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-sm">Online</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'bg-white/10 border border-white/20 text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {msg.sender === 'bot' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          A
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        <span className="text-xs opacity-60 mt-2 block">
                          {msg.sender === 'user' ? 'You' : 'Abdullah'} • {new Date().toLocaleTimeString()}
                        </span>
                      </div>
                      {msg.sender === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          U
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {messages.length > 0 && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/20 text-white p-4 rounded-2xl backdrop-blur-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                        A
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="border-t border-white/10 p-6">
              <form onSubmit={handleChatSubmit} className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask me anything about Abdullah, his skills, projects, or experience..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-white/40 text-white backdrop-blur-md"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!userInput.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-sm animate-pulse delay-1000"></div>
        </div>

        {/* Quick Questions */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Questions</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'What are your skills?',
              'Tell me about your projects',
              'What is your experience?',
              'How can I contact you?',
              'What technologies do you use?'
            ].map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setUserInput(question);
                  // Auto-submit after a short delay
                  setTimeout(() => {
                    const form = document.querySelector('form');
                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
                  }, 100);
                }}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white/80 rounded-xl hover:bg-white/20 hover:border-white/40 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/80 max-w-2xl">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4 animate-pulse"></span>
            <p className="text-lg">
              Prefer direct contact? Feel free to reach out via email or social media for a more personal conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
