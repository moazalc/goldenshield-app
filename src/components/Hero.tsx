"use client";

import { motion } from "framer-motion";
import HeroButton from "./hero/cta-buttons";
import { useEffect, useState } from "react";

export default function Hero() {
  const videos = [
    "/herovideo.mp4",
    "/herovideo2.mp4",
    "/herovideo3.mp4",
    "/herovideo4.mp4",
    "/herovideo5.mp4",
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade
      setFade(true);

      setTimeout(() => {
        // After fade duration, swap videos
        setCurrentVideo(nextVideo);
        setNextVideo((nextVideo + 1) % videos.length);
        setFade(false);
      }, 1000); // match fade duration in CSS
    }, 10000); // change video every 10s
    return () => clearInterval(interval);
  }, [nextVideo, videos.length]);

  return (
    <>
      <section className="flex flex-col overflow-hidden min-h-screen relative">
        <div className="absolute inset-0 z-0">
          {/* Current Video  */}
          <video
            key={currentVideo}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Next Video (with Fade) */}
          <video
            key={nextVideo}
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={videos[nextVideo]} type="video/mp4" />
          </video>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Gradient fade at the bottom */}
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
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Build <strong>stronger</strong> <span>&</span> <br />
                <strong>safer</strong>{" "}
                <em className="italic">with confidence</em>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-gray-200"
            >
              Professional construction and renovation services with over 15
              years of experience. From residential remodeling to commercial
              projects, we deliver quality craftsmanship that stands the test of
              time.
            </motion.p>

            {/* CTA  */}
            <HeroButton />
          </div>
        </div>
      </section>
    </>
  );
}
