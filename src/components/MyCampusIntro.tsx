"use client";
import { motion } from "framer-motion";

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
    transition: { duration: 0.6 },
  },
};

const MyCampusIntro = () => (
  <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 transition-colors duration-500 overflow-hidden">
    {/* Animated background shapes */}
    <motion.div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[360px] h-[360px] md:w-[480px] md:h-[480px] bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20"
      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-100px] right-[-80px] w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-blue-400 dark:bg-blue-800 rounded-full blur-2xl opacity-25"
      animate={{ x: [-20, 20, -20], y: [20, -20, 20] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Introducing <span className="text-blue-600">My Campus</span>
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        My Campus is a comprehensive school management system designed to streamline administration, enhance communication, and empower educators, students, and parents with intuitive tools for a modern educational experience.
      </motion.p>


      {/* Modern, concise features with icons */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">📚</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Student Management</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">🗓️</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Attendance & Timetable</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">�</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Assignments & Grades</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">👨‍🏫</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Teacher Dashboard</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">👨‍👩‍👧‍👦</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Parent Portal</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">🔒</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Secure & Private</h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/50"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-4xl mb-3">�💬</span>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">Communication Portal</h3>
        </motion.div>
      </motion.div>

      <motion.a
        href="/my-campus"
        className="inline-block px-8 py-3 md:px-10 md:py-4 bg-blue-600 text-white rounded-full font-semibold shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Discover My Campus
      </motion.a>
    </div>
  </section>
);

export default MyCampusIntro;