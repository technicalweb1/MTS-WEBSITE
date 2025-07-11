import React from "react";

const TeamMembers = () => (
  <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Meet Our Team</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Example team members, replace with real data */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <img src="/team/avatar1.png" alt="Hemant Choudhary" className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500 object-cover" />
        <h3 className="text-xl font-bold mb-1">Hemant Choudhary</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Founder & Lead Developer</p>
        <p className="text-sm opacity-80 mb-2">Expert in web development, cloud, and modern tech solutions.</p>
        <a href="https://www.linkedin.com/in/hemant-choudhary29" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <img src="/team/avatar2.png" alt="Team Member" className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 object-cover" />
        <h3 className="text-xl font-bold mb-1">Amit Sharma</h3>
        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">UI/UX Designer</p>
        <p className="text-sm opacity-80 mb-2">Passionate about modern, accessible, and beautiful interfaces.</p>
        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <img src="/team/avatar3.png" alt="Team Member" className="w-24 h-24 rounded-full mb-4 border-4 border-green-500 object-cover" />
        <h3 className="text-xl font-bold mb-1">Priya Singh</h3>
        <p className="text-green-600 dark:text-green-400 font-medium mb-2">Project Manager</p>
        <p className="text-sm opacity-80 mb-2">Ensures smooth delivery and client satisfaction.</p>
        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default TeamMembers;
