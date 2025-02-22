import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, 
  SiNodedotjs, SiTensorflow, SiPandas, SiScikitlearn,
  SiDocker, SiKubernetes, SiAmazonaws, SiGit
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', icon: SiReact, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 80 },
    ]
  },
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 75 },
      { name: 'Pandas', icon: SiPandas, level: 85 },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 80 },
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 70 },
      { name: 'AWS', icon: SiAmazonaws, level: 75 },
      { name: 'Git', icon: SiGit, level: 85 },
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <skill.icon className="text-xl" />
                    <span>{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;