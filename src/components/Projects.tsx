import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Web', 'Mobile', 'Data Science', 'Machine Learning'];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management',
    image: 'https://picsum.photos/400/300?random=1',
    category: 'Web',
    tech: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'ML-Powered Image Recognition',
    description: 'Deep learning model for real-time object detection and classification',
    image: 'https://picsum.photos/400/300?random=2',
    category: 'Machine Learning',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive visualization platform for big data analysis',
    image: 'https://picsum.photos/400/300?random=3',
    category: 'Data Science',
    tech: ['Python', 'Pandas', 'D3.js'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with social features',
    image: 'https://picsum.photos/400/300?random=4',
    category: 'Mobile',
    tech: ['React Native', 'Firebase', 'Redux'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Smart Home IoT Platform',
    description: 'IoT platform for managing and monitoring smart home devices',
    image: 'https://picsum.photos/400/300?random=5',
    category: 'Web',
    tech: ['React', 'Node.js', 'MQTT'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis for social media monitoring',
    image: 'https://picsum.photos/400/300?random=6',
    category: 'Machine Learning',
    tech: ['Python', 'NLTK', 'scikit-learn'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors
              ${activeCategory === category
                ? 'bg-primary text-gray-900'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-gray-900 rounded hover:bg-opacity-90 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;