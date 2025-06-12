import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLaptopCode, FaBuilding, FaGlobe } from "react-icons/fa";


interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: ServiceItem[] = [
  {
    title: 'Dedicated Teams',
    description:
      'Building an extended team with Courtney is like opening your own remote development center, but without the hassle.',
    icon: <FaUsers className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Staff Augmentation',
    description:
      'Staff Augmentation adds extra talent to your team on-demand. Perfect for hard-to-fill or temporary positions.',
    icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Software Outsourcing',
    description:
      'Access experienced software engineers for user experience design, blockchain consulting, and more.',
    icon: <FaGlobe className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Remote Office',
    description:
      'Grow your business from Sri Lanka or the UK by building your own remote development center with Courtney.',
    icon: <FaBuilding className="text-yellow-400 text-3xl" />,
  },
];

const Service: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in helping you build a team of expert developers.
          </p>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-blue-900">Hire Permanent and Remote Developers</h3>
          <p className="mt-2 text-gray-600">
            From full-time remote engineering teams to hourly contractors, work with remote devs as needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900">{service.title}</h4>
                <p className="mt-1 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
