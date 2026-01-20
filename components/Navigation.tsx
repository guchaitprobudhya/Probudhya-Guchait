
import React, { useState, useEffect } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#work', id: 'work' },
    { name: 'Journalism', href: '#publications', id: 'publications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav 
        className={`transition-all duration-500 ${
          scrolled || mobileMenuOpen ? 'bg-charcoal/95 backdrop-blur-lg py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-electricGreen flex items-center justify-center font-headline text-charcoal text-xl transform -rotate-12 group-hover:rotate-0 transition-transform">
              P
            </div>
            <span className="text-xl font-headline tracking-tighter transition-colors group-hover:text-electricGreen text-offwhite">
              PROBUDHYA <span className="text-electricGreen group-hover:text-offwhite">GUCHAIT</span>
            </span>
          </a>
          
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all relative group/link ${
                  activeSection === item.id ? 'text-electricGreen' : 'text-offwhite/70 hover:text-electricGreen'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-electricGreen transition-all ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover/link:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-offwhite/60">Live Portfolio</span>
            </div>
            <button onClick={toggleMenu} className="md:hidden text-electricGreen p-2 focus:outline-none" aria-label="Toggle Menu">
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-charcoal border-b border-white/10 flex flex-col items-center py-10 gap-6 animate-fadeIn shadow-2xl">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xl font-headline tracking-[0.2em] uppercase transition-colors ${
                  activeSection === item.id ? 'text-electricGreen' : 'text-offwhite hover:text-electricGreen'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
