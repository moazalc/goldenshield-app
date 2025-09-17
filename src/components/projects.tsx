/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const projects = [
  {
    title: "Dubai Marina Residences",
    description:
      "Luxury waterfront residential project offering panoramic views of the Marina skyline.",
    image: "/logo.png",
  },
  {
    title: "Burj Vista Towers",
    description:
      "Premium twin towers located near Burj Khalifa, blending modern design with comfort.",
    image: "/logo.png",
  },
  {
    title: "Palm Jumeirah Villas",
    description:
      "Exclusive villas on Palm Jumeirah with private beaches and high-end finishes.",
    image: "/logo.png",
  },
  {
    title: "Downtown Business Bay",
    description:
      "A modern commercial hub with state-of-the-art office spaces in the heart of Dubai.",
    image: "/logo.png",
  },
];

const Projects = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
          Our Projects
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="relative w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, idx) => (
              <CarouselItem key={idx} className="basis-full">
                <Card className="overflow-hidden shadow-lg rounded-2xl">
                  <div className="relative h-[500px] w-full">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-6">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-200 text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className="h-3 w-3 rounded-full bg-gray-300 hover:bg-yellow-500 transition"
                // 👉 You'll need state to track active slide and highlight dot
              ></button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
