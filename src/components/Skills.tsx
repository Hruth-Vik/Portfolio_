import React from 'react';
import { Code, Database, Server, Layout, GitBranch, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
      skills: ['ReactJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'TailwindCSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-6 w-6" />,
      skills: ['NodeJS', 'C#', '.NET', 'RestAPI', 'Java']
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'DevOps & Tools',
      icon: <Code className="h-6 w-6" />,
      skills: ['Docker', 'Git', 'GitHub', 'Chrome Extension']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['JavaScript', 'TypeScript', 'C#', 'Java', 'C++']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6" />,
      skills: ['Project Management', 'Communication', 'Leadership', 'Time Management', 'Adaptability', 'Problem Solving', 'Teamwork', 'Creativity']
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;