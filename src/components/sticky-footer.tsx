"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-yellow-500 h-80 sm:h-80">
      <div className="relative w-full h-full text-black">
        {/* Desktop Layout */}
        <div className="hidden md:flex relative w-full h-full justify-end px-12 items-start py-12">
          {/* Navigation Links */}
          <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul className="space-y-2">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("services");
                  if (element) {
                    const headerOffset = 120;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <li className="hover:underline cursor-pointer transition-colors">
                  Services
                </li>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("about");
                  if (element) {
                    const headerOffset = 120;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <li className="hover:underline cursor-pointer transition-colors">
                  About Us
                </li>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    const headerOffset = 120;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <li className="hover:underline cursor-pointer transition-colors">
                  Projects
                </li>
              </a>
            </ul>
          </div>

          {/* Desktop Logo */}
          <div className="absolute left-4 sm:left-8 md:left-12 bottom-8 sm:bottom-10 md:bottom-12 w-[120px] sm:w-[180px] md:w-[250px]">
            <Image
              src="/logo2.svg"
              alt="GoldenShield Logo"
              width={250}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Copyright */}
          <p className="absolute bottom-0 right-0 mb-4 mr-6 text-sm sm:text-base">
            &copy; 2025 Rayn Group. All Rights Reserved.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center justify-center h-full md:hidden text-center px-4">
          {/* Centered Logo */}
          <div className="mb-4 w-[250px]">
            <Image
              src="/logo2.svg"
              alt="GoldenShield Logo"
              width={250}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Centered Copyright */}
          <p className="text-sm">
            &copy; 2025 Rayn Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
