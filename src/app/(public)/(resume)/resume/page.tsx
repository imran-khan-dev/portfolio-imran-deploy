import {
  Mail,
  MapPin,
  Home,
  Phone,
  Linkedin,
  Github,
  Download,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Imran Khan",
  description: "Resume of Imran Khan - Full Stack Developer",
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
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            MD Imran Khan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="mailto:imrankhan.contact.tech@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail size={16} />
              imrankhan.contact.tech@gmail.com
            </a>

            <a
              href="tel:+8801871624231"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Phone size={16} />
              +880 1871-624231
            </a>

            <span className="flex items-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <a
              href="https://www.linkedin.com/in/imran-khan-dev-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href="https://github.com/imran-khan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1s7H6vS34Q0F9A8Mn0P6b_z6JsvZnlQX7/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow hover:opacity-90 transition"
          >
            <Download size={16} />
            Download Resume
          </a>
        </header>

        <hr className="my-8 border-gray-200 dark:border-gray-800" />

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Full Stack Developer with hands-on experience building scalable web
            applications using React, Next.js, Node.js, and modern databases.
            Passionate about clean architecture, problem-solving, and delivering
            production-ready solutions.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          <p className="mb-2">
            <strong>Expertise:</strong> JavaScript, TypeScript, React, Next.js,
            Node.js, Express.js, REST APIs, JWT Authentication, MongoDB,
            PostgreSQL, Prisma, Tailwind CSS
          </p>

          <p className="mb-2">
            <strong>Comfortable:</strong> Redux, RDBMS Concepts
          </p>

          <p className="mb-2">
            <strong>Familiar:</strong> Firebase, Performance Optimization, Basic
            System Design
          </p>

          <p>
            <strong>Tools:</strong> Git, GitHub, VS Code, Figma
          </p>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Turf Management System — Full Stack Application
            </h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>User & turf-owner authentication with secure booking workflow</li>
              <li>Dynamic booking management with real-time availability</li>
              <li>Relational database design using PostgreSQL</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tech:</strong> TypeScript, Next.js, React, Node.js, Prisma,
              PostgreSQL
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Digital Wallet System — Full Stack Application
            </h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              <li>JWT-based authentication & role-based authorization</li>
              <li>Cash-in, cash-out, send money, and transaction history</li>
              <li>Scalable MongoDB data modeling</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tech:</strong> React, Node.js, Express.js, MongoDB, JWT
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Education
          </h2>
          <p>
            <strong>Master of Business Administration (MBA)</strong> — Presidency
            University | 2025
          </p>
        </section>

        {/* Courses */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Courses
          </h2>
          <p>
            Next Level Web Development (Batch 5) — Programming Hero | 2025
          </p>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Languages
          </h2>
          <p>Bangla (Native), English (Comfortable)</p>
        </section>
      </div>
    </main>
  );
}
