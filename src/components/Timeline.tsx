import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const milestones = [
  {
    date: '2024 Nov',
    title: 'Teaching Assistant',
    description: 'Data Science and Engineering Project at University of Moratuwa',
    icon: '👨‍🏫',
  },
  {
    date: '2023 Nov',
    title: 'Software Engineer Intern',
    description: 'Sysco LABS Technologies - Built event-driven microservices',
    icon: '👨‍💻',
  },
  {
    date: '2021',
    title: 'University Entrance',
    description: 'Started BSc Engineering at University of Moratuwa',
    icon: '🎓',
  },
  {
    date: '2019',
    title: 'Advanced Level',
    description: 'Achieved Island Rank 19 with 3A passes',
    icon: '📚',
  },
  {
    date: '2017',
    title: 'UN Recognition',
    description: 'Named Best School Quizzer in Sri Lanka by United Nations',
    icon: '🏆',
  },
  {
    date: '2005',
    title: 'School Enrollment',
    description: 'Started education at Richmond College',
    icon: '🏫',
  }
];


const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Career Timeline</h2>

      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary" />

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
                <div 
                  className={`bg-gray-700 dark:bg-secondary p-6 rounded-lg shadow-lg
                    hover:bg-opacity-90 border border-primary/20 relative ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  {/* Year badge */}
                  <div className={`absolute ${
                    index % 2 === 0 ? '-left-3' : '-right-3'
                  } top-6 bg-primary text-gray-900 px-2 py-1 rounded text-sm font-bold`}>
                    {milestone.date}
                  </div>

                  <div className="text-3xl mb-2">{milestone.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{milestone.title}</h3>
                  <p className="text-gray-200 dark:text-black">{milestone.description}</p>
                </div>
              </div>

              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full" />
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