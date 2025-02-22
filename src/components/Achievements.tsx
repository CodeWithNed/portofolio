import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
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

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Achievements</h2>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex space-x-6 px-4 min-w-full">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-none w-80 snap-center p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform
                ${index % 2 === 0 ? 'bg-[#e0f906]' : 'bg-[#a6a3b4]'}`}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{achievement.metric}</h3>
              <p className="text-gray-700">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;