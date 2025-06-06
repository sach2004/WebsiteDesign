// src/components/CSSHeroAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Export the colors so they can be used consistently across the site
export const themeColors = {
  darkBg: '#0e1421',
  lightBg: '#1a2535',
  primaryAccent: '#57e1ff',
  secondaryAccent1: '#3b82f6', // blue-500
  secondaryAccent2: '#4f46e5', // indigo-600
};

const CSSHeroAnimation = () => {
  // Function to handle smooth scroll to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden hero-section" 
      style={{ 
        backgroundColor: themeColors.darkBg,
        marginTop: '-16px', // Slight negative margin to eliminate any gap
      }}
    >
      {/* Particles Background - Pure CSS */}
      <div className="absolute inset-0">
        {/* Generate 120 particle elements with random positions */}
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.4)',
              animation: `floatParticle ${Math.random() * 20 + 10}s linear infinite`,
            }}
          />
        ))}
        
        {/* Gradients that move */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            backgroundColor: themeColors.secondaryAccent1,
            top: '30%',
            left: '20%',
            width: '40vw', 
            height: '40vw',
            filter: 'blur(80px)',
            animation: 'moveGradient 25s ease-in-out infinite alternate'
          }}
        />
        
        <div
          className="absolute rounded-full opacity-10"
          style={{
            backgroundColor: themeColors.secondaryAccent2,
            bottom: '10%',
            right: '15%',
            width: '35vw', 
            height: '35vw',
            filter: 'blur(100px)',
            animation: 'moveGradient 30s ease-in-out infinite alternate-reverse'
          }}
        />
        
        {/* Bottom gradient for section flow */}
        <div
          className="absolute opacity-30"
          style={{
            background: `linear-gradient(to bottom, transparent 80%, ${themeColors.darkBg})`,
            bottom: 0,
            left: 0,
            right: 0,
            height: '20vh',
            zIndex: 2
          }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-normal mb-6 text-gradient"
          style={{ 
            fontFamily: '"Work Sans Variable", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontWeight: 400
          }}
        >
          Advanced Academic Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-gray-100"
          style={{ 
            fontFamily: '"Work Sans Variable", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontWeight: 400
          }}
        >
          Innovation • Research • Excellence
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-full text-white font-normal transition-all hover:bg-opacity-30"
          style={{ 
            fontFamily: '"Work Sans Variable", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontWeight: 400,
            borderWidth: '2px',
            borderColor: themeColors.primaryAccent,
            boxShadow: `0 0 15px ${themeColors.primaryAccent}`
          }}
        >
          Explore
        </motion.button>
      </div>
      
      {/* Down indicator that hints at scrolling for section continuity */}
      <div 
        className="absolute bottom-3 left-0 right-0 flex justify-center z-10 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <svg 
          className="w-10 h-10 text-white opacity-80" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
      
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(100px, 50px);
          }
          50% {
            transform: translate(50px, 100px);
          }
          75% {
            transform: translate(-50px, 50px);
          }
        }
        
        @keyframes moveGradient {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20vw, 20vh);
          }
        }
      `}</style>
    </div>
  );
};

export default CSSHeroAnimation;