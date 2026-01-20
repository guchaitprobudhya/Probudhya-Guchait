
import React from 'react';

export const Hero: React.FC = () => {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-richMaroon/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-electricGreen/5 rounded-full blur-[150px]" />
        <div className="absolute -bottom-10 -left-10 text-[30vw] font-headline text-white/[0.02] select-none leading-none tracking-tighter">
          SPORTS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-electricGreen text-charcoal font-black text-[10px] uppercase tracking-widest">Featured Creator</span>
              <div className="h-px flex-grow bg-white/10"></div>
            </div>

            <h1 className="text-[12vw] lg:text-[120px] xl:text-[140px] font-headline leading-[0.85] tracking-tighter mb-8 group">
              PROBUDHYA <br/>
              <span className="text-outline group-hover:text-offwhite transition-all duration-700">GUCHAIT</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-4">
              <div className="space-y-6">
                <p className="text-sm md:text-base font-medium leading-relaxed text-offwhite/70 italic border-l-4 border-richMaroon pl-6 py-2">
                  "Blending the precision of a Computer Engineer with the raw energy of Sports Media."
                </p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-offwhite/40">
                  Co-Founder at MBFT | Content Creator | YouTube Presenter | Computer Engineer
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="#work" 
                  onClick={(e) => scrollToId(e, 'work')}
                  className="group relative px-10 py-5 bg-offwhite text-charcoal font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:pr-14"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToId(e, 'contact')}
                  className="px-10 py-5 border-2 border-white/10 hover:border-electricGreen hover:text-electricGreen font-black uppercase tracking-[0.2em] text-xs transition-all text-center"
                >
                  Let's Collaborate
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-electricGreen/20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-richMaroon/10 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              
              <div className="relative aspect-[4/5] w-full bg-deepGray overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src="https://i.ibb.co/gFj568YZ/PG1.png" 
                  alt="Probudhya Guchait Portrait" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-electricGreen"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-electricGreen">Verified Talent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { label: 'Founded', value: 'MBFT 2023' },
            { label: 'Corporate Experience', value: '6 Years' },
            { label: 'Audience Reach', value: '100K+' },
            { label: 'Base Location', value: 'Kolkata' }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-offwhite/30 mb-2 group-hover:text-electricGreen transition-colors">{stat.label}</p>
              <p className="text-xl font-headline tracking-tight uppercase group-hover:translate-x-1 transition-transform">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
