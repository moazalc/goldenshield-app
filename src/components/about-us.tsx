"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const aboutContent = [
  {
    title: "Our Story",
    description:
      "Founded in 2008, GoldenShield has been serving the community with reliable construction services for over 15 years.",
    features: [
      "Family-owned business",
      "Local community focus",
      "Trusted reputation",
      "Award-winning projects",
    ],
  },
  {
    title: "Our Team",
    description:
      "Our experienced team of licensed contractors, project managers, and skilled craftsmen work together to deliver exceptional results.",
    features: [
      "Licensed & insured professionals",
      "Ongoing training & certification",
      "Quality-focused approach",
      "Customer satisfaction guarantee",
      "Project management expertise",
      "Safety-first protocols",
    ],
  },
  {
    title: "Why Choose Us",
    description:
      "We combine traditional craftsmanship with modern techniques to deliver projects that exceed expectations.",
    features: [
      "15+ years of experience",
      "Licensed & fully insured",
      "Free detailed estimates",
      "Competitive pricing",
      "Quality materials only",
      "Warranty on all work",
    ],
  },
];

export function About() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">
              About GoldenShield
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Building Excellence Since 2008
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            We&apos;re more than just contractors &ndash; we&apos;re your
            partners in creating spaces that enhance your life and business.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutContent.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl p-8 backdrop-blur-sm border bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#e78a53] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CEO Briefing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="text-left">
                <blockquote className="text-lg text-white/90 italic mb-4">
                  &quot; The journey of a founder typically begins with a
                  groundbreaking idea or concept. They recognize an opportunity
                  in the market and have the ability to envision a successful
                  business model around it. Armed with passion, determination,
                  and a strong belief in their vision, the founder embarks on
                  the challenging path of entrepreneurship. Leadership is a
                  critical aspect of a founder&apos;s role. &quot;
                </blockquote>
                <div className="text-white">
                  <div className="font-semibold">Abdulrahman Alsalem</div>
                  <div className="text-white/60 text-sm">
                    Founder & Chairman, Rayn Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
