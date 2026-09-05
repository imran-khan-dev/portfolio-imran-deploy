import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "All Blogs | Imran Khan",
  description:
    "Explore my thoughts, tutorials, and insights on web development, React, Next.js, and modern tech stacks.",
};

const BLOGS = [
  {
    id: "turftrack-multi-tenant-saas-case-study",

    title:
      "TurfTrack — Building a Multi-Tenant Turf Management SaaS from Scratch",

    description:
      "A full-stack case study of how I planned and built TurfTrack, a multi-tenant SaaS platform for managing turf bookings, payments, finance, staff, players, and business operations.",

    thumbnail: "/turf-track-cover.png",

    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "TypeScript",
      "SaaS",
      "Case Study",
    ],
    createdAt: "2026-09-04",
    readTime: "10 min read",
  },
];

const AllBlogsPage = async () => {
  return (
    <section className="relative overflow-hidden py-18 mx-auto">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "linear-gradient(to bottom, #3b82f6 0%, #ffffff 40%, #ffffff 60%, #3b82f6 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(to bottom, #010133 0%, #000000 40%, #000000 60%, #010133 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            All Blogs
          </h1>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg">
            Explore my thoughts, tutorials, and insights on web development,
            React, Next.js, TypeScript, and modern engineering practices.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="w-full flex flex-col items-center gap-10 sm:gap-12 md:gap-14 lg:gap-16">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="w-full max-w-5xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-black/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-5 sm:p-7 lg:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 items-start">
                {/* Image Section */}
                <div className="w-full md:w-1/2 order-first md:order-last">
                  <Link href={`/blogs/${blog.id}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                      <Link
                        href={`/blogs/${blog.id}`}
                        className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
                      {blog.description}
                    </p>

                    {/* Tags */}
                    {blog.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Metadata (Date & Read Time) */}
                    <div className="mt-4 flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all text-sm sm:text-base"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogsPage;
