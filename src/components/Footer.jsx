 import React from 'react';
// import { Instagram, Linkedin } from 'lucide-react'; // Social Icons

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Branding & Connect */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-3xl font-bold tracking-tighter text-white">Van <span className="font-light text-stone-300">Vaatika</span></span>
          <p className="text-sm text-stone-400 font-light max-w-sm">Designing landscapes where plants, water, and wildlife live in perfect harmony. Serving Ahmedabad and surrounding regions.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition">
                {/* <Instagram className="w-5 h-5" /> */}
            Instagram</a>
            <a href="#" className="hover:text-white transition">
                {/* <Linkedin className="w-5 h-5" /> */}
                Linkedin</a>
          </div>
        </div>

        {/* Studio Info */}
        <div className="space-y-2 text-sm font-light">
          <h5 className="font-semibold text-white mb-3">Our Studio</h5>
          <p>Ahmedabad, Gujarat</p>
          <p>hello@vanvaatika.in</p>
          <p>+91 98765 43210</p>
        </div>

        {/* Simple Newsletter */}
        <div className="space-y-4">
          <h5 className="font-semibold text-white mb-3">Join the Wild Side</h5>
          <p className="text-sm text-stone-400 font-light">Subscribe for modern landscaping ideas and tips on attracting local wildlife.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email..." className="grow text-sm bg-emerald-900 border border-emerald-800 px-4 py-2 rounded-full focus:ring-1 focus:ring-emerald-600 outline-none" />
            <button className="bg-emerald-700 text-white text-sm px-5 py-2 rounded-full font-medium hover:bg-emerald-600 transition">Submit</button>
          </div>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-emerald-900 text-center text-xs text-stone-500 font-light">
        © 2024 Van Vaatika Landscape Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;