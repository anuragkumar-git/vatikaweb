import React from 'react';

// Placeholders for your high-quality project images
const projects = [
  { img: 'https://images.unsplash.com/photo-1590010932884-2563bb70d440?q=80&w=600', title: 'The Butterfly Terrace', location: 'Gandhinagar' },
  { img: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=600', title: 'Avian Haven Garden', location: 'Ahmedabad' },
  { img: 'https://images.unsplash.com/photo-1617191139423-f27303f9012c?q=80&w=600', title: 'Modern Aquatic Koi Pond', location: 'Sanand' },
  { img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600', title: 'Native Flora Restoration', location: 'Ahmedabad' },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extralight text-center mb-16 tracking-tight">Our Living <span className="font-semibold text-emerald-800">Portfolio</span></h2>
        
        {/* Simplistic 2x2 grid preview - replace with masonry library later */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl aspect-4/3 shadow-lg">
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-semibold text-white tracking-tight">{project.title}</h4>
                <p className="text-stone-200 font-light text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="text-sm font-semibold border border-neutral-300 text-neutral-800 px-8 py-3 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;