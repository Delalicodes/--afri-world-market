'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Afri World Market Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            <p className="text-sm">
              Connecting Africa to the world through innovative trade solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/leadership" className="hover:text-orange-500 transition-colors">Leadership</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: westafricabusiness23@gmail.com</li>
              <li>Phone: 00 233 594 1687</li>
              <li>Address: 123 Market Street,<br />Suite 456, Accra, Ghana</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Afri World Market. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Powered by IMTGHANA</p>
        </div>
      </div>
    </footer>
  );
}