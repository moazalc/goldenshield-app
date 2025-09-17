import { TextAnimate } from "./ui/text-animate";
import { Scale, Megaphone, Home, Wrench, Hammer, HardHat } from "lucide-react";

const services = [
  {
    title: "Broker Opinion of Valuation",
    description:
      "Professional property valuation services to determine accurate and reliable market value for your real estate investments.",
    icon: Scale,
  },
  {
    title: "Marketing for Sale",
    description:
      "Comprehensive marketing strategies designed to maximize exposure and achieve the best possible sale prices for your properties.",
    icon: Megaphone,
  },
  {
    title: "Managing Property while Vacant",
    description:
      "Complete vacant property management including security, maintenance, and preparation for sale or lease.",
    icon: Home,
  },
  {
    title: "General Maintenance Services",
    description:
      "Ongoing property upkeep and maintenance services to preserve value, enhance safety, and ensure tenant satisfaction.",
    icon: Wrench,
  },
  {
    title: "General Contractor",
    description:
      "Full-service construction and renovation solutions tailored for both residential and commercial properties.",
    icon: HardHat,
  },
  {
    title: "Recommend Repairs",
    description:
      "Expert inspections and recommendations for essential repairs to maintain property condition and long-term value.",
    icon: Hammer,
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
          Services
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
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                {/* Icon */}
                <Icon className="w-10 h-10 text-yellow-500 mb-4" />

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
