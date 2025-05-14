import { useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';

const categories = ['All', 'Web', 'Data Science', 'Machine Learning', 'System Design'];

const projects = [
  {
    title: 'LLM Based Calendar Task Extractor',
    description: 'Privacy-focused task management system using LLMs for automated task extraction from documents and emails with edge processing capabilities',
    image: 'https://picsum.photos/400/300?random=1',
    category: 'Machine Learning',
    tech: ['FastAPI', 'Python', 'HuggingFace', 'Tesseract', 'Ollama'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Smart Bill Analyzer',
    description: 'Intelligent system for classifying and extracting data from various types of bills and receipts using multiple OCR services',
    image: 'https://picsum.photos/400/300?random=2',
    category: 'Machine Learning',
    tech: ['PaddleOCR', 'AWS Textract', 'Azure Form Recognizer'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Cultivate.AI',
    description: 'Agricultural recommendation system using ML to suggest optimal crops based on soil parameters with interactive map interface',
    image: 'https://picsum.photos/400/300?random=3',
    category: 'Data Science',
    tech: ['Python', 'React', 'Flask', 'Jupyter Notebook', 'Ollama'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Time Series Book Sales Forecaster',
    description: 'Advanced forecasting system for predicting book publication sales using historical data from 1800s',
    image: 'https://picsum.photos/400/300?random=4',
    category: 'Data Science',
    tech: ['Python', 'Prophet', 'Scikit-learn', 'NumPy'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Event-Driven Inventory Management',
    description: 'Microservice-based system for automated order processing and inventory updates with monitoring capabilities',
    image: 'https://picsum.photos/400/300?random=5',
    category: 'System Design',
    tech: ['Spring Boot', 'Apache Kafka', 'Spring Security', 'Netflix Eureka', 'Keycloak'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Renewable Energy Site Selector',
    description: 'ML model for identifying optimal locations for renewable energy projects using geospatial analysis',
    image: 'https://picsum.photos/400/300?random=6',
    category: 'Data Science',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Geospatial Analysis'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  },
  {
    title: 'Audio Transcription Service',
    description: 'Advanced audio transcription tool leveraging AI technologies for speech-to-text conversion',
    image: 'https://picsum.photos/400/300?random=7',
    category: 'Machine Learning',
    tech: ['Spring Boot', 'Spring AI', 'OpenAI'],
    demo: 'https://demo.com',
    github: 'https://github.com',
  }
];


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-20">
      
      <h3 className="text-xl text-center text-gray-500 font-semibold">
            Explore my recent
        </h3>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`px-4 py-2 rounded-full transition-colors
              ${activeCategory === category
                ? 'bg-primary text-gray-900'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              onHoverStart={() => setHoveredIndex(null)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary text-gray-900 rounded hover:bg-opacity-90 transition-colors"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;