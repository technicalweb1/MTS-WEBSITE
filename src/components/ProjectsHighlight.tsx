"use client";

import React from "react";

import { motion } from "framer-motion";

const projects = [
  {
    icon: "🏫",
    title: "My Campus App",
    desc: "School management system for modern education.",
    tag: "School Management",
    color: "from-blue-200 to-blue-400 dark:from-blue-800 dark:to-blue-600",
  },
  {
    icon: "🛒",
    title: "E-commerce Platform",
    desc: "Custom online store with payment integration.",
    tag: "Web",
    color: "from-green-200 to-green-400 dark:from-green-800 dark:to-green-600",
  },
  {
    icon: "💼",
    title: "Business Portfolio",
    desc: "Showcase of web and app projects for clients.",
    tag: "Portfolio",
    color: "from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600",
  },
  {
    icon: "📱",
    title: "Mobile Attendance App",
    desc: "Android/iOS app for real-time school attendance.",
    tag: "Android/iOS",
    color: "from-pink-200 to-pink-400 dark:from-pink-800 dark:to-pink-600",
  },
  {
    icon: "🧑‍💻",
    title: "Freelance Client Portal",
    desc: "Custom dashboard for freelance project management.",
    tag: "Web App",
    color: "from-yellow-200 to-yellow-400 dark:from-yellow-800 dark:to-yellow-600",
  },
  {
    icon: "🛍️",
    title: "Online Storefront",
    desc: "Multi-vendor e-commerce platform with analytics.",
    tag: "E-commerce",
    color: "from-indigo-200 to-indigo-400 dark:from-indigo-800 dark:to-indigo-600",
  },
];

const ProjectsHighlight = () => (
  <section id="projects" className="relative w-full py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 transition-colors overflow-hidden">
    {/* Animated background shape */}
    <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-30 animate-blob z-0" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-gray-900 dark:text-white tracking-tight animate-fade-in-up">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-200 animate-fade-in-up`}
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
          >
            <div className={`mb-5 w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white text-4xl shadow-lg`}>{project.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-center">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-2 text-center">{project.desc}</p>
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded text-xs mb-2">{project.tag}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsHighlight;
