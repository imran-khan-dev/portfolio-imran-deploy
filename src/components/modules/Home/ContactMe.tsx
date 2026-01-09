"use client";

import { Mail, Linkedin, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function ContactMe() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Let’s Work Together
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
          >
            Whether you have a project, or full-time opportunity — feel free to
            reach out.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ContactLink href="tel:+8801871624231">
              <Phone /> +880 1871-624231
            </ContactLink>

            <ContactLink href="mailto:imrankhan.contact.tech@gmail.com">
              <Mail /> imrankhan.contact.tech@gmail.com
            </ContactLink>

            <ContactLink href="https://www.linkedin.com/in/imran-khan-dev-fullstack/">
              <Linkedin /> LinkedIn
            </ContactLink>

            <ContactLink href="https://wa.me/8801871624231">
              <MessageCircle /> WhatsApp
            </ContactLink>
          </motion.div>
        </motion.div>
      </div>
      <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Imran Khan.{" "}
      </p>
    </section>
  );
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition"
    >
      {children}
    </a>
  );
}
