import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ClientSwapper from './components/ClientSwapper';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

const AppContent = () => {
  return (
    <Layout>
      <Hero />
      {/* Client Swapping Grid - Placed immediately after Hero */}
      <ClientSwapper />
      
      <Stats />
      
      {/* About Section with "Read More" interaction */}
      <About />

      <Services />
      <Projects />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;