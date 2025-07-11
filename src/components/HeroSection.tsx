"use client";
import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: easeInOut },
  },
};
const HeroSection = () => (
  <section className="relative w-full flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 min-h-[85vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors duration-500">
    {/* Animated background shapes */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-100px] w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-blue-400 dark:bg-blue-800 rounded-full blur-2xl opacity-25"
        animate={{
          x: [-20, 20, -20],
          y: [20, -20, 20],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Logo: Glassmorphic MTS logo */}
    <motion.div
      className="relative z-10 mb-8 md:mb-12 rounded-full shadow-xl flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/70 dark:bg-white/10 backdrop-blur-lg border-2 border-blue-100/50 dark:border-blue-900/50"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <span
        className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-md"
        style={{
          fontFamily: '"Inter", "Montserrat", "Poppins", sans-serif',
          color: '#2563eb',
          letterSpacing: '-0.05em',
          textShadow: '0 4px 16px rgba(37, 99, 235, 0.2)',
        }}
      >
        MTS
      </span>
    </motion.div>

    {/* Main content */}
    <motion.div
      className="relative z-10 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 dark:text-white leading-tight max-w-4xl px-4"
        variants={itemVariants}
      >
        Empowering Ideas <span className="text-blue-600">Through Technology</span>
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10 max-w-3xl px-6"
        variants={itemVariants}
      >
        Modern Tech Solutions (MTS) & My Campus: <span className="font-medium text-blue-700 dark:text-blue-400">Innovative web, app, and school management solutions</span> for businesses and education.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        variants={itemVariants}
      >
        <a
          href="#projects"
          className="px-6 py-3 md:px-8 md:py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Explore Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 md:px-8 md:py-3 bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-white rounded-full font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;