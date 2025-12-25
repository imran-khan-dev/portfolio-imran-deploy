"use client";

import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  thumbnail?: string;
  liveUrl?: string;
  repoUrl?: string;
  createdAt: string;
}

export default function ProjectDetailsCard({
  title,
  description,
  longDescription,
  features,
  thumbnail,
  liveUrl,
  repoUrl,
  createdAt,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Header Image */}
      {thumbnail && (
        <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8 sm:p-12 flex flex-col gap-6">
        {/* Title & Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(createdAt).toLocaleDateString()}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {longDescription || description}
        </p>

        {/* Features / Tags */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-black transition-all duration-300"
            >
              <Github className="mr-2 w-4 h-4" />
              Source
            </a>
          )}
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
