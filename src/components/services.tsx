import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "./ui/text-animate";

const services = [
  {
    title: "Broker Opinion of Valuation",
    description:
      "Professional property valuation services to determine accurate market value for your real estate investments.",
  },
  {
    title: "Marketing for Sale",
    description:
      "Comprehensive marketing strategies to maximize exposure and achieve optimal sale prices for your properties.",
  },
  {
    title: "Managing Property while Vacant",
    description:
      "Complete vacant property management including security, maintenance, and preparation for sale or lease.",
  },
  {
    title: "General Maintenance Services",
    description:
      "Regular upkeep and maintenance services to preserve property value and ensure tenant satisfaction.",
  },
  {
    title: "General Contractor",
    description:
      "Full-service construction and renovation solutions for residential and commercial properties.",
  },
  {
    title: "Recommend Repairs",
    description:
      "Expert assessment and recommendations for necessary repairs to maintain and improve property condition.",
  },
];

const Services = () => {
  return (
    <div className="mt-5 pt-5 ">
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

      {/* Accordion Layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10 max-w-6xl">
        {/* Left column */}
        <Accordion type="single" collapsible className="flex-1 space-y-6">
          {services.slice(0, 3).map((service, i) => (
            <AccordionItem key={i} value={`left-${i}`}>
              <AccordionTrigger className="text-lg lg:text-xl font-semibold flex items-center gap-3">
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base lg:text-lg leading-relaxed mt-2">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Right column */}
        <Accordion type="single" collapsible className="flex-1 space-y-6">
          {services.slice(3, 6).map((service, i) => (
            <AccordionItem key={i} value={`right-${i}`}>
              <AccordionTrigger className="text-lg lg:text-xl font-semibold flex items-center gap-3">
                {service.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base lg:text-lg leading-relaxed mt-2">
                {service.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Services;
