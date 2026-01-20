
import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-charcoal">
      <Navigation scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="bg-deepGray py-24">
          <About />
        </section>
        <section id="experience" className="bg-charcoal py-24">
          <Experience />
        </section>
        <section id="services" className="bg-deepGray py-24">
          <Services />
        </section>
        <section id="work" className="bg-charcoal py-24">
          <Portfolio />
        </section>
        <section id="publications" className="bg-deepGray py-24">
          <Publications />
        </section>
        <section id="contact" className="bg-charcoal py-24 border-t border-white/5">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
