// "use client";

// import { ExternalLink, Github, ArrowLeft } from "lucide-react";
// import Link from "next/link";

// interface Props {
//   title: string;
//   description: string;
//   longDescription?: string;
//   features: string[];
//   thumbnail?: string;
//   liveUrl?: string;
//   repoUrl?: string;
//   createdAt: string;
// }

// export default function ProjectDetailsCard({
//   title,
//   description,
//   longDescription,
//   features,
//   thumbnail,
//   liveUrl,
//   repoUrl,
//   createdAt,
// }: Props) {
//   return (
//     <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
//       {/* Header Image */}
//       {thumbnail && (
//         <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden">
//           <img
//             src={thumbnail}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//           />
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-8 sm:p-12 flex flex-col gap-6">
//         {/* Title & Date */}
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
//           <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(createdAt).toLocaleDateString()}</span>
//         </div>

//         {/* Description */}
//         <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//           {longDescription || description}
//         </p>

//         {/* Features / Tags */}
//         {features.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-4">
//             {features.map((feature) => (
//               <span
//                 key={feature}
//                 className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
//               >
//                 {feature}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-4 mt-6">
//           {liveUrl && (
//             <a
//               href={liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <ExternalLink className="mr-2 w-4 h-4" />
//               Live Demo
//             </a>
//           )}
//           {repoUrl && (
//             <a
//               href={repoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-black transition-all duration-300"
//             >
//               <Github className="mr-2 w-4 h-4" />
//               Source
//             </a>
//           )}
//           <Link
//             href="/projects"
//             className="inline-flex items-center px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-700 font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
//           >
//             <ArrowLeft className="mr-2 w-4 h-4" />
//             Back to Projects
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { Github, ExternalLink } from "lucide-react";
import { ProjectDetailData } from "@/types";

interface ProjectDetailsProps {
  project: ProjectDetailData;
}

export function ProjectDetailsCard({ project }: ProjectDetailsProps) {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {project.summary}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-6 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          {/* Thumbnail */}
          {project.thumbnail && (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-gray-200 dark:bg-gray-800" />

        {/* Description and Sidebar */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Project Overview
              </h2>
              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Challenges
                </h2>
                <ul className="mt-5 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Plans */}
            {project.futurePlans && project.futurePlans.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Future Plans
                </h2>
                <ul className="mt-5 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.futurePlans.map((plan, idx) => (
                    <li key={idx}>{plan}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
            {/* Features / Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tech Stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 dark:border-purple-400/30 bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
