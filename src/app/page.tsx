'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faGem } from '@fortawesome/free-solid-svg-icons';

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
            <Navbar />
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
                    <Image
                      src="/icons/globe-icon.svg"
                      alt="Globe Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 text-orange-500"
                    />
                    <span className="text-sm sm:text-base md:text-lg font-medium">54 COUNTRIES</span>
                  </div>
                  <div className="hidden sm:block w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full w-full sm:w-auto">
                    <Image
                      src="/icons/globe-icon.svg"
                      alt="Location Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 text-orange-500"
                    />
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
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500"
                  />
                  <div>
                    <div className="font-bold text-orange-600 text-sm sm:text-base">Direct Access</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">to Manufacturers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg flex-1">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500"
                  />
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

      <section className="w-full relative py-12 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image10.jpg"
            alt="Forum Statistics Background"
            fill
            className="object-cover filter brightness-50"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-amber-950/80 to-black/90 backdrop-blur-sm"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container relative z-10 mx-auto px-3 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-24 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight">
            Forum Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/globe-icon.svg"
                  alt="Globe Icon"
                  fill
                  className="[&>path]:fill-current text-gradient-to-r from-amber-400 to-orange-400"
                />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">54</div>
              <div className="text-base sm:text-lg font-medium text-amber-100 group-hover:text-amber-50 transition-colors duration-300">Countries</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/factory-icon.svg"
                  alt="Factory Icon"
                  fill
                  className="[&>path]:fill-current text-gradient-to-r from-amber-400 to-orange-400"
                />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">300</div>
              <div className="text-base sm:text-lg font-medium text-amber-100 group-hover:text-amber-50 transition-colors duration-300">Turkish Manufacturers</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/users-icon.svg"
                  alt="Users Icon"
                  fill
                  className="[&>path]:fill-current text-gradient-to-r from-amber-400 to-orange-400"
                />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">1500</div>
              <div className="text-base sm:text-lg font-medium text-amber-100 group-hover:text-amber-50 transition-colors duration-300">Visitors</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/calendar-icon.svg"
                  alt="Calendar Icon"
                  fill
                  className="[&>path]:fill-current text-gradient-to-r from-amber-400 to-orange-400"
                />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">2</div>
              <div className="text-base sm:text-lg font-medium text-amber-100 group-hover:text-amber-50 transition-colors duration-300">Days</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-white dark:bg-gray-900 py-12 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-3 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight">
            Photo Album
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 md:mb-24 text-base sm:text-lg max-w-3xl mx-auto">
            Explore moments from our previous forums where business leaders from around Africa came together to forge lasting partnerships
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/image3.jpg"
                alt="WCI FORUM 11"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold">WCI FORUM 11</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/image4.webp"
                alt="WCI FORUM 10"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold">WCI FORUM 10</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/image2.webp"
                alt="WCI FORUM 9"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold">WCI FORUM 9</h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">LATEST</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Announcements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/image.png" alt="Announcement 1" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Forum Registration Now Open</h4>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">Read More</button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/three-business-women.jpg" alt="Announcement 2" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Early Bird Registration Discount Available</h4>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">Read More</button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/image10.jpg" alt="Announcement 3" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">New Exhibitors Confirmed for 2025</h4>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">Read More</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">All Announcements</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">REGISTRATION FORM</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">To participate in the World Cooperation Industries Forum, please fill the form.</p>
            <form className="space-y-6">
              <select className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option>Turkish Exhibitor</option>
              </select>
              <input type="text" placeholder="Full name" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <input type="text" placeholder="Company name" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <input type="text" placeholder="Country" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <input type="email" placeholder="Email address" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <textarea placeholder="Additional Message" rows={4} className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
              <input type="text" placeholder="Industry" className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors font-semibold">Register Now</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Image src="/logo.png" alt="Afri World Market Logo" width={150} height={50} className="mb-4" priority />
              <p className="text-gray-400">The aim of this organization is to meet Turkish manufacturers and foreign importers. We&apos;re a non-profit business organization.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Wci Forum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Exhibitor Profile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Visitor Profile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sponsorship Details</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Organizer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="far fa-clock text-orange-500"></i>
                  <span className="text-gray-400">Mon - Fri 08:00 - 18:00</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-phone text-orange-500"></i>
                  <span className="text-gray-400">+90 542 511 21 48</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-phone text-orange-500"></i>
                  <span className="text-gray-400">+90 216 344 42 24</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-envelope text-orange-500"></i>
                  <span className="text-gray-400">info@wciforum.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-envelope text-orange-500"></i>
                  <span className="text-gray-400">visitor@wciforum.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Wci Forum</h3>
              <p className="text-gray-400">İçerenköy Mahallesi, Doğrucan Sk. No:25 Özdemir Çoğulcan İş Merkezi Ataşehir/İstanbul</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© İlosophorus Expo - İloğoşlu İthalat İhracat Ltd. Şti WCI FORUM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
