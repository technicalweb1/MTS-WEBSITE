"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaUsers } from "react-icons/fa";

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
    transition: { duration: 0.6, ease: ["easeOut"] },
  },
};

const HomeCTA = () => (
  <section className="relative w-full py-16 sm:py-20 md:py-28 bg-gradient-to-br from-blue-700 via-blue-500 to-teal-400 dark:from-blue-900 dark:via-blue-700 dark:to-teal-600 text-white text-center overflow-hidden">
    {/* Animated background shapes */}
    <motion.div
      className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white/15 dark:bg-blue-900/40 rounded-full blur-3xl opacity-20"
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-teal-200/25 dark:bg-teal-700/25 rounded-full blur-2xl opacity-15"
      animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight font-sans"
        variants={itemVariants}
      >
        Launch Your Next Big Idea
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90"
        variants={itemVariants}
      >
        Collaborate with Modern Tech Solutions to transform your vision into cutting-edge web, app, and school management systems.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
        variants={itemVariants}
      >
        <a
          href="#contact"
          className="flex items-center px-6 py-3 bg-white text-blue-700 font-medium rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          aria-label="Contact Modern Tech Solutions"
        >
          <FaEnvelope className="mr-2" /> Contact Us
        </a>
        <a
          href="mailto:technicalweb101@gmail.com"
          className="flex items-center px-6 py-3 bg-blue-100 text-blue-800 font-medium rounded-full shadow-md hover:bg-blue-200 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          aria-label="Email Modern Tech Solutions"
        >
          <FaEnvelope className="mr-2" /> Email Us
        </a>
        <a
          href="tel:+919352750570"
          className="flex items-center px-6 py-3 bg-green-100 text-green-800 font-medium rounded-full shadow-md hover:bg-green-200 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          aria-label="Call Modern Tech Solutions"
        >
          <FaPhone className="mr-2" /> Call: +91 9352750570
        </a>
        <a
          href="https://www.linkedin.com/in/hemant-choudhary29"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-full shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          aria-label="Visit Modern Tech Solutions on LinkedIn"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <a
          href="/team"
          className="flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          aria-label="Meet the Modern Tech Solutions Team"
        >
          <FaUsers className="mr-2" /> Meet the Team
        </a>
      </motion.div>

      {/* Contact and Map Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        variants={itemVariants}
      >
        {/* Contact Details */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-semibold text-lg">Get in Touch</span>
          <p className="text-base flex items-center gap-2">
            <FaPhone className="text-blue-200" />
            <a
              href="tel:+919352750570"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="Phone number"
            >
              +91 9352750570
            </a>
          </p>
          <p className="text-base flex items-center gap-2">
            <FaEnvelope className="text-blue-200" />
            <a
              href="mailto:technicalweb101@gmail.com"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="Email address"
            >
              technicalweb101@gmail.com
            </a>
          </p>
          <p className="text-base flex items-center gap-2 max-w-xs">
            <FaMapMarkerAlt className="text-blue-200" />
            88 C, Prempura, Vaishali Nagar, Jaipur, Rajasthan, India
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[500px]">
          <iframe
            title="Modern Tech Solutions Location in Jaipur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8730755484164!2d75.7513161150837!3d26.90528398313584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzE5LjAiTiA3NcKwNDUnMDQuNyJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-2xl border-2 border-blue-200/30 shadow-xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default HomeCTA;