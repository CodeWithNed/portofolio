import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  icon: string;
  metric: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: '🚀',
    metric: '10+ Projects',
    description: 'Completed successfully',
  },
  {
    icon: '👥',
    metric: '50+ Clients',
    description: 'Worldwide satisfaction',
  },
  {
    icon: '⭐',
    metric: '5+ Years',
    description: 'Professional experience',
  },
  {
    icon: '🏆',
    metric: '15+ Awards',
    description: 'Industry recognition',
  },
];

interface PatternSquareProps {
  x: number;
  y: number;
  mouseX: number;
  mouseY: number;
}

const PatternSquare: React.FC<PatternSquareProps> = ({ x, y, mouseX, mouseY }) => {
  const maxDistance = 100;
  
  const distance = Math.sqrt(
    Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
  );
  
  const opacity = Math.max(0, 1 - distance / maxDistance);

  return (
    <motion.div
      className="absolute w-5 h-5 border border-gray-600"
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
      const spacing = 40;
      const width = window.innerWidth;
      const height = 600;

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

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-20 relative"
      onMouseMove={handleMouseMove}
    >
      <BackgroundPattern mouseX={mousePos.x} mouseY={mousePos.y} />
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-white relative z-10"
      >
        Achievements
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide relative z-10"
      >
        <div className="flex space-x-6 px-4 min-w-full">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex-none w-80 snap-center p-6 rounded-lg shadow-xl
                ${index % 2 === 0 ? 'bg-[#e0f906]' : 'bg-[#a6a3b4]'}
                cursor-pointer`}
            >
              <motion.div 
                variants={iconVariants}
                className="text-4xl mb-4"
              >
                {achievement.icon}
              </motion.div>
              <motion.div variants={textVariants}>
                <h3 className="text-2xl font-bold mb-2">{achievement.metric}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;