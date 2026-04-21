 import React from 'react';
import { Leaf } from 'lucide-react'; // Using Lucide for minimalist icons

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Modern, minimalist logo area */}
        <div className="flex items-center gap-2">
          <Leaf className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />
          <span className="text-2xl font-bold tracking-tighter text-neutral-900">
            Van <span className="font-light text-neutral-600">Vaatika</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <a href="#" className="hover:text-emerald-800 transition">Our Gardens</a>
          <a href="#" className="hover:text-emerald-800 transition">Living Elements</a>
          <a href="#" className="hover:text-emerald-800 transition">Story</a>
          <a href="#" className="hover:text-emerald-800 transition">Journal</a>
        </div>

        {/* Sticky CTA */}
        <button className="bg-neutral-900 text-white text-sm px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition-colors duration-300 shadow-sm">
          Book a Consultation
        </button>
      </nav>
    </header>
  );
};

export default Header;