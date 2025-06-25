"use client";

// Import all your components
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
// Make sure ThemeToggle is handled in your NavBar or RootLayout if it's for debug

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      {/* Remove ThemeToggle from here if it's for debug and placed elsewhere */}
    </>
  );
}
