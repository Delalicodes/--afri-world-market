'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute w-full z-10 text-white">
          <Navbar />
        </div>
        <Image
          src="/image3.jpg"
          alt="Services Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-blue-800 sm:text-white sm:mt-0 mt-[650px]">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl text-center">
            Empowering businesses to thrive in African markets through comprehensive solutions
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 mt-48 sm:mt-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/icons/calendar-icon.svg"
                  alt="Trade Events"
                  width={48}
                  height={48}
                  className=""
                />
                <span className="px-3 py-1 text-sm font-semibold text-purple-800 bg-purple-100 rounded-full">Events</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Trade Exhibitions & Conferences</h2>
              <p className="text-gray-700 leading-relaxed">
                Local and international trade exhibitions, conferences, and business forums connecting African SMEs to global opportunities.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/icons/handshake-icon.svg"
                  alt="Business Consulting"
                  width={48}
                  height={48}
                  className=""
                />
                <span className="px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">Consulting</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Business Consulting</h2>
              <p className="text-gray-700 leading-relaxed">
                Strategic guidance and market insights to help businesses navigate African markets successfully.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/icons/factory-icon.svg"
                  alt="Manufacturing"
                  width={48}
                  height={48}
                  className=""
                />
                <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">Manufacturing</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Manufacturing Solutions</h2>
              <p className="text-gray-700 leading-relaxed">
                End-to-end manufacturing support and quality control services for businesses operating in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/icons/vision-icon.svg"
                  alt="Vision"
                  width={64}
                  height={64}
                  className=""
                />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading facilitator of business growth and innovation in African markets, creating sustainable value for our clients and communities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/icons/globe-icon.svg"
                  alt="Mission"
                  width={64}
                  height={64}
                  className=""
                />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide comprehensive business solutions that empower organizations to succeed in African markets through innovative strategies, local expertise, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}