import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Cloud Counselage',
      location: 'Online',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Designed and implemented a comprehensive dashboard for monitoring key performance metrics using HTML, CSS, JavaScript, and relevant libraries to create an intuitive and user-friendly interface.',
        'Integrated various APIs to dynamically update data and provide real-time analytics, ensuring optimal performance and user experience.',
        'Developed a fully responsive clone website of Nike, enhancing user engagement and accessibility through advanced CSS techniques, including Flexbox and Grid, for a seamless and adaptive layout.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <h4 className="text-lg text-indigo-600">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;