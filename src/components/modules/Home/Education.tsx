"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "Next Level Web Development Course",
    institution: "Programming Hero",
    period: "2025",
    description:
      "Completed a comprehensive Full stack course with Next.js, Node.js, Express, Redux, RDBMS, Postgress, Typescript, and Prisma.",
  },
  {
    title: "Master of Business Administration (MBA)",
    institution: "Presidency University",
    period: "2025",
    description:
      "Specialization in Marketing.",
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    institution: "World University of Bangladesh",
    period: "2016 - 2019",
    description: "Major in Toursim & Hospitality Management.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My academic journey and professional development courses.
          </motion.p>

          <div className="mt-12 space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative flex items-start gap-6 p-6 bg-white dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 dark:bg-purple-600 text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.institution} • {edu.period}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
