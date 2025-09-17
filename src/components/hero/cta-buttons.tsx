const HeroButton = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      {/* Contact */}
      <div className="flex items-center justify-center">
        <a
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("contact");
            if (element) {
              const headerOffset = 120; // Account for sticky header height + margin
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
          <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
            <div className=" text-black h-[40px] rounded-full flex items-center justify-center ">
              <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg> */}
                Contact Us
              </p>
            </div>
            <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* Project Button */}
      <div className="flex items-center justify-center">
        <a
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("projects"); // <-- scroll to projects
            if (element) {
              const headerOffset = 120; // Account for sticky header height + margin
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
          <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
            <div className="  h-[40px] rounded-full flex items-center justify-center text-black">
              <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building-icon lucide-building"
                >
                  <path d="M3 7v14h18V7H12l-2-2H3z" />
                </svg> */}
                View Projects
              </p>
            </div>
            <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroButton;
