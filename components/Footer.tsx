
import React from 'react';

export const Footer: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/probudhya-guchait-584b8095/' },
    { name: 'X (Twitter)', href: 'https://x.com/Probudhya13' },
    { name: 'Instagram', href: 'https://www.instagram.com/Probudhya13' },
    { name: 'Facebook', href: 'https://www.facebook.com/Probudhya13' },
    { name: 'YouTube', href: 'https://www.youtube.com/@MBFT89' },
  ];

  const quickLinks = [
    { name: 'MBFT Transfers', href: 'https://www.mbft.in/search/label/Transfers' },
    { name: 'MBFT Classics', href: 'https://www.youtube.com/playlist?list=PLgb1QutFip2ThZudzNSkESQbkm75vlnld' },
    { name: 'Transfer Secrets', href: 'https://www.youtube.com/playlist?list=PLgb1QutFip2RThjIdcEBw7JX-82T-gnJi' },
  ];

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <img 
              src="https://i.ibb.co/hRVPZdFB/56a2f521-ff0f-4e1b-8e84-6d2c74b5fe2a.jpg" 
              alt="Probudhya Guchait Signature" 
              className="h-16 w-auto mb-6 opacity-90 transition-opacity hover:opacity-100"
              style={{ 
                filter: 'invert(1) contrast(1.2) brightness(1.2)',
                mixBlendMode: 'lighten'
              }}
            />
            <p className="text-offwhite/40 text-sm max-w-xs leading-relaxed">
              Elevating sports media through technical excellence and authoritative storytelling. Based in Kolkata, India.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-electricGreen mb-6">Social Networks</h4>
            <div className="flex flex-col gap-4">
              {socials.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-electricGreen mb-6">Quick Assets</h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-electricGreen mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={(e) => scrollToId(e, 'home')} className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit cursor-pointer">Top of Page</a>
              <a href="#work" onClick={(e) => scrollToId(e, 'work')} className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit cursor-pointer">Portfolio</a>
              <a href="#publications" onClick={(e) => scrollToId(e, 'publications')} className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit cursor-pointer uppercase">Journalism</a>
              <a href="#about" onClick={(e) => scrollToId(e, 'about')} className="text-[10px] uppercase font-bold tracking-[0.2em] text-offwhite/50 hover:text-electricGreen transition-colors w-fit cursor-pointer">Biography</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-offwhite/30 uppercase tracking-widest font-bold text-center md:text-left">
            &copy; {new Date().getFullYear()} PROBUDHYA GUCHAIT. ALL RIGHTS RESERVED. <br className="md:hidden" /> CO-FOUNDER AT MBFT.
          </p>
          <div className="flex gap-8 text-[10px] text-offwhite/30 uppercase tracking-widest font-bold">
             <a href="#" className="hover:text-offwhite transition-colors">Privacy</a>
             <a href="#" className="hover:text-offwhite transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
