import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Terminal from './components/Terminal';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <CustomCursor />
        <Navigation /> */}
        <Hero />
        
        <Achievements />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
        {showTerminal && (
          <div className="fixed bottom-0 left-0 w-full h-64 bg-black bg-opacity-90">
            <Terminal onClose={() => setShowTerminal(false)} />
          </div>
        )}
        <button
          onClick={() => setShowTerminal(!showTerminal)}
          className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <span className="sr-only">Toggle Terminal</span>
          {'>_'}
        </button>
      </div>
    </div>
  );
}

export default App;