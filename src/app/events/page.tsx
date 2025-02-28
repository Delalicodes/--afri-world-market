'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CountdownTimer from '@/components/CountdownTimer';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isUpcoming: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: 'African Trade Summit 2024',
    date: '2024-03-15',
    time: '09:00 AM',
    location: 'Virtual Event',
    description: 'Join industry leaders for our annual trade summit focusing on emerging opportunities in African markets.',
    image: '/image4.webp',
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Cultural Marketplace Exhibition',
    date: '2024-04-20',
    time: '10:00 AM',
    location: 'London Exhibition Center',
    description: 'Experience the vibrant culture of Africa through our curated marketplace featuring artisans and traders.',
    image: '/image5.jpg',
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Digital Commerce Workshop',
    date: '2024-02-10',
    time: '02:00 PM',
    location: 'Online Webinar',
    description: 'Learn about the latest digital tools and strategies for expanding your business in African markets.',
    image: '/image7.jpg',
    isUpcoming: false
  },
  {
    id: 4,
    title: 'Sustainable Trade Conference',
    date: '2024-01-25',
    time: '11:00 AM',
    location: 'Paris Convention Center',
    description: 'Exploring sustainable practices in African trade and commerce.',
    image: '/image8.webp',
    isUpcoming: false
  }
];

export default function EventsPage() {
  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/image10.jpg"
          alt="Events Banner"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 backdrop-blur-sm">
          <Navbar />
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-800 md:text-white text-center tracking-tight mb-52">
              Our Events
            </h1>
          </div>
        </div>
      </div>

      <section className="w-full bg-blue-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-xl text-gray-500">Join us at our upcoming events and be part of the African trade revolution</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <CountdownTimer targetDate={event.date} />
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Image
                        src="/icons/calendar-icon.svg"
                        alt="Calendar"
                        width={20}
                        height={20}
                      />
                      <span className="ml-2">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{event.location}</span>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="w-full bg-blue-200/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Past Events</h2>
            <p className="mt-4 text-xl text-gray-500">Revisit our previous events and their highlights</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                    <span className="text-gray-500">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}