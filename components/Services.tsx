
import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Content Strategy & Writing',
      desc: 'SEO-optimized blogs and long-form news features tailored for digital engagement.',
      icon: 'PenNib'
    },
    {
      num: '02',
      title: 'YouTube Production',
      desc: 'Professional scriptwriting and high-energy on-camera presentation for modern audiences.',
      icon: 'Play'
    },
    {
      num: '03',
      title: 'Sports Journalism',
      desc: 'Specialized reporting, transfer market tracking, and exclusive story-finding.',
      icon: 'Newspaper'
    },
    {
      num: '04',
      title: 'Social Media Growth',
      desc: 'End-to-end community management and data-driven platform scaling.',
      icon: 'Share2'
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="bg-richMaroon/20 text-richMaroon px-4 py-1 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Capabilities</span>
        <h2 className="text-6xl font-headline tracking-tighter mb-6 uppercase">How I Help</h2>
        <div className="w-12 h-1 bg-electricGreen" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {services.map((service, idx) => (
          <a 
            key={idx} 
            href="#contact"
            onClick={scrollToContact}
            className="bg-charcoal p-10 border border-white/5 hover:border-electricGreen/50 transition-all group flex flex-col justify-between min-h-[350px]"
          >
            <div>
              <span className="text-[10px] font-bold text-electricGreen mb-10 block opacity-50 group-hover:opacity-100 tracking-tighter transition-all">
                SV_{service.num}
              </span>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-electricGreen transition-colors">{service.title}</h3>
              <p className="text-offwhite/50 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
            
            <div className="mt-10 flex justify-end">
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-electricGreen group-hover:border-electricGreen transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-charcoal"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
