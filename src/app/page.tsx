'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero-background.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(to bottom right, rgba(254, 243, 199, 0.9), rgba(255, 237, 213, 0.9))',
        }}
      />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold">Afri World Market</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-orange-600 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Exhibitor</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Visitor</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Register Now
            </button>
          </header>

          <main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                8th International Business Forum
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                B2B Meetings Program
              </h2>
              <div className="flex justify-center items-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">🌍</span>
                  <span>54 COUNTRIES</span>
                </div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">📍</span>
                  <span>ADDIS ABABA, ETHIOPIA</span>
                </div>
              </div>

              <CountdownTimer targetDate="2025-12-04" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-700 transition-colors mt-12"
              >
                Register Now
              </motion.button>
            </motion.div>

            <section className="py-20">
              <h2 className="text-3xl font-bold text-center mb-12">Forum Motto: Grow with Africa!</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    The Afri World Market Forum, an international business event, will take place in
                    Addis Ababa, Ethiopia, from December 4-5, 2025. This forum aims to
                    connect future business leaders from various African countries with direct
                    manufacturing companies in Africa.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    African business representatives will have the opportunity to discover high-quality
                    products at competitive prices, available at the right time. Participants will
                    engage directly with producers, eliminating intermediaries.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/business-meeting.jpg"
                    alt="Business Meeting"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
