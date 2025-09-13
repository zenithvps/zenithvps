import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Guarantee } from './components/sections/Guarantee';
import { RegionList } from './components/sections/RegionList';
import { Pricing } from './components/sections/Pricing';
import { Rules } from './components/sections/Rules';
import { AvailableOS } from './components/sections/AvailableOS';
import { Support } from './components/sections/Support';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Guarantee />
        <RegionList />
        <Pricing />
        <Rules />
        <AvailableOS />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;