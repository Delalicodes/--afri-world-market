'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/CountdownTimer";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0 z-0 overflow-hidden h-full">
          <Image
            src="/image.png"
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
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
          }}
        />
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-8">
            <header className="flex justify-between items-center mb-12">
              <div className="text-2xl font-bold text-white">Afri World Market</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-orange-600 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-orange-600 transition-colors">Exhibitor</a>
                <a href="#" className="text-white hover:text-orange-600 transition-colors">Visitor</a>
                <a href="#" className="text-white hover:text-orange-600 transition-colors">Contact</a>
              </nav>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                Register Now
              </button>
            </header>

            <div className="py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                  8th International Business Forum
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-200 mb-8 drop-shadow-md">
                  B2B Meetings Program
                </h2>
                <div className="flex justify-center items-center gap-4 mb-12">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🌍</span>
                    <span className="text-white font-medium">54 COUNTRIES</span>
                  </div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">📍</span>
                    <span className="text-white font-medium">ADDIS ABABA, ETHIOPIA</span>
                  </div>
                </div>

                <CountdownTimer targetDate="2025-12-04" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-white w-full py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">Forum Motto: <span className="text-orange-600 block mt-2">Grow with Africa!</span></h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                The Afri World Market Forum, an international business event, will take place in
                Addis Ababa, Ethiopia, from December 4-5, 2025. This forum aims to
                connect future business leaders from various African countries with direct
                manufacturing companies in Africa.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                African business representatives will have the opportunity to discover high-quality
                products at competitive prices, available at the right time. Participants will
                engage directly with producers, eliminating intermediaries.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-orange-700 transition-colors mt-8 w-full md:w-auto shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src="/three-business-women.jpg"
                alt="Business Meeting"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
