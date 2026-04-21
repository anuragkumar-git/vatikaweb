 import React from 'react';
import { Bird, Zap, Droplets, Flower2 } from 'lucide-react'; // Example wildlife icons

const elements = [
  {
    icon: Bird,
    title: 'Avian Sanctuaries',
    description: 'Designing diverse habitats that offer shelter, food, and water for native bird species.',
  },
  {
    icon: Zap, // Using Zap as a temporary icon for butterflies/pollinators
    title: 'Butterfly Havens',
    description: 'Creating host and nectar gardens to attract and sustain local butterfly populations.',
  },
  {
    icon: Droplets,
    title: 'Aquatic Harmony',
    description: 'Custom koi ponds and natural filtration systems that become thriving aquatic ecosystems.',
  },
  {
    icon: Flower2,
    title: 'Sustainable Greens',
    description: 'Utilizing native flora to create self-sustaining landscapes with minimal water impact.',
  },
];

const EcosystemGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {elements.map((item, index) => (
        <div key={index} className="bg-stone-100/50 p-8 rounded-2xl border border-stone-200 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6 p-4 bg-emerald-100 rounded-full text-emerald-800 transition-colors group-hover:bg-emerald-800 group-hover:text-white">
            <item.icon className="w-10 h-10" strokeWidth={1} />
          </div>
          <h3 className="text-2xl font-light text-neutral-900 tracking-tight mb-4">{item.title}</h3>
          <p className="text-stone-600 font-light text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EcosystemGrid;