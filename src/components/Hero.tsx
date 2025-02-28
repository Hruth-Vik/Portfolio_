import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-600">Hruthvik Naik</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Information Technology Professional
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              A passionate developer with expertise in web development, cloud technologies, and data management.
              Currently pursuing B.Tech in Information Technology at Alliance School of Engineering, Bangalore.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Contact Me
              </a>
              <a 
                href="/Hruthvik.pdf"
                download="Hruthvik_Naik_Resume.pdf"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-white shadow-xl bg-gradient-to-br from-indigo-200 via-purple-100 to-blue-200 p-1">
                <img 
                  src="https://github.com/Hruth-Vik.png" 
                  alt="Hruthvik Naik" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-full">
                  <code className="text-xs">{'<coder/>'}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;