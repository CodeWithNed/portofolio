import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import SyscoLogo from '../assets/sysco.svg';
import UOMLogo from '../assets/uom.svg';
import CSELogo from '../assets/cse.svg';
import photo from '../assets/photo.png';
import { IoSchool } from 'react-icons/io5';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com' },
  { icon: FaLinkedin, url: 'https://linkedin.com' },
  { icon: FaTwitter, url: 'https://twitter.com' },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
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
            Specializing in Data Science
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-8 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-gray-700 dark:text-gray-300 space-x-1"
          >
            <IoSchool className="text-2xl mr-2 space-y-4" />
            <h3 className='font-bold'>Undergraduate at University of Moratuwa</h3>
            <img src={UOMLogo} alt="WSO2 Logo" width={40} height={40} />
            <img src={CSELogo} alt="WSO2 Logo" width={60} height={40} />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-gray-700 dark:text-gray-300 space-x-1"
          >
            <FaBriefcase className="text-2xl mr-2 space-y-4" />
            <h3 className='font-bold'>Former Intern at</h3>
            <img src={SyscoLogo} alt="WSO2 Logo" width={100} height={40} />
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
            href="/cv.pdf"
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