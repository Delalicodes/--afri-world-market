'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative h-screen">
        <ImageCarousel />
        <div
          className="absolute inset-0 z-1 bg-gradient-to-br from-black/60 via-amber-950/50 to-orange-900/40"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-amber-950/30" />
        </div>
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
            </header>

            <div className="text-center py-20">
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-gradient-to-b from-amber-50/40 via-amber-50/40 to-amber-100/50 dark:from-amber-950/20 dark:via-amber-950/20 dark:to-amber-950/30 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Forum Motto: Grow with Africa!
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                The Afri World Market Forum, an international business event, will take place in
                Addis Ababa, Ethiopia, from December 4-5, 2025. This forum aims to
                connect future business leaders from various African countries with direct
                manufacturing companies in Africa.
              </p>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                African business representatives will have the opportunity to discover high-quality
                products at competitive prices, available at the right time. Participants will
                engage directly with producers, eliminating intermediaries.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <div className="font-bold text-orange-600">Direct Access</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">to Manufacturers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <span className="text-3xl">💎</span>
                  <div>
                    <div className="font-bold text-orange-600">Quality Products</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Competitive Prices</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            >
              <Image
                src="/three-business-women.jpg"
                alt="Business Meeting"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
