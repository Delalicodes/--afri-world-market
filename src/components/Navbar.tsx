'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 bg-blue-900/30 px-6 py-4">
      <div className="flex items-center mb-4 md:mb-0">
        <Image
          src="/logo.png"
          alt="Afri World Market Logo"
          width={150}
          height={50}
          className="object-contain"
          priority
        />
      </div>
      <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center justify-center w-full md:w-auto p-3 md:p-0 rounded-lg">
        <Link href="/" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Home</Link>
        <Link href="/about" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">About us</Link>
        <Link href="/leadership" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Leadership</Link>
        <Link href="/events" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Events</Link>
        <Link href="#" className="hover:text-orange-500 transition-colors w-full md:w-auto text-center py-2 md:py-0 text-base sm:text-lg">Contact</Link>
      </nav>
    </header>
  );
}