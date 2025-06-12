import React from "react";
import { motion } from "framer-motion";

const jobList = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    description: "Build modern UIs using React, Tailwind, and TypeScript.",
  },
  {
    title: "Backend Developer",
    location: "Bangalore, India",
    type: "Full Time",
    description: "Develop RESTful APIs using Node.js and databases like MongoDB.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Design stunning and user-friendly interfaces for web apps.",
  },
  {
    title: "Data Analyst",
    location: "Pune, India",
    type: "Internship",
    description: "Analyze data and create dashboards using Power BI or Tableau.",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-10">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re always looking for creative, passionate people to help us
          build something extraordinary.
        </p>
      </motion.div>

      {/* Job Listings */}
      <div className="grid gap-6 md:grid-cols-2">
        {jobList.map((job, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
            <div className="text-sm text-gray-500 mb-2">
              📍 {job.location} • 💼 {job.type}
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-3">Don’t see a role for you?</h3>
        <p className="text-gray-600 mb-6">
          We’d still love to hear from you. Send us your resume and portfolio.
        </p>
        <a
          href="mailto:careers@yourcompany.com"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          Send Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Careers;
