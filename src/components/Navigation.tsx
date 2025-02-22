import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, User, Code2, Award, Briefcase, Heart, Mail, Settings } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const sections: Section[] = [
  { id: 'home', title: 'Home', icon: <Home size={20} />, description: 'Welcome to my portfolio' },
  { id: 'about', title: 'About', icon: <User size={20} />, description: 'Learn about my journey' },
  { id: 'skills', title: 'Skills', icon: <Code2 size={20} />, description: 'Technical expertise' },
  { id: 'achievements', title: 'Achievements', icon: <Award size={20} />, description: 'My accomplishments' },
  { id: 'experience', title: 'Experience', icon: <Briefcase size={20} />, description: 'Professional journey' },
  { id: 'interests', title: 'Interests', icon: <Heart size={20} />, description: 'Personal passions' },
  { id: 'contact', title: 'Contact', icon: <Mail size={20} />, description: 'Get in touch' },
  { id: 'settings', title: 'Settings', icon: <Settings size={20} />, description: 'Customize experience' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (docHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <nav ref={ref} className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/80 backdrop-blur-sm rounded-full p-4 shadow-xl"
      >
        <div className="relative">
          {/* Progress Indicator */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gray-700 rounded-full">
            <motion.div
              className="w-full bg-white rounded-full"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <ul className="space-y-6">
            {sections.map((section) => (
              <motion.li
                key={section.id}
                className="relative"
                onHoverStart={() => setHoveredSection(section.id)}
                onHoverEnd={() => setHoveredSection(null)}
                whileHover={{ scale: 1.2 }}
              >
                <a
                  href={`#${section.id}`}
                  className={`block p-2 rounded-full transition-colors ${
                    activeSection === section.id ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-cursor="pointer"
                >
                  {section.icon}
                </a>

                <AnimatePresence>
                  {hoveredSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: -20 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-white text-gray-900 rounded-lg px-4 py-2 whitespace-nowrap"
                    >
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm text-gray-600">{section.description}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;