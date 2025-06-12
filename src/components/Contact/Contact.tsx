import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-10 space-y-12">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-3">Contact</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We specialize in helping you build a team of expert developers.
        </p>
      </motion.div>

      {/* Map & Form */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Map */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-4">
            Please feel free to get in touch with us via any convenient means (phone, WhatsApp, email, or contact form).
          </p>
          <iframe
            title="office-location"
            className="w-full h-72 rounded-xl border shadow"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d472.6754667605321!2d73.81380023371646!3d18.60090186187328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749756764718!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl shadow"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Connect With Your Next Great Hire Today!</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Company" className="input" />
              <input type="text" placeholder="Your Name" className="input" />
              <input type="tel" placeholder="Phone Number" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <textarea
              placeholder="Project Detail"
              className="input w-full h-24"
            />
            <div className="text-sm text-gray-500">
              <input type="checkbox" className="mr-2" /> By sending this form I confirm that I have read and accept the Privacy Policy
            </div>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
              GET CONSULTATION →
            </button>
          </form>
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-10">
        <div>
          <h4 className="font-semibold mb-2">Office</h4>
          <p className="text-gray-600 text-sm">info@courtney.lk</p>
          <p className="text-gray-600 text-sm">+94 011 283 744</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Jayesh Pandhare</h4>
          <p className="text-gray-600 text-sm">Human Resources</p>
          <p className="text-gray-600 text-sm">93098395977</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Parmeshwar Gapat</h4>
          <p className="text-gray-600 text-sm">Founder/CEO</p>
          <p className="text-gray-600 text-sm">parmeshwar.gapat@rakinisoftech.com</p>
          <p className="text-gray-600 text-sm">+91 8512892799</p>
        </div>
      </div>

      {/* Socials */}
      <div className="flex items-center justify-center gap-4 text-xl text-gray-700 pt-6">
        <a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-pink-600"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
        <a href="#" className="hover:text-gray-700"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
};

export default Contact;
