'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative h-[100svh]">
        <ImageCarousel />
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/70 via-amber-950/60 to-orange-900/50">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-amber-950/40" />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
            <header className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-0">Afri World Market</div>
              <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center w-full md:w-auto bg-black/30 md:bg-transparent p-3 md:p-0 rounded-lg">
                <a href="#" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Home</a>
                <a href="#" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Exhibitor</a>
                <a href="#" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Visitor</a>
                <a href="#" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Contact</a>
              </nav>
            </header>
            <div className="text-center py-8 sm:py-16 md:py-20 px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                  8th International Business Forum
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  B2B Meetings Program
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full w-full sm:w-auto">
                    <span className="text-orange-500 text-xl sm:text-2xl">🌍</span>
                    <span className="text-sm sm:text-base md:text-lg font-medium">54 COUNTRIES</span>
                  </div>
                  <div className="hidden sm:block w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full w-full sm:w-auto">
                    <span className="text-orange-500 text-xl sm:text-2xl">📍</span>
                    <span className="text-sm sm:text-base md:text-lg font-medium break-words">ADDIS ABABA, ETHIOPIA</span>
                  </div>
                </div>
                <div className="mt-8">
                  <CountdownTimer targetDate="2025-12-04T00:00:00" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-gradient-to-b from-amber-50/40 via-amber-50/40 to-amber-100/50 dark:from-amber-950/20 dark:via-amber-950/20 dark:to-amber-950/30 py-12 sm:py-24 md:py-32 mt-4 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-3 sm:px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-16 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Forum Motto: Grow with Africa!
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                The Afri World Market Forum, an international business event, will take place in
                Addis Ababa, Ethiopia, from December 4-5, 2025. This forum aims to
                connect future business leaders from various African countries with direct
                manufacturing companies in Africa.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                African business representatives will have the opportunity to discover high-quality
                products at competitive prices, available at the right time. Participants will
                engage directly with producers, eliminating intermediaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
                <div className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg flex-1">
                  <span className="text-xl sm:text-2xl md:text-3xl">🤝</span>
                  <div>
                    <div className="font-bold text-orange-600 text-sm sm:text-base">Direct Access</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">to Manufacturers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg flex-1">
                  <span className="text-xl sm:text-2xl md:text-3xl">💎</span>
                  <div>
                    <div className="font-bold text-orange-600 text-sm sm:text-base">Quality Products</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Competitive Prices</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[180px] sm:h-[250px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
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

      <section className="w-full bg-white py-8 sm:py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-3 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-10 md:mb-16 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-64 mb-4 sm:mb-6 md:mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/image5.jpg"
                  alt="Success Story 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 dark:text-white leading-tight">Eternity Logistics Success</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">Achieved remarkable growth through strategic partnerships and expanded operations across multiple African countries.</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium w-full text-center">
                Read More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-64 mb-4 sm:mb-6 md:mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/image7.jpg"
                  alt="Success Story 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 dark:text-white leading-tight">$2M Export Achievement</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">Successfully facilitated exports worth $2 million to African countries through strategic B2B connections.</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium w-full text-center">
                Read More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-64 mb-4 sm:mb-6 md:mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/image8.webp"
                  alt="Success Story 3"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 dark:text-white leading-tight">$160K Trade Success</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">Established successful trade partnerships resulting in transactions worth $160,000 through the forum.</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium w-full text-center">
                Read More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
