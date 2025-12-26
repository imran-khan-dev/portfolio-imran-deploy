import { ProjectDetailData } from "@/types";

export const projects: ProjectDetailData[] = [
    {
        id: 1,
        title: "Turf Management SaaS Platform",
        summary:
            "A SaaS platform for turf owners and users with booking, payments, and profile management.",
        description:
            "A full-stack SaaS platform where turf owners create shareable profiles, manage bookings, track earnings, and users register via OTP to book turfs online or offline.",
        features: [
            "Next.js",
            "Express.js",
            "Prisma",
            "OTP Authentication",
            "Clean Architecture",
        ],
        techStack: [
            "Next.js (Frontend)",
            "Express.js & Node.js (Backend)",
            "Prisma & PostgreSQL (Database ORM)",
            "Tailwind CSS (UI Design)",
            "JWT & OTP Authentication (Security)",
        ],
        challenges: [
            "Integrating OTP-based authentication for both turf owners and users.",
            "Ensuring real-time booking updates and avoiding double bookings.",
            "Implementing a role-based access system for owners and users.",
        ],
        futurePlans: [
            "Add online payment integration for seamless transactions.",
            "Implement advanced analytics dashboard for turf owners.",
            "Enable turf reviews and ratings by users.",
        ],
        thumbnail: "/turf-project.png",
        liveUrl: "https://turf-frontend-deploy.vercel.app/",
        repoUrl: "https://github.com/imran-khan-dev/turf-frontend-deploy",
    },
    {
        id: 2,
        title: "Digital Wallet API System",
        summary:
            "A secure role-based digital wallet backend with transactions and admin controls.",
        description:
            "A backend-only digital wallet system supporting users, agents, and admins with cash-in/out, send money, transaction history, and role-based authorization.",
        features: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Role-Based Access",
        ],
        techStack: [
            "Node.js & Express.js (Backend)",
            "MongoDB (Database)",
            "JWT Authentication (Security)",
        ],
        challenges: [
            "Implementing multi-role access control (user, agent, admin).",
            "Ensuring transactional integrity during money transfers.",
        ],
        futurePlans: [
            "Add frontend dashboard for users and admins.",
            "Integrate payment gateways for instant transactions.",
        ],
        thumbnail: "/digital-wallet-project.png",
        liveUrl: "https://b06-digital-wallet-frontend-uw8n.vercel.app/",
        repoUrl: "https://github.com/imran-khan-dev/B06-Digital-Wallet-Frontend",
    },
];
