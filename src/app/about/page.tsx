import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="/image3.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-6 md:py-4">
            <Navbar />
            <div className="h-full flex flex-col justify-center items-center text-center pt-8 pb-16 md:pt-16">
              <h1 className="text-2xl md:text-5xl font-bold text-blue-900 md:text-white mb-4 px-4 leading-tight ">
                AFRI SMEs CONNECT AND FAST GROWTH
              </h1>
              <p className="text-base md:text-xl text-blue-900 md:text-white max-w-2xl px-4 leading-relaxed">
                Connecting African SMEs with Global Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-100/50">
        <div className="container mx-auto px-4 py-8 md:py-16 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16 mt-72 md:mt-0">
            <div className="space-y-4 md:space-y-6 md:mt-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                About AFRI WORLD MARKET
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                AFRI WORLD MARKET is a dynamic Local and International Market platform that serves as a bridge between African SMEs and Global Companies, Institutions, and Buyers.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our mission is to foster Growth and Sustainability through various business initiatives including Trade and Exhibitions, Forums, Conferences, and Business Meetings.
              </p>
            </div>
            <div className="relative h-[250px] md:h-[400px] mt-6 md:mt-0">
              <Image
                src="/three-business-women.jpg"
                alt="Business professionals collaborating"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 md:mb-6">
                <Image
                  src="/icons/handshake-icon.svg"
                  alt="Business Meetings"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">Business Meetings</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We facilitate meaningful connections between African SMEs and global partners through structured business meetings and networking events. Our platform enables direct engagement and collaboration opportunities.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 md:mb-6">
                <Image
                  src="/icons/globe-icon.svg"
                  alt="Global Trade"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">Trade & Exhibitions</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Our trade exhibitions showcase the best of African businesses to the global market. We create platforms for SMEs to display their products, services, and innovations to international buyers and investors.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 md:mb-6">
                <Image
                  src="/icons/users-icon.svg"
                  alt="Forums & Conferences"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">Forums & Conferences</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We organize dynamic forums and conferences that bring together industry leaders, experts, and entrepreneurs. These events foster knowledge exchange, skill development, and valuable networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="AFRI WORLD MARKET Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-300 text-sm md:text-base">
                AFRI WORLD MARKET connects African SMEs with global opportunities, fostering growth and sustainable business relationships.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg md:text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm md:text-base text-gray-300">
                <p>Email: info@afriworldmarket.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Business Avenue, Africa</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-300">
            <p>&copy; {new Date().getFullYear()} AFRI WORLD MARKET. All rights reserved.</p>
            <p className="mt-2">Powered by IMTGHANA</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}