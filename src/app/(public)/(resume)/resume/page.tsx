// src/app/resume/page.tsx
import { Mail, MapPin, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Imran Khan",
  description: "Resume of Imran Khan",
};

export default function ResumePage() {
  return (
    <main className="relative py-20 px-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      
      {/* Home Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-blue-600 hover:text-white transition"
      >
        <Home size={16} />
        Home
      </Link>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 md:p-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Imran Khan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full Stack Developer | Next.js | React.js | TypeScript | Node.js
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <Link
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Mail size={16} /> emranniloy84@gmail.com
              </Link>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </header>

        <hr className="border-gray-200 dark:border-gray-800 my-8" />

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer who loves building scalable,
            user-friendly web applications with modern technologies like Next.js,
            React, TypeScript, and Node.js. I focus on clean, maintainable code
            and best practices.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Redux Toolkit",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Education
          </h2>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Next Level Web Development — Programming Hero
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack course covering Next.js, Node.js, Prisma, PostgreSQL,
              TypeScript, and clean architecture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Masters of Business Administration (MBA)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Marketing | 2025
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Bachelor of Business Administration (BBA)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tourism & Hospitality Management | 2019
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
