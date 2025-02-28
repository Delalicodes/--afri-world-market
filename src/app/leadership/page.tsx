'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

interface LeadershipProfile {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const leadershipTeam: LeadershipProfile[] = [
  {
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in international trade and African markets, Sarah leads our strategic vision and global expansion efforts.',
    image: '/image.png'
  },
  {
    name: 'David Okonjo',
    position: 'Chief Operations Officer',
    bio: 'David brings extensive expertise in supply chain management and has been instrumental in establishing our pan-African distribution network.',
    image: '/image2.webp'
  },
  {
    name: 'Amara Diallo',
    position: 'Chief Marketing Officer',
    bio: 'Amara\'s innovative marketing strategies have helped position Afri World Market as a leading platform for African commerce.',
    image: '/image3.jpg'
  }
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/three-business-women.jpg"
          alt="Leadership Team"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 backdrop-blur-sm">
          <Navbar />
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold sm:text-white text-blue-800 text-center tracking-tight mb-60">
              Our Leadership Team
            </h1>
          </div>
        </div>
      </div>

      {/* Leadership Profiles Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-36 sm:mt-0">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Dedicated professionals driving innovation and growth in African commerce
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              className="flex flex-col items-center bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-indigo-200"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-lg font-medium text-indigo-600">{leader.position}</p>
                <p className="mt-4 text-base text-gray-500">{leader.bio}</p>
              </div>
            </div>
          ))};
        </div>

        {/* Vision Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Our leadership team is committed to bridging the gap between African markets and global commerce. 
            We strive to create sustainable partnerships and empower local businesses while delivering 
            exceptional value to our customers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}