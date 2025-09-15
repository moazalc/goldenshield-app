"use client";
import type React from "react";

import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [isCliHovering, setIsCliHovering] = useState(false);
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false);
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [baseColor, setBaseColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([
    0.906, 0.541, 0.325,
  ]); // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0);

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]); // #e78a53
    setGlowColor([0.906, 0.541, 0.325]); // #e78a53
    setDark(theme === "dark" ? 1 : 0);
  }, [theme]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputValue("");
    }
  };
  return (
    <section
      id="services"
      className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32"
    >
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]"
          )}
        >
          Our Services
        </h2>
      </motion.div>
    </section>
  );
};

export default Features;
