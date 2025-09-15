"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Building2,
  TrendingUp,
  Shield,
  Wrench,
  Hammer,
  ClipboardCheck,
  Users,
  FileText,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Broker Opinion of Valuation",
    description:
      "Professional property valuation services to determine accurate market value for your real estate investments.",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Marketing for Sale",
    description:
      "Comprehensive marketing strategies to maximize exposure and achieve optimal sale prices for your properties.",
    icon: Search,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Managing Property while Vacant",
    description:
      "Complete vacant property management including security, maintenance, and preparation for sale or lease.",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "General Maintenance Services",
    description:
      "Regular upkeep and maintenance services to preserve property value and ensure tenant satisfaction.",
    icon: Wrench,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "General Contractor",
    description:
      "Full-service construction and renovation solutions for residential and commercial properties.",
    icon: Hammer,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Recommend Repairs",
    description:
      "Expert assessment and recommendations for necessary repairs to maintain and improve property condition.",
    icon: ClipboardCheck,
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Managing Property while Occupied",
    description:
      "Professional tenant relations, rent collection, and property oversight for occupied rental properties.",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Lease Enforcement",
    description:
      "Ensuring lease compliance and handling tenant issues with professional and legal expertise.",
    icon: FileText,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Marketing Property for Lease",
    description:
      "Strategic marketing and tenant screening to find qualified renters and minimize vacancy periods.",
    icon: Building2,
    color: "from-pink-500 to-pink-600",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
            "mb-8 text-center text-4xl font-semibold tracking-tighter text-foreground md:text-[54px] md:leading-[60px]"
          )}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl px-4 sm:px-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br ${service.color} shadow-sm flex-shrink-0`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
