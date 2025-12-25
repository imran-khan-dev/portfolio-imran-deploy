"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function TechStack() {
  return (
    <section id="techStack" className=" py-24 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
          >
            Tech Stack
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            The technologies I use to build modern, scalable, and beautiful web
            applications.
          </motion.p>

          <motion.div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {techs.map((tech) => {
              const { Icon } = tech;
              return (
                <motion.div
                  key={tech.name}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow:
                      "0 20px 40px rgba(59, 130, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="flex flex-col items-center p-6 bg-white dark:bg-black/30 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-5xl text-blue-600 dark:text-purple-400 mb-2">
                    <Icon />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
