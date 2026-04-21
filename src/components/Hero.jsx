import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-emerald-950 overflow-hidden">
      {/* Background Image / Placeholder for video */}
      <img
        src="https://images.unsplash.com/photo-1584470120150-13f9c67534f3?q=80&w=2000" // Replace with a motion background later
        alt="Lush green garden with water feature"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 blur-[2px]"
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tighter leading-tight mb-6">
          We Design Living, <br />
          <span className="font-semibold text-emerald-100">Breathing</span> Sanctuaries.
        </h1>
        <p className="text-lg md:text-xl text-stone-100/90 font-light mb-12 max-w-2xl mx-auto">
          Crafting modern landscapes that harmonize vibrant plants, visiting birds, fluttery butterflies, and aquatic life. Ahmedabad's eco-conscious design studio.
        </p>
        <button className="bg-white text-neutral-950 px-10 py-4 rounded-full font-bold text-base hover:bg-stone-100 transition shadow-lg flex items-center gap-2 mx-auto">
          Explore Our Living Projects →
        </button>
      </div>
    </section>
  );
};

export default Hero;