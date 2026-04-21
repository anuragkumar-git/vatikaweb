import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemGrid from './components/EcosystemGrid';
import PortfolioPreview from './components/PortfolioPreview';
import Footer from './components/Footer';

// A placeholder global CSS to simulate modern aesthetics.
// In a real app, this would be your index.css with Tailwind imports.
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans antialiased">
      <Header />
      
      <main>
        <Hero />
        
        {/* Living Elements Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extralight text-neutral-800 tracking-tight text-center mb-16">
              Design the Elements of <span className="font-semibold text-emerald-800">Life</span>
            </h2>
            <EcosystemGrid />
          </div>
        </section>

        {/* Portfolio Preview */}
        <PortfolioPreview />
        
        {/* Placeholder: Our Process / Timeline Section */}
        <section className="py-24 bg-stone-100 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-extralight mb-6">Your Sanctuary, Step-by-Step</h2>
            <p className="text-stone-600 mb-12 max-w-2xl mx-auto">From discovery to installation, we guide you through the seamless integration of water, flora, and wildlife.</p>
            {/* Replace this with a robust step-by-step graphic/component later */}
            <div className="grid grid-cols-4 gap-4 p-8 bg-white shadow-sm rounded-xl">
               <div className="border p-4 rounded-lg">1. Discovery</div>
               <div className="border p-4 rounded-lg">2. Eco-Mapping</div>
               <div className="border p-4 rounded-lg">3. Installation</div>
               <div className="border p-4 rounded-lg">4. Flourish</div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;