"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Contact & FAQ</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Questions? We&apos;ve got{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            answers
          </span>
        </motion.h2>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-center mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium text-foreground">Call Us</div>
              <div className="text-muted-foreground text-sm">
                (+971) 02-123-4567
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-medium text-foreground">Email Us</div>
              <div className="text-muted-foreground text-sm">
                info@goldenshield.com
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="font-medium text-foreground">Visit Us</div>
              <div className="text-muted-foreground text-sm">123 Abu Dhabi</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
