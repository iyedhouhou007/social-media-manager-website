"use client";

import Image from "next/image"; // Import the Next.js Image component
// No ThemeToggle here, as it's typically placed in NavBar or a separate settings area.

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center px-6 sm:px-10 md:px-16 py-24 text-center min-h-screen" // Use min-h-screen for full viewport height
    >
      {/* Background Overlay with Image/Gradient - choose one */}
      {/* Option 1: Static background image with a dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} // Replace with your actual background image
      ></div>
      <div className="absolute inset-0 bg-black/60 dark:bg-black/40 transition-colors duration-300"></div>{" "}
      {/* Adjust opacity as needed */}
      {/* Option 2: Gradient background (if you prefer no image)
      <div className="absolute inset-0 bg-gradient-to-br from-pink-800 via-purple-900 to-black opacity-80 dark:from-purple-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-300"></div>
      */}
      {/* Content Container */}
      <div className="relative max-w-3xl w-full z-10 text-white dark:text-white">
        {" "}
        {/* Ensure text color contrasts with dark overlay */}
        {/* Profile Image */}
        <Image
          src="/self-img.jpg" // Make sure this path is correct
          alt="Suzi's profile - social media expert"
          width={160} // Base width for md:w-40 (40 * 4 = 160px)
          height={160} // Base height for md:h-40
          className="mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-pink-500 shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300"
          priority // Load this image with high priority
        />
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Ignite Your Brand's Online Presence ✨
        </h1>
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-90">
          I'm Suzi — your creative partner in building authentic and engaging
          social media that gets results. I craft tailored strategies to connect
          with your audience and drive measurable impact.
        </p>
        {/* CTA Button */}
        <a
          href="#contact" // Link to your contact section or a booking page
          className="inline-block px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  );
}
