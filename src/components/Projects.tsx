import React from 'react';
import { Github, ExternalLink, Database, Code, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FinTrack',
      description: 'An expense manager that helps track, edit, and add extra expenses efficiently.',
      technologies: ['C#.NET', 'MySQL', 'User Authentication'],
      points: [
        'Developed using C#.NET for the backend.',
        'Utilized MySQL as the database for handling financial records.',
        'Implemented user authentication for secure access and data privacy.'
      ],
      github: null,
      demo: null,
      icon: <Database className="h-10 w-10" />
    },
    {
      title: 'Enterprise Data Management with SQL',
      description: 'Comprehensive SQL project for analyzing various business datasets.',
      technologies: ['SQL', 'Data Analysis', 'CTEs', 'WINDOW Functions'],
      points: [
        'Analyzed employee trends by evaluating attrition, satisfaction, and demographics using SQL.',
        'Extracted automotive insights by identifying pricing patterns, mileage impact, and forecasting trends.',
        'Optimized call center data through validation, sentiment analysis, and performance evaluation.',
        'Implemented advanced SQL techniques like CTEs, WINDOW functions.'
      ],
      github: 'https://github.com/Hruth-Vik',
      demo: null,
      icon: <Database className="h-10 w-10" />
    },
    {
      title: 'ReciTrack',
      description: 'Dynamic receipting system that enables users to add custom titles and store receipts seamlessly.',
      technologies: ['React.js', 'Firebase', 'Firestore'],
      points: [
        'Dynamic Receipting System: Enables users to add custom titles and store receipts seamlessly.',
        'Real-Time Data Management: Built with React.js, Firebase, and Firestore for instant updates.',
        'Secure & Scalable Storage: Utilizes cloud-based Firestore for efficient and reliable data handling.'
      ],
      github: 'https://github.com/Hruth-Vik',
      demo: null,
      icon: <Code className="h-10 w-10" />
    },
    {
      title: 'Scalable Deployment with AWS ECS',
      description: 'Containerized portfolio application deployed on AWS infrastructure.',
      technologies: ['Docker', 'AWS ECR', 'AWS ECS', 'Node.js'],
      points: [
        'Dockerized my Node.js portfolio to create a deployable image.',
        'Stored the Docker image in AWS Elastic Container Registry (ECR).',
        'Deployed the container using AWS Elastic Container Service (ECS).',
        'Enabled remote access and automatic scaling based on traffic.'
      ],
      github: null,
      demo: null,
      icon: <Server className="h-10 w-10" />
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1 text-sm">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="pl-1">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;