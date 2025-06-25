"use client";

import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Elevating a Boutique Fashion Brand",
      description:
        "Implemented a vibrant Instagram strategy focused on user-generated content and shoppable posts, resulting in **50% engagement increase** and **30% rise in direct sales inquiries**.",
      image: "/portfolio-fashion-mockup.jpg", // Use a relevant stock image/mockup
      results:
        "Increased Instagram engagement by 50%, 30% rise in sales inquiries.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-950 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          What Your Brand Could Achieve
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Imagine these kinds of results for *your* business. Here are examples
          of the tangible impact I help brands achieve through strategic social
          media.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {" "}
          {/* Adjusted to 4 columns for more examples */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative w-full aspect-video">
                {" "}
                {/* Maintain aspect ratio for images */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill // Use fill to cover the parent, then objectFit
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Responsive sizes
                />
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                {project.results && (
                  <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm">
                    Key Results: {project.results}
                  </p>
                )}
                {/* You might not need a "Learn More" link for a prospecting demo, but keep it if you plan detailed mockups */}
                {/* <a
                    href="#" // Keep as placeholder for now, no actual link needed for prospecting
                    className="text-pink-600 hover:text-pink-700 font-semibold flex items-center mt-4"
                  >
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a> */}
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-12 text-lg">
          Ready to see how I can achieve similar results for *your* brand?{" "}
          <a
            href="#contact"
            className="text-pink-600 hover:underline font-semibold"
          >
            Let's connect for a personalized strategy session
          </a>
          .
        </p>
      </div>
    </section>
  );
}
