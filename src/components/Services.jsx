"use client";

import {
  FaChartLine,
  FaPencilRuler,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa"; // Example icons

export default function Services() {
  const serviceItems = [
    {
      icon: <FaChartLine className="text-pink-500 text-4xl mb-4" />,
      title: "Strategic Planning",
      description:
        "Develop bespoke social media strategies aligned with your unique business goals and target audience.",
    },
    {
      icon: <FaPencilRuler className="text-pink-500 text-4xl mb-4" />,
      title: "Content Creation",
      description:
        "Craft engaging visuals, compelling copy, and dynamic video content optimized for each platform.",
    },
    {
      icon: <FaUsers className="text-pink-500 text-4xl mb-4" />,
      title: "Community Management",
      description:
        "Build authentic connections, foster engagement, and cultivate a loyal online community around your brand.",
    },
    {
      icon: <FaBullhorn className="text-pink-500 text-4xl mb-4" />,
      title: "Paid Social Advertising",
      description:
        "Maximize your reach and drive conversions with targeted ad campaigns on Facebook, Instagram, and more.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 sm:px-10 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
