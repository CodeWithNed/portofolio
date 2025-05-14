import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Top Wave SVG */}
      <div className="w-full">
        <svg className="w-full h-24 transform rotate-180" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 40L48 35C96 30 192 20 288 25C384 30 480 50 576 65C672 80 768 90 864 85C960 80 1056 60 1152 45C1248 30 1344 20 1392 15L1440 10V140H1392C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0V40Z"
            className="fill-gray-50 dark:fill-gray-800"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nadun Kumarasinghe
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer Science & Engineering Student specializing in Data Science and Engineering with a Minor in Mathematics.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Contact Details
            </h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:contact@example.com"
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-primary mr-3" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors duration-200">
                  contact@example.com
                </span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-primary mr-3" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors duration-200">
                  +1 (234) 567-890
                </span>
              </motion.a>
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="text-primary mr-3 flex-shrink-0" />
                <address className="not-italic text-gray-600 dark:text-gray-300">
                  123 Main Street,<br />
                  City, State 12345,<br />
                  Country
                </address>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Nadun Kumarasinghe. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <a href="#privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-16 right-12 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;