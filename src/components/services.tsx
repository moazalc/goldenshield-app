import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { Wrench, Zap, ClipboardCheck, Key, Home } from "lucide-react";
import { FC } from "react";

// Define a type for icon: either a string (PNG path) or a React component
type IconType = string | FC<React.SVGProps<SVGSVGElement>>;

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Construction Works",
    description:
      "Comprehensive construction services for residential, commercial, and industrial projects, ensuring high-quality execution from foundation to finishing.",
    icon: "/icons/crane.png",
  },
  {
    title: "Maintenance & Renovation Works",
    description:
      "Professional maintenance, repair, and renovation services to extend property lifespan, improve aesthetics, and enhance functionality.",
    icon: "/icons/tool.png",
  },
  {
    title: "Electrical Works",
    description:
      "Full electrical installation, repair, and maintenance solutions, including wiring, lighting, and safety systems tailored to modern standards.",
    icon: "/icons/warning.png",
  },
  {
    title: "Construction Project Management & Execution",
    description:
      "End-to-end project management and implementation, from planning and coordination to on-site execution, ensuring projects are delivered on time and within budget.",
    icon: "/icons/plan.png",
  },
  {
    title: "Property Leasing",
    description:
      "Assistance in leasing residential and commercial properties, including marketing, tenant screening, and contract management to maximize occupancy.",
    icon: "/icons/opportunity.png",
  },
  {
    title: "Real Estate Sales & Purchases",
    description:
      "Expert guidance in buying and selling properties, offering market insights, valuation, and negotiation support to secure the best deals.",
    icon: "/icons/estate.png",
  },
];

const Services = () => {
  return (
    <div className="mt-16 pt-10">
      {/* Heading */}
      <div className="mb-12 text-center">
        <TextAnimate
          className="text-4xl font-bold text-yellow-500"
          animation="blurInUp"
          by="character"
          once
        >
          Our Services
        </TextAnimate>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                {/* Icon */}
                {typeof Icon === "string" ? (
                  <Image
                    src={Icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="mb-4"
                  />
                ) : (
                  <Icon className="w-10 h-10 text-yellow-500 mb-4" />
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
