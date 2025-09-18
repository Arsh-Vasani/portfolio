import { PortfolioData } from '@/data/resumeData';

interface AboutProps {
  about: PortfolioData['about'];
  personalInfo: PortfolioData['personalInfo'];
}

export default function About({ about, personalInfo }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {about.story}
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="glass p-6 rounded-xl border border-purple-400/20">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values and Interests */}
          <div className="space-y-8">
            {/* Values */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">What I Value</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.values.map((value, index) => (
                  <div key={index} className="group flex items-center space-x-3 p-4 glass rounded-lg hover:bg-purple-500/10 transition-all duration-300 border border-purple-400/20">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:animate-pulse"></div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Beyond Code</h3>
              <div className="flex flex-wrap gap-3">
                {about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-sm font-medium hover:from-purple-500/40 hover:to-cyan-500/40 hover:text-white transition-all duration-300 border border-purple-400/30 backdrop-blur-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
