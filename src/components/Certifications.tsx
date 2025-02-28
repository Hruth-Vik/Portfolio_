import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'IBM- Developing Front-End Apps with React',
      issuer: 'IBM',
      link: '#',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'AMAZON-AWS Cloud Technical Essentials',
      issuer: 'Amazon Web Services',
      link: '#',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'META- Capstone (React App)',
      issuer: 'Meta',
      link: '#',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'FREECODECAMP- Responsive Web design',
      issuer: 'freeCodeCamp',
      link: '#',
      icon: <Award className="h-5 w-5" />
    },
    {
      title: 'University of California- Data Warehousing and Business Intelligence',
      issuer: 'University of California',
      link: '#',
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-gray-600 mb-2">Issued by {cert.issuer}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors inline-flex items-center text-sm"
                >
                  View credentials
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;