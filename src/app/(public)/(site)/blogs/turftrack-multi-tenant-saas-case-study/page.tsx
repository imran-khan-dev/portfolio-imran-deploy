import Link from "next/link";
import {
  Calendar,
  Clock,
  CheckCircle2,
  User,
  Wrench,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "TurfTrack Case Study | Imran Khan",
  description:
    "An in-depth look at TurfTrack: a SaaS turf sports management system built with Next.js, Node.js, PostgreSQL, and Prisma by Imran Khan.",
};

// export const revalidate = 30;

const TurfTrackCaseStudy = async () => {
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

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-12 px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Blog Container Card */}
        <article className="w-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10 lg:p-14 text-gray-800 dark:text-gray-200 leading-relaxed">
          {/* Header Section */}
          <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Full-Stack SaaS",
                "Case Study",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Prisma",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              TurfTrack: SaaS Turf Sports Management System
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                Imran Khan
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                March 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                12 min read
              </span>
            </div>
          </header>

          {/* Article Body */}
          <div className="space-y-12 text-base sm:text-lg">
            {/* 01. Project Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                01. Project Overview
              </h2>
              <p>
                TurfTrack is a SaaS turf sports management system with powerful
                features to manage turf businesses simply and easily. Starting
                with booking management, owners can see the past and present
                performance of their turf business and make data-driven
                decisions for their business.
              </p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-5 my-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Summary
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  TurfTrack is a simple yet powerful web and mobile application
                  for turf owners to manage their business simply, easily, and
                  economically.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  It solves pain points for turf owners such as Excel or
                  paper-based booking records, the headache of managing bookings
                  through phone calls and messages, time-consuming manual
                  calculations for analysis, not having a clear picture of
                  business performance, and not being able to provide digital
                  payment options for players.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Players also face problems such as having no proper way to
                  track their own bookings, payment details, refund details, and
                  booking information.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  The TurfTrack I built addresses these issues and provides a
                  complete, user-friendly solution for these pain points.
                </p>
                <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-purple-400">
                  The great part is that it is a SaaS platform that charges a
                  very nominal fee to turf owners per confirmed booking. If no
                  booking is confirmed, there is no fee for using it.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Role
                </h3>
                <p>This is an end-to-end MVP completed by me, “Imran Khan”.</p>
                <p>I handled:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                  {[
                    "Product planning",
                    "UX/UI decisions",
                    "Frontend development",
                    "Backend development",
                    "Database design",
                    "Authentication",
                    "Booking logic",
                    "Payment integration",
                    "Finance logic",
                    "Deployment",
                    "Testing",
                    "And more",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm sm:text-base"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Project Status
                </h3>
                <p>Honestly, this is more than an MVP.</p>
                <p>
                  I could have released a smaller MVP version, but due to market
                  competition, I had to add at least some extra analytics
                  features to compete in the market and give turf owners a
                  feeling that TurfTrack is a complete solution for their pain
                  points.
                </p>
                <p>
                  An MVP could have been just booking management, but it has now
                  become more than booking management. It is actually a turf
                  business management system.
                </p>
                <p>
                  Since I am releasing its first version, I named it the MVP of
                  TurfTrack.
                </p>
                <p>
                  This MVP comes with a mobile app based on Capacitor. For a
                  better user experience, the next update will include a
                  TurfTrack React Native app and better UI/UX design for both
                  web and mobile versions.
                </p>
              </div>
            </section>

            {/* 02. The Problem */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                02. The Problem
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                The Problem with Turf Management
              </h3>
              <p>
                Back in early 2025, I was with my brother for a meeting. He
                regularly plays on turf, and he mentioned the manual process of
                booking turf slots.
              </p>
              <p className="italic border-l-4 border-blue-600 dark:border-purple-400 pl-4 py-1">
                He asked me, &quot;Why don&apos;t I make a booking management
                solution for turf businesses?&quot;
              </p>
              <p>
                At that time, I had just started learning how industry projects
                are built, but I started researching the idea.
              </p>
              <p>
                I found that many turf businesses handled bookings and business
                performance manually using paper or Excel. They also used phone
                calls, Messenger, and WhatsApp for taking bookings.
              </p>
              <p>
                This required a lot of human involvement, made the process slow,
                and could cause mistakes such as double-booking a single slot.
              </p>
              <p>
                There were also problems with tracking payments. Most
                importantly, getting updated business analytics and financial
                statistics was a time-consuming and difficult process.
              </p>
              <p>
                However, by the time I started building the software solution,
                new turf management applications had already been published and
                were working in the market.
              </p>
              <p>
                I researched them and found that some had too many features
                before users in the market had even become educated about these
                types of products.
              </p>
              <p>
                I understood that, initially, a feature-heavy product can
                overwhelm users.
              </p>
              <p>
                Apart from that, some existing products were providing
                incomplete solutions, such as not providing a real online
                payment gateway.
              </p>
              <p>
                On the other hand, I also felt that some were not following a
                clean UI/UX approach, which could make the product harder for
                users to understand and use.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Problems Faced by Turf Owners
                  </h4>
                  <ul className="space-y-2 text-sm sm:text-base list-disc list-inside">
                    <li>Managing multiple bookings</li>
                    <li>Preventing double bookings</li>
                    <li>Managing different fields</li>
                    <li>Managing different prices</li>
                    <li>Tracking payments</li>
                    <li>Tracking earnings</li>
                    <li>Managing staff</li>
                    <li>Understanding business performance</li>
                  </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Problems Faced by Players / Customers
                  </h4>
                  <ul className="space-y-2 text-sm sm:text-base list-disc list-inside">
                    <li>Finding available slots by themselves</li>
                    <li>Knowing the actual price</li>
                    <li>Checking availability</li>
                    <li>Booking remotely at any time</li>
                    <li>Making payments</li>
                    <li>Receiving booking confirmation</li>
                    <li>
                      Managing bookings such as cancellation and rescheduling
                      without manually calling the turf
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 03. The Opportunity */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                03. The Opportunity
              </h2>
              <p>
                I found that these hectic manual processes for owners, managers,
                and players should be solved by a software system.
              </p>
              <p>
                Solving these problems is a worthy opportunity to build a SaaS
                business where both parties are in a win-win situation.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3.1 Why Build This Product?
                </h3>
                <p>
                  I found a business opportunity by solving real-life problems
                  of turf businesses.
                </p>
                <p>
                  As TurfTrack charges a nominal fee per confirmed booking,
                  TurfTrack as a product creates a win-win situation for both
                  the turf owners and TurfTrack itself.
                </p>
                <p>
                  The turf owner gets a complete management system without
                  having to make a large upfront investment, while TurfTrack
                  gets a sustainable business model.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  3.2 Why a SaaS Product?
                </h3>
                <p>
                  If it were not SaaS, it could have been a completely dedicated
                  solution for turf businesses where they would purchase it as
                  one-time software.
                </p>
                <p>
                  But it would be more like building software rather than
                  solving the actual problem, because:
                </p>
                <ul className="space-y-2 list-disc list-inside pl-2">
                  <li>
                    They may need to buy a license or set up a digital payment
                    gateway, which can be costly.
                  </li>
                  <li>
                    One-time software can be more expensive than using a SaaS
                    application.
                  </li>
                  <li>
                    Updating one-time software can be expensive, whereas SaaS
                    updates can be provided continuously.
                  </li>
                </ul>
                <p>
                  Overall, it can be expensive to move from manual processes to
                  one-time software, whereas using a SaaS application only
                  charges a very nominal fee when a successful confirmed booking
                  occurs.
                </p>
                <p>
                  There is no charge for payment gateway setup, no charge for
                  moving from the manual system to the software system, and no
                  separate charge for future features and UI/UX updates.
                </p>
                <p>
                  On the other hand, TurfTrack, as a business gets predictable
                  and sustainable earnings to support and improve the
                  application.
                </p>
              </div>
            </section>

            {/* 04. The Solution */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                04. The Solution
              </h2>
              <p>
                There are multiple problem-solving features I have built. The
                core features are described below.
              </p>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    i. Business Management
                  </h3>
                  <p className="mt-1">
                    If an owner has multiple turf businesses in different
                    locations, they do not need to handle different accounts for
                    each one. From one account, they can add multiple businesses
                    and manage them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    ii. Field Management
                  </h3>
                  <p className="mt-1">
                    If an owner has multiple fields in one business location,
                    they can add, remove, and manage field information.
                  </p>
                  <p>
                    They can set different regular prices, as well as special
                    pricing for specific times or days.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    iii. Booking Management
                  </h3>
                  <p className="mt-1">
                    Owners and managers can manage bookings, including
                    cancelling and rescheduling bookings.
                  </p>
                  <p>
                    They can also see detailed invoices and booking details with
                    all the information they need.
                  </p>
                  <p>
                    The manager and owner dashboards also include Quick Booking
                    and Block Slot features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    iv. Real-Time Notifications and SMS
                  </h3>
                  <p className="mt-1">
                    Owners, managers, and players receive notifications for
                    important actions.
                  </p>
                  <p>
                    For important actions, SMS notifications are also sent. For
                    example, when a booking is confirmed, cancelled,
                    rescheduled, completed, or refunded, both the player and
                    owner can receive SMS notifications on their phones.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    v. Booking Analytics
                  </h3>
                  <p className="mt-1">
                    Owners and managers can see detailed booking analytics in
                    the dashboard, including:
                  </p>
                  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                    <li>Number of bookings</li>
                    <li>Revenue</li>
                    <li>Upcoming revenue</li>
                    <li>Online payment collection</li>
                    <li>Refunds issued</li>
                    <li>Booking graphs</li>
                    <li>Earning graphs</li>
                  </ul>
                  <p className="mt-2">
                    Owners can also see their wallet information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    vi. Finance Analytics
                  </h3>
                  <p className="mt-1">
                    Owners can see past revenue, upcoming revenue, and earning
                    trends.
                  </p>
                  <p className="mt-1">They can also see:</p>
                  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
                    <li>Total lifetime online payment</li>
                    <li>Total lifetime withdrawn amount</li>
                    <li>Available amount for withdrawal</li>
                    <li>App fee debt</li>
                  </ul>
                  <p className="mt-2">
                    The app fee debt can occur when a special user uses the
                    pay-later option.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    vii. Player Management
                  </h3>
                  <p className="mt-1">
                    Owners can see a list of players who have interacted with
                    their businesses.
                  </p>
                  <p>
                    The owner can manually create a special user by entering the
                    player&apos;s name and mobile number, or they can create a
                    special user directly from the player list.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    viii. Debt Management
                  </h3>
                  <p className="mt-1">
                    Normally, online payments automatically handle the platform
                    fee.
                  </p>
                  <p>
                    However, a special user trusted by the owner can be allowed
                    to book now and pay later.
                  </p>
                  <p>There is a debt limit, which could be 500 or 1,000 TK.</p>
                  <p>
                    If the limit is reached, the booking system will
                    automatically be restricted until the owner pays the debt to
                    TurfTrack.
                  </p>
                  <p>
                    A progress bar in My Wallet shows how close the business is
                    to reaching its debt limit.
                  </p>
                </div>
              </div>
            </section>

            {/* 05. Key Product Decisions */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                05. Key Product Decisions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Decision 1 — No Marketplace in MVP
                  </h3>
                  <p className="mt-2">
                    A marketplace becomes useful when turf businesses themselves
                    are digitalized and have slot availability through an API or
                    their own application with public slot availability and
                    online booking.
                  </p>
                  <p>
                    When businesses are still doing everything manually, a
                    marketplace will not work effectively.
                  </p>
                  <p>
                    In this case, the first step should be the digitalization of
                    turf businesses.
                  </p>
                  <p>
                    This is what TurfTrack is going to do first. It will first
                    register and digitize a good number of regional turf
                    businesses. Then, in the near future, the marketplace
                    feature can be introduced.
                  </p>
                  <p>
                    That way, everything can eventually work as one system with
                    a single source of truth for the booking system.
                  </p>
                  <p>
                    For the MVP, I am focusing on the first step of registering
                    and digitizing the turfs. In the near future, the next
                    version can come with a marketplace feature.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Decision 2 — Clean Single Page for Profile + Booking Start
                  </h3>
                  <p className="mt-2">
                    Every turf business gets a single page for both its profile
                    and booking.
                  </p>
                  <p>
                    This page contains all the important information about the
                    turf business, including:
                  </p>
                  <ul className="list-disc list-inside pl-4 my-2 space-y-1">
                    <li>About</li>
                    <li>Social links</li>
                    <li>Contact information</li>
                    <li>Refund policy</li>
                    <li>Terms and conditions</li>
                    <li>Features and amenities</li>
                  </ul>
                  <p>
                    The page also shows the available fields and available slots
                    for the selected date.
                  </p>
                  <p>
                    Players can choose their slots here, click Checkout, and go
                    to the confirmation page.
                  </p>
                  <p>
                    Instead of making multiple pages for the process, I wanted
                    to reduce friction and create a clean and minimalistic flow.
                  </p>
                  <p>Players can simply visit a page such as:</p>
                  <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-800 my-2">
                    turftrack.pro/book/sample-turf
                  </div>
                  <p>
                    The sample-turf parameter is dynamic and is based on the
                    business slug.
                  </p>
                  <p>
                    To provide a less-friction, clean, and minimalistic
                    experience for players, I built the booking process this
                    way.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Decision 3 — Platform Fee Per Confirmed Booking
                  </h3>
                  <p className="mt-2">
                    Instead of using a subscription model for TurfTrack SaaS, I
                    implemented a nominal fee per confirmed booking.
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-2">
                    Why?
                  </p>
                  <p>
                    A subscription requires a client to go through a payment
                    flow to pay the platform. No matter how much it costs, it
                    can make the client feel that they are paying to get access
                    to the service.
                  </p>
                  <p>
                    It also means that if they have no business for a long time,
                    they still have to pay a subscription fee to keep access to
                    the account.
                  </p>
                  <p>
                    Overall, I felt the subscription method does not provide
                    enough comfort or flexibility to turf owners.
                  </p>
                  <p>
                    Whereas, when the fee is a nominal amount per successful
                    confirmed booking, such as 10 TK, it looks very small and
                    provides flexibility.
                  </p>
                  <p>
                    They do not have to worry about paying for access to the app
                    if no business occurs for a long time.
                  </p>
                  <p>
                    This approach also makes the product easier to position from
                    a marketing perspective because it looks very inexpensive to
                    use.
                  </p>
                  <p>
                    Apart from that, this approach can be more profitable for
                    TurfTrack than a fixed subscription.
                  </p>
                  <p>
                    More bookings from a single turf business can potentially
                    generate more earnings than a single subscription plan.
                  </p>
                </div>
              </div>
            </section>

            {/* 06. User Experience & Core Flow */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                06. User Experience & Core Flow
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Media will be added later with text in this section.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Customer Booking Flow
                </h3>
                <p>The customer starts by visiting the public turf profile.</p>
                <p>From there, the player can:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Select a field</li>
                  <li>Select one or more available slots</li>
                  <li>Continue to checkout</li>
                  <li>Review the booking</li>
                  <li>Apply a promo code if available</li>
                  <li>Select a payment option</li>
                  <li>Complete the booking</li>
                </ul>
                <p>Payment options include:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Full payment</li>
                  <li>Partial payment</li>
                  <li>Pay later, where applicable</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Owner / Manager Flow
                </h3>
                <p>
                  Owners and managers can manage bookings, fields, pricing,
                  customers, payments, and business information from their
                  dashboards.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  More screenshots and flow visuals will be added to this
                  section.
                </p>
              </div>
            </section>

            {/* 07. Technical Architecture */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                07. Technical Architecture
              </h2>
              <p>
                TurfTrack is a full-stack application built with Next.js for the
                frontend and Node.js with Express.js for the backend, using
                PostgreSQL as the database and Prisma as the ORM.
              </p>
              <p>
                I chose Next.js because I wanted to use React while also getting
                a faster user experience by using Next.js features such as
                Server-Side Rendering, Static Site Generation, and caching
                methods.
              </p>
              <p>
                For the backend, since I was already working with JavaScript on
                the frontend and wanted to continue using JavaScript across the
                stack, I went with Node.js and Express.js.
              </p>
              <p>
                For the database and ORM, I learned Prisma and found PostgreSQL
                to be a good fit for my SaaS.
              </p>
              <p>
                PostgreSQL is open source, continuously updated, and my schemas
                are based on different types of relationships. I am also
                tracking financial data, so I wanted a relational database that
                could handle these requirements properly.
              </p>
              <p>
                I also use Redis in the backend for faster API responses and
                other backend operations.
              </p>
              <p>For authentication, I use JWT authentication with cookies.</p>
              <p>
                Another important part of the project is payment integration.
              </p>
              <p>
                I use SSL Commerz as the payment gateway because it is one of
                the popular payment gateways in Bangladesh; many users are
                already familiar with it, and it has an established presence in
                the local market.
              </p>
            </section>

            {/* 08. Engineering Challenges */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                08. Engineering Challenges
              </h2>
              <p>
                There were several engineering challenges while building this
                application, such as role and business scope security in a
                multi-tenant SaaS, where one business role should not be able to
                see or access another business&apos;s assets.
              </p>
              <p>
                There were also challenges with the Next.js proxy setup for
                role-based authorization of frontend pages, rescheduling
                bookings, payment gateway integration, finance, and other parts
                of the system.
              </p>
              <p>
                Among all the engineering challenges, there are three that are
                worth mentioning in detail.
              </p>

              <div className="space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  1. Booking Process
                </h3>
                <p>
                  The player visits the turf profile, which is where the booking
                  process starts. The player selects a field and one or more
                  available slots, then clicks Checkout, which takes the player
                  to the Confirm Booking page.
                </p>
                <p>
                  This page shows the selected slot(s), an option to apply a
                  promo code or discount, and payment options such as Full,
                  Partial, or Pay Later. This is the final step of the booking
                  process.
                </p>
                <p>
                  Planning and building this process was quite a challenge for a
                  multi-tenant SaaS.
                </p>
                <p>
                  At first, I wrote down the process, looked at it, and asked
                  myself how I could make it secure while also providing a good
                  user experience.
                </p>
                <p>
                  I created a clean, step-by-step process that the player would
                  follow, which involved multiple APIs. I also made sure that
                  all the APIs were secure on the backend.
                </p>
                <p>
                  However, the most challenging part was making sure there was
                  no race condition while also giving the user enough time to
                  complete the booking on the second page.
                </p>
                <p className="font-semibold text-blue-600 dark:text-purple-400">
                  So I introduced a 5-minute timer lock. Within this time, the
                  user needs to complete the booking. If the timer expires, the
                  slot becomes available to all players again.
                </p>
                <p>I also had to handle edge cases.</p>
                <p>
                  For example, what happens if a user clicks the payment button
                  at the very end of the timer and goes to the payment gateway,
                  which also takes some time to complete?
                </p>
                <p>
                  If the slot becomes available immediately, another player
                  could potentially book the same slot while the first
                  user&apos;s payment is still being processed.
                </p>
                <p>
                  To handle this, I added an extra couple of minutes on the
                  backend to allow the payment to complete. This extra time is
                  only enabled when the user actually clicks the payment button.
                </p>
                <p>
                  Handling all these edge cases made the booking system more
                  reliable and able to handle users more efficiently.
                </p>
                <p>
                  Building this taught me that when a complex engineering task
                  comes up, I should first look at it from the top, break the
                  single problem into multiple smaller problems, design the flow
                  and problem-solving plan, and then look at the whole process
                  again to optimize it.
                </p>
                <p>
                  I learned to add or remove elements and keep reviewing the
                  process until I get an optimized, clean, efficient, and
                  effective solution.
                </p>
              </div>

              <div className="space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  2. Owner Verification with Business Verification
                </h3>
                <p>
                  When a new owner is onboarded with a business, both the owner
                  and business registration happen at the same time.
                </p>
                <p>There are three numbers to verify during onboarding:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Owner phone number</li>
                  <li>Business contact number</li>
                  <li>Business bKash number, if added</li>
                </ul>
                <p>
                  The challenge is that these numbers can have different
                  combinations.
                </p>
                <p>For example:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>All three can be the same number.</li>
                  <li>
                    The owner contact and business contact can be the same
                    number.
                  </li>
                  <li>
                    The owner contact and bKash number can be the same number.
                  </li>
                  <li>
                    The business contact and bKash number can be the same
                    number.
                  </li>
                  <li>Or all three can be unique numbers.</li>
                </ul>
                <p>
                  So, the verification process can involve up to three separate
                  numbers.
                </p>
                <p>
                  If any number is entered twice or three times, both the
                  frontend and backend should understand that the number has
                  already been verified.
                </p>
                <p>
                  The user should not be asked to verify the same number again
                  just because it was entered in another field, whether that
                  field is the business contact number or bKash number.
                </p>
                <p>
                  To implement this, I had to manage both the frontend React
                  state and the backend logic and database together.
                </p>
                <p>
                  I had to go through a rigorous process of implementing it and
                  fixing bugs again and again.
                </p>
                <p>
                  Now, it provides a much more seamless user experience during
                  the verification process.
                </p>
              </div>

              <div className="space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  3. Finance
                </h3>
                <p>
                  Finance includes the calculation of partial payment tiers,
                  platform fees, owner receivable amounts after all fee
                  deductions, debt management for owners, payment tracking, and
                  other financial operations.
                </p>
                <p>
                  The whole finance system was quite challenging and required a
                  very careful approach in the code to make sure all
                  calculations were accurate.
                </p>
                <p>
                  There was a lot of complexity because of the multi-tenant
                  architecture, multiple slot selections, and different prices
                  such as regular and special pricing.
                </p>
                <p>
                  It also involved platform fee management, rescheduled booking
                  payment management, payment options customized by the owner,
                  and payment gateway integration.
                </p>
                <p>
                  All of these required a very careful look at the code,
                  testing, and trial and error to make sure the financial states
                  and calculations worked correctly.
                </p>
                <p>
                  TurfTrack is not only a booking management application but
                  also a financial management application for turf businesses.
                </p>
                <p>
                  Working through this complex financial logic strengthened my
                  coding and problem-solving skills.
                </p>
              </div>
            </section>

            {/* 09. Authentication & Access Control */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                09. Authentication & Access Control
              </h2>
              <p>
                TurfTrack authentication is based on the mobile phone number
                used in Bangladesh.
              </p>
              <p>
                Users register using their phone number and password with OTP
                verification. They also use their phone number and password for
                login.
              </p>
              <p>
                JWT is used for authentication and authorization, and it is
                stored in cookies.
              </p>
              <p>
                Forgot Password and Update Password also use OTP verification.
              </p>
              <p>There is role-based access based on these roles:</p>
              <ul className="space-y-2 pl-2">
                <li className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[120px]">
                    Owner:
                  </strong>
                  <span>
                    Manages the business and everything related to it.
                  </span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[120px]">
                    Manager:
                  </strong>
                  <span>Manages assigned business fields and bookings.</span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[120px]">
                    Player:
                  </strong>
                  <span>Creates bookings and manages their own bookings.</span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[120px]">
                    Admin:
                  </strong>
                  <span>
                    Manages the application areas they are allowed to access.
                  </span>
                </li>
                <li className="flex gap-2">
                  <strong className="text-gray-900 dark:text-white min-w-[120px]">
                    Super Admin:
                  </strong>
                  <span>
                    Controls the whole application and has full access.
                  </span>
                </li>
              </ul>
              <p>
                Based on these roles, there are protected routes, so not
                everyone can access every route.
              </p>
              <p>
                For example, a player can create and manage bookings, while a
                turf owner can manage fields, pricing, business finances, and
                other business operations.
              </p>
            </section>

            {/* 10. MVP Outcome */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                10. MVP Outcome
              </h2>
              <p>
                TurfTrack MVP has automated the booking management of a turf
                business, automated financial management, and significantly
                reduced booking time for players.
              </p>
              <p>
                It also provides analytics to owners that could take hours to
                calculate manually.
              </p>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 dark:border-purple-400/20 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">
                  MVP Completed With
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "End-to-end customer booking",
                    "Turf business and field management",
                    "Dynamic pricing",
                    "Owner dashboard",
                    "Online payment integration",
                    "Finance tracking",
                    "Role-based access",
                    "120 API endpoints",
                    "23 database models",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 11. Lessons Learned */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                11. Lessons Learned
              </h2>
              <p>
                Building TurfTrack changed the way I think about full-stack
                development.
              </p>
              <p>
                The project taught me that building a real product is not only
                about connecting a frontend to an API. A lot of the difficulty
                comes from understanding the business rules, data relationships,
                user permissions, financial states, and how all of them work
                together.
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Business Logic Is Harder Than CRUD
                  </h3>
                  <p className="mt-1">
                    At the beginning, many features can look like normal CRUD
                    operations.
                  </p>
                  <p>
                    But once real business rules are added, the complexity
                    increases quickly.
                  </p>
                  <p>
                    For example, the booking system is not simply creating a
                    booking record. It involves slot availability, multiple
                    slots, different pricing, discounts, partial payments, full
                    payments, pay-later options, platform fees, owner
                    receivables, rescheduling, payment processing, and booking
                    expiration.
                  </p>
                  <p>The finance system also depends on many of these rules.</p>
                  <p>
                    This taught me to think more about the relationships between
                    business rules instead of treating every feature as an
                    isolated API or database operation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Complex Problems Should Be Broken Down Before Coding
                  </h3>
                  <p className="mt-1">
                    The booking system was one of the clearest examples of this.
                  </p>
                  <p>
                    Initially, booking looked like one feature, but it actually
                    contained many smaller problems such as slot availability,
                    temporary locking, payment timing, expiration, race
                    conditions, and edge cases.
                  </p>
                  <p>
                    I learned that when a problem becomes complicated, it is
                    better to step back and break it into smaller problems
                    before writing too much code.
                  </p>
                  <p>
                    After designing the smaller pieces, I can look at the whole
                    flow again and find places where I can simplify, remove
                    unnecessary steps, or improve the process.
                  </p>
                  <p>
                    This became an important way of thinking for me while
                    building TurfTrack.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Data Modeling Matters Early
                  </h3>
                  <p className="mt-1">
                    TurfTrack has many related entities, including users,
                    businesses, fields, pricing, bookings, payments, and
                    financial records.
                  </p>
                  <p>
                    Because the application is multi-tenant, these relationships
                    also affect who can access which data.
                  </p>
                  <p>
                    I learned that database design is not something that should
                    be treated separately from business logic.
                  </p>
                  <p>
                    The way data is structured directly affects how easily
                    features can be implemented, how secure the system can be,
                    and how complex the business logic becomes.
                  </p>
                  <p>
                    Understanding the relationships between the entities before
                    building the features helped me make better decisions later
                    in development.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Building a Real Product Requires Product Thinking
                  </h3>
                  <p className="mt-1">
                    One of the biggest lessons from TurfTrack was that technical
                    feasibility does not always mean a feature should be built
                    immediately.
                  </p>
                  <p>
                    I had to think about what users actually needed first and
                    what could be postponed.
                  </p>
                  <p>
                    The decision not to build a marketplace in the MVP was one
                    example.
                  </p>
                  <p>
                    Another was choosing a nominal fee per confirmed booking
                    instead of a subscription model.
                  </p>
                  <p>
                    These decisions were not only technical decisions. They were
                    based on how the product would be introduced to the market
                    and how it would provide value to turf owners.
                  </p>
                  <p>
                    This taught me that as a developer building a product, I
                    also need to think about the user, the business, and the
                    market, not only the code.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. What I&apos;d Improve */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                12. What I&apos;d Improve
              </h2>
              <p>
                TurfTrack is a complex SaaS application, and its MVP is not
                perfect or finished. It still needs continuous improvement.
              </p>
              <p>For now, the main areas of improvement are:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    i. UI/UX
                  </h3>
                  <p className="mt-1">
                    The current UI/UX is good enough for the MVP, but it still
                    needs improvement for a better user experience.
                  </p>
                  <p>
                    The goal is to make it more polished and give users a more
                    premium feeling when using the application.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-purple-400">
                    ii. Optimization
                  </h3>
                  <p className="mt-1">
                    There are many areas where both the frontend and backend can
                    be optimized.
                  </p>
                  <p>
                    The backend is built using Clean Architecture, but there are
                    still opportunities for further optimization.
                  </p>
                  <p>
                    The frontend, built with Next.js, also has many areas where
                    performance can be improved.
                  </p>
                  <p>
                    I have already implemented SSR, SSG, and reusable server
                    actions, but there is still more work to do around caching
                    and API call optimization.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. What&apos;s Next? */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                13. What&apos;s Next?
              </h2>
              <p className="font-semibold text-lg text-gray-900 dark:text-white">
                The Next Plan for TurfTrack at a Glance
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-2">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h3 className="font-semibold text-lg text-blue-600 dark:text-purple-400 mb-3">
                    Next
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Native mobile application</li>
                    <li>Multi-level discount</li>
                    <li>Add Multi-location turf business</li>
                    <li>Audit logs to see activity across all roles</li>
                  </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h3 className="font-semibold text-lg text-blue-600 dark:text-purple-400 mb-3">
                    Future
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Marketplace/discovery</li>
                    <li>Subscription system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 14. Final Reflection */}
            <section className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                14. Final Reflection
              </h2>
              <blockquote className="italic text-lg sm:text-xl border-l-4 border-blue-600 dark:border-purple-400 pl-4 py-2 my-4 text-gray-700 dark:text-gray-300">
                &quot;Building TurfTrack taught me that the hardest part of a
                full-stack product is not connecting a frontend to an API. The
                real challenge is keeping business rules, financial states, user
                permissions, and data relationships consistent as the product
                becomes more complex.&quot;
              </blockquote>
            </section>
          </div>

          {/* Footer Back Link */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-purple-400 hover:underline"
            >
              ← Back to home
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default TurfTrackCaseStudy;
