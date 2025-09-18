"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroButton from "./hero/cta-buttons";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/hero2.jpg", "/hero3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // change every 10s
    return () => clearInterval(interval);
  });

  return (
    <section className="flex flex-col overflow-hidden min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="hero background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // 1 second fade
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </AnimatePresence>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
        <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h1
              id="main-title"
              className="text-4xl font-semibold  tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Your <strong>Shield</strong> for{" "}
              <strong>Trusted Properties</strong> &{" "}
              <strong>Quality Contracting</strong>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-gray-200"
          >
            At Golden Shield, we provide reliable property management and expert
            contracting services. From overseeing your investments to executing
            construction projects with precision, we ensure safety, quality, and
            peace of mind. Your assets are in trusted hands.
          </motion.p>

          {/* CTA  */}
          <HeroButton />
        </div>
      </div>
    </section>
  );
}
