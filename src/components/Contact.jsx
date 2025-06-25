"use client";

import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa"; // Example icons

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 md:px-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-950 dark:via-neutral-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12">
          Let's Work Together!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          Ready to elevate your brand's social media presence? Reach out to
          discuss your goals and how I can help.
        </p>

        {/* Contact Form (Placeholder - you'll need a backend for this) */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl mb-10 text-left">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact & Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href="mailto:socialsbysuzi@gmail.com"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 text-lg"
          >
            <FaEnvelope className="mr-2" /> socialsbysuzi@gmail.com
          </a>
          <a
            href="https://www.facebook.com/people/Socials-by-Suzi/100091808749302/?checkpoint_src=any"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 text-lg"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/socialsbysuzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 text-lg"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@socialsbysuzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 transition-colors duration-300 text-lg"
          >
            <FaTiktok className="mr-2" /> TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
