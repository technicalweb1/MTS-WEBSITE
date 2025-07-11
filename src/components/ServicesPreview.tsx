"use client";

import React from "react";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web & App Development",
    desc: "Modern, scalable websites and mobile apps for your business.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces for web and mobile platforms.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: "🏫",
    title: "School ERP (My Campus)",
    desc: "Comprehensive school management system for educational institutions.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: "🛒",
    title: "E-commerce Solutions",
    desc: "Custom online stores and payment integrations for your brand.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "💼",
    title: "Business Consulting",
    desc: "Expert advice and digital strategy for your business growth.",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: "🔒",
    title: "Security & Hosting",
    desc: "Secure, reliable hosting and data protection for your projects.",
    color: "from-gray-700 to-gray-900",
  },
];

const ServicesPreview = () => (
  <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors overflow-hidden">
    {/* Animated background shape */}
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-30 animate-blob z-0" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-gray-900 dark:text-white tracking-tight animate-fade-in-up">
        Our Major Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className={`relative bg-white/90 dark:bg-gray-900/80 rounded-2xl p-10 shadow-xl border border-blue-100 dark:border-blue-900 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-200 animate-fade-in-up`}
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
          >
            <div className={`mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white text-3xl shadow-lg`}>{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
