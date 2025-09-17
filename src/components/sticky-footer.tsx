"use client";

export function Footer() {
  return (
    <footer className="w-full bg-yellow-500 h-80">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-black">
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

        {/* "GoldenShield" Heading */}
        <h2 className="absolute bottom-0 left-0 -mb-5 sm:text-[100px] text-[80px] font-bold select-none">
          <span className="hidden sm:inline">GoldenShield</span>
          <span className="inline sm:hidden text-[65px]">GS</span>
        </h2>

        {/* Copyright */}
        <p className="absolute bottom-0 right-0 mb-4 mr-6 text-sm sm:text-base">
          &copy; 2025 Rayn Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
