import React from 'react';
import { Calendar, GraduationCap, Percent } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B. Tech.) - Information Technology',
      institution: 'Alliance School of Engineering, Bangalore (India)',
      period: 'Dec 2021 - Present',
      score: '81.5%',
      icon: <GraduationCap className="h-10 w-10" />
    },
    {
      degree: '12th in CSE - Computer Science, Maths',
      institution: 'Siddhartha Pre University (Bhatkal, UK)',
      period: 'Jun 2019 - April 2021',
      score: '94%',
      icon: <GraduationCap className="h-10 w-10" />
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 z-10"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-gray-50 rounded-lg shadow-md p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        <h4 className="text-lg text-indigo-600">{edu.institution}</h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Percent className="h-4 w-4 mr-2" />
                        <span>Score: {edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;