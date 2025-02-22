import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const milestones = [
  {
    date: '2069',
    title: 'Dead',
    description: 'Rest in peace',
    icon: '🪦',
  },
  {
    date: '2023',
    title: 'Senior Developer',
    description: 'Led development of major enterprise applications',
    icon: '👨‍💻',
  },
  {
    date: '2021',
    title: 'Tech Lead',
    description: 'Managed team of 5 developers',
    icon: '👥',
  },
  // Add more milestones
];

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Career Timeline</h2>

      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#e0f906] to-[#a6a3b4]" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-6">
                <div className={`bg-white p-6 rounded-lg shadow-lg
                  ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-3xl mb-2">{milestone.icon}</div>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>

              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute w-4 h-4 bg-[#e0f906] rounded-full" />
                <div className="absolute text-sm font-bold -top-8">{milestone.date}</div>
              </div>

              <div className="w-1/2" />
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;