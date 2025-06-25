"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="/about-suzi.jpg" // Add an image for your About section
            alt="Suzi working on social media"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Suzi
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
            Hi, I'm Suzi, and I'm passionate about helping brands unlock their
            full potential on social media. With a keen eye for aesthetics and a
            strategic mindset, I specialize in crafting bespoke social media
            solutions that resonate with your target audience and deliver
            tangible results.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
            My approach is rooted in authenticity and data-driven insights. I
            believe that powerful social media isn't just about pretty pictures;
            it's about building genuine connections, telling compelling stories,
            and continuously optimizing for growth. Whether you're a startup
            looking to make a splash or an established brand aiming to re-engage
            your audience, I'm here to translate your vision into a thriving
            online presence.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition font-medium text-base shadow-md"
          >
            Let's Chat!
          </a>
        </div>
      </div>
    </section>
  );
}
