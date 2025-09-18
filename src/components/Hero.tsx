import { PersonalInfo } from '@/data/resumeData';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Glow Effect */}
          <div className="relative mb-8 z-1">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl font-bold text-white">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            {/* <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-xl animate-pulse-glow"></div> */}
          </div>
          
          {/* Main Content */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
            {personalInfo.title}
          </h2>
          
          <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            {personalInfo.tagline}
          </p>
          
          <p className="text-lg mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm glass"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {personalInfo.github && (
              <a
                href={'/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-purple-400/30"
              >
                <svg className="w-7 h-7 text-purple-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={'/'}
                target="blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-blue-400/30"
              >
                <svg className="w-7 h-7 text-blue-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {personalInfo.website && (
              <a
                href={'/'}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center hover:from-cyan-500/40 hover:to-pink-500/40 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-cyan-400/30"
              >
                <svg className="w-7 h-7 text-cyan-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
