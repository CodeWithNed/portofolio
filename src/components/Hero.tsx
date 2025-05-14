import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import SyscoLogo from '../assets/sysco.svg';
import UOMLogo from '../assets/uom.svg';
import CSELogo from '../assets/cse.svg';
import photo from '../assets/photo.png';

interface SocialLink {
  icon: React.ElementType;
  url: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaGithub, url: 'https://github.com' },
  { icon: FaLinkedin, url: 'https://linkedin.com' },
  { icon: FaTwitter, url: 'https://twitter.com' },
];

interface PatternSquareProps {
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
}

const PatternSquare: React.FC<PatternSquareProps> = ({ x, y, mouseX, mouseY }) => {
  const maxDistance = 150; // Increased range for hero section
  
  const distance = Math.sqrt(
    Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
  );
  
  const opacity = Math.max(0, 1 - distance / maxDistance);

  return (
    <motion.div
      className="absolute w-4 h-4 border border-gray-600 dark:border-gray-400"
      style={{
        left: x,
        top: y,
        opacity,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: opacity }}
      transition={{ duration: 0.2 }}
    />
  );
};

interface BackgroundPatternProps {
  mouseX: number;
  mouseY: number;
}

interface Square {
  x: number;
  y: number;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ mouseX, mouseY }) => {
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const generateSquares = () => {
      const newSquares: Square[] = [];
      const spacing = 35; // Slightly tighter grid
      const width = window.innerWidth;
      const height = window.innerHeight; // Full viewport height for hero

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          newSquares.push({ x, y });
        }
      }
      setSquares(newSquares);
    };

    generateSquares();
    window.addEventListener('resize', generateSquares);
    return () => window.removeEventListener('resize', generateSquares);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {squares.map((square, i) => (
        <PatternSquare
          key={i}
          x={square.x}
          y={square.y}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20 relative"
      onMouseMove={handleMouseMove}
    >
      <BackgroundPattern mouseX={mousePos.x} mouseY={mousePos.y} />
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <h2 className="text-xl text-gray-600 dark:text-gray-400">Hello I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white">
            Nadun Kumarasinghe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-2">
            Computer Science & Engineering Student
          </h2>
          <h3 className="text-xl text-primary font-semibold">
            Specializing in Data Science and Engineering
          </h3>
          <h3 className="text-xl text-gray-500 font-semibold">
            Minor in Mathematics
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-gray-700 dark:text-gray-300 space-x-1"
          >
            <IoSchool className="text-2xl mr-2 space-y-4" />
            <h3 className='font-bold'>Undergraduate at University of Moratuwa</h3>
            <img src={UOMLogo} alt="UOM Logo" width={40} height={40} />
            <img src={CSELogo} alt="CSE Logo" width={60} height={40} />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-gray-700 dark:text-gray-300 space-x-1"
          >
            <FaBriefcase className="text-2xl mr-2 space-y-4" />
            <h3 className='font-bold'>Former Intern at Sysco LABS</h3>
            <img src={SyscoLogo} alt="Sysco Logo" width={100} height={40} />
          </motion.div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/uc?export=download&id=1ItFgQ8zh9O8whetVQx2QzqXf5mC-BJQZ"
            download
            className="flex items-center gap-2 px-6 py-3 bg-primary text-gray-900 rounded-full hover:bg-opacity-90 transition-colors"
          >
            <FaDownload />
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            <FaEnvelope />
            Contact Info
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white text-3xl hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;