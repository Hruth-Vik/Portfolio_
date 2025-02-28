import React from 'react';
import { Calendar, MapPin, Users, Award, Code } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: 'Ziroh Labs',
      role: 'EWL Program',
      location: 'Bengaluru, Karnataka',
      period: 'Feb 2024 - Feb 2024',
      description: [
        'Analyzed and benchmarked VGGNet model performance against existing models using publicly available datasets.',
        'Presented findings and insights in a comprehensive technical report and presentation to Ziroh Labs.',
        'Developing AI model VGGNet from scratch using Zunu, a distributed graph framework, focusing on Convolutional Neural Networks and Transformers and Implementing various mathematical functions, activation functions, and pooling strategies in Java for model construction.'
      ],
      icon: <Code className="h-10 w-10" />
    },
    {
      title: 'Google Developer Student Club',
      role: 'Member',
      location: 'Alliance University',
      period: 'July 2023 - Present',
      description: [
        'Actively involved in organizing and participating in hackathons and coding challenges hosted by GDSC.',
        'Leveraged GDSC resources and mentorship opportunities to expand knowledge and expertise in areas such as web development and machine learning, contributing to personal and professional growth.'
      ],
      icon: <Users className="h-10 w-10" />
    },
    {
      title: 'Flipkart Grid 6.0 Round 3 Qualifiers',
      role: 'Hackathon Participant',
      location: 'Flipkart',
      period: 'Aug 2024 - ongoing',
      description: [
        'Ranked among the top 327 teams out of 4.5 lakh entries with team name as "hruthviknaik03".',
        'Applied critical thinking and technical skills to advance through multiple competitive rounds.',
        'Applied analytical skills to interpret quiz questions accurately, contributing to the team\'s success in advancing through the competition.'
      ],
      icon: <Award className="h-10 w-10" />
    }
  ];

  return (
    <section id="extracurricular" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Extracurricular Activities</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4 mb-4 md:mb-0">
                  {activity.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                      <h4 className="text-lg text-indigo-600">{activity.role}</h4>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{activity.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    {activity.description.map((item, idx) => (
                      <li key={idx} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;