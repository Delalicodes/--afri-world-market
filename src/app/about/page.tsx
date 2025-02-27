import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/image3.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-4">
            <Navbar />
            <div className="h-full flex flex-col justify-center items-center text-center pt-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AFRI SMEs CONNECT AND FAST GROWTH
              </h1>
              <p className="text-xl text-white max-w-2xl">
                Connecting African SMEs with Global Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 bg-blue-100/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About AFRI WORLD MARKET</h2>
            <p className="text-lg text-gray-700 mb-6">
              AFRI WORLD MARKET is a dynamic Local and International Market platform that serves as a bridge between African SMEs and Global Companies, Institutions, and Buyers.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to foster Growth and Sustainability through various business initiatives including Trade and Exhibitions, Forums, Conferences, and Business Meetings.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/three-business-women.jpg"
              alt="Business professionals collaborating"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/icons/handshake-icon.svg"
                alt="Business Meetings"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Business Meetings</h3>
            <p className="text-gray-600">
              Facilitating meaningful connections between African SMEs and global partners
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/icons/globe-icon.svg"
                alt="Global Trade"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trade & Exhibitions</h3>
            <p className="text-gray-600">
              Showcasing African businesses to the global market through strategic exhibitions
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/icons/users-icon.svg"
                alt="Forums & Conferences"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Forums & Conferences</h3>
            <p className="text-gray-600">
              Creating platforms for knowledge exchange and networking opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}