import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';

const About = () => {
  const contactInfo = [
    { 
      icon: <MapPin className="h-5 w-5" />, 
      text: 'Chandapura, Bangalore', 
      href: null 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      text: 'hruthviknaik03@gmail.com', 
      href: 'mailto:hruthviknaik03@gmail.com' 
    },
    { 
      icon: <ExternalLink className="h-5 w-5" />, 
      text: 'linkedin.com/in/hruthviknaik', 
      href: 'https://linkedin.com/in/hruthviknaik' 
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            I am an Information Technology student with a passion for web development, cloud technologies, and data management. 
            Currently pursuing my Bachelor of Technology at Alliance School of Engineering in Bangalore, I have gained practical 
            experience through internships and personal projects that demonstrate my technical skills and problem-solving abilities.
          </p>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            My technical expertise includes ReactJS, Docker, C#, .NET, MySQL, and various other technologies. I am particularly 
            interested in developing scalable web applications and implementing efficient data management solutions. I am always 
            eager to learn new technologies and apply them to solve real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-2 rounded-full mr-3 text-indigo-600">
                  {item.icon}
                </div>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-gray-700">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;