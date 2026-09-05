import { ProjectDetailData } from "@/types";

export const projects: ProjectDetailData[] = [
    {
        id: "turftrack-multi-tenant-saas-case-study",
        title: "TurfTrack - SaaS Turf Sports Management System",
        summary:
            "A SaaS platform empowering turf owners to manage bookings, track finances, and digitize venue operations.",
        description:
            "An end-to-end multi-tenant SaaS application built for turf sports management. Features include single-page public booking profiles, real-time slot locking, flexible payment options (Full, Partial, Pay Later), dynamic pricing, debt management, and real-time SMS alerts.",
        features: [
            "Multi-Tenant Business & Field Config",
            "5-Minute Slot Lock & Race Condition Prevention",
            "Dynamic & Peak-Hour Special Pricing",
            "Owner Finance Analytics & Wallet Debt Tracking",
            "SSLCommerz Payment & Real-Time SMS Alerts",
            "Role-Based Access Control (RBAC)",
        ],
        techStack: [
            "Next.js (App Router, React)",
            "Node.js & Express.js (Clean Architecture)",
            "Prisma ORM & PostgreSQL",
            "Redis (Slot Lock Management)",
            "Tailwind CSS & Lucide Icons",
            "CapacitorJS (Mobile App Integration)",
            "JWT Cookies & OTP Authentication",
            "SSLCommerz Payment Gateway",
        ],
        challenges: [
            "Preventing race conditions during checkout using distributed 5-minute Redis slot locking with grace period extensions.",
            "Deduplicating state logic when verifying overlapping owner, business, and bKash contact phone numbers via OTP.",
            "Building a robust financial engine for dynamic pricing, platform fee calculations, partial payments, and owner debt limit enforcement.",
        ],
        futurePlans: [
            "Upgrade mobile access with a native React Native application.",
            "Add multi-level discount models and multi-location business management.",
            "Build full audit logs for granular activity tracking across all roles.",
            "Introduce a regional turf discovery marketplace and subscription tiers.",
        ],
        thumbnail: "/turf-track-cover.png",
        liveUrl: "https://turftrack.pro",
    },
    // {
    //     id: 2,
    //     title: "Digital Wallet API System",
    //     summary:
    //         "A secure role-based digital wallet backend with transactions and admin controls.",
    //     description:
    //         "A backend-only digital wallet system supporting users, agents, and admins with cash-in/out, send money, transaction history, and role-based authorization.",
    //     features: [
    //         "Node.js",
    //         "Express.js",
    //         "MongoDB",
    //         "JWT Authentication",
    //         "Role-Based Access",
    //     ],
    //     techStack: [
    //         "Node.js & Express.js (Backend)",
    //         "MongoDB (Database)",
    //         "JWT Authentication (Security)",
    //     ],
    //     challenges: [
    //         "Implementing multi-role access control (user, agent, admin).",
    //         "Ensuring transactional integrity during money transfers.",
    //     ],
    //     futurePlans: [
    //         "Add frontend dashboard for users and admins.",
    //         "Integrate payment gateways for instant transactions.",
    //     ],
    //     thumbnail: "/digital-wallet-project.png",
    //     liveUrl: "https://b06-digital-wallet-frontend-uw8n.vercel.app/",
    //     repoUrl: "https://github.com/imran-khan-dev/B06-Digital-Wallet-Frontend",
    // },
];
