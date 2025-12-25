"use client";

import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export function AboutMe() {
  return (
    <section id="about" className="w-full py-24 relative bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Text Content */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center space-y-6 lg:pr-12"
          >
            <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              Hello! I’m <strong>Imran Khan</strong>, a Full Stack Developer
              from Bangladesh. I’m passionate about designing and building
              user-focused web applications. I specialize in creating fast,
              accessible, and responsive experiences that blend functionality
              with aesthetics.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              My journey started with a curiosity about how the web works
              which turned into a full-time passion for clean architecture,
              reusable components, and problem-solving through code.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              Outside of coding, I enjoy exploring UI design trends, learning
              new tools, and staying curious about how technology can empower
              people and communities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <ContactLink href="mailto:emranniloy84@gmail.com" Icon={Mail}>
                Email
              </ContactLink>
              <ContactLink
                href="https://www.linkedin.com/in/imran-khan-438213358/"
                Icon={Linkedin}
              >
                LinkedIn
              </ContactLink>
              <ContactLink
                href="https://wa.me/8801871624231"
                Icon={MessageCircle}
              >
                WhatsApp
              </ContactLink>
            </div>
          </motion.div>

          {/* Right: Photo Card */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 transform transition-all hover:scale-105"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent rounded-3xl blur-xl"></div>
            {/* Main image */}
            <img
              src="https://i.imgur.com/960qgFH.jpeg"
              alt="Imran Khan"
              className="w-full h-full object-cover rounded-3xl relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact link component
function ContactLink({
  href,
  Icon,
  children,
}: {
  href: string;
  Icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.05 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white transition text-gray-900 dark:text-white font-medium"
    >
      <Icon className="w-5 h-5" />
      {children}
    </motion.a>
  );
}
