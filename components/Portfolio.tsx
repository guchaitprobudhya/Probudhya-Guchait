
import React from 'react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'MBFT Classics',
      category: 'YouTube Series',
      link: 'https://www.youtube.com/playlist?list=PLgb1QutFip2ThZudzNSkESQbkm75vlnld',
      image: 'https://i.ibb.co/KpnjR52n/8ad46afa-d66f-45e8-9328-2d48cffe6328.jpg',
      description: 'Definitive storytelling of Mohun Bagan\'s iconic history, bringing legacy to the digital age.',
      tags: ['Storytelling', 'Legacy', 'Production']
    },
    {
      title: 'Transfer News Segment',
      category: 'Journalism',
      link: 'https://www.mbft.in/search/label/Transfers',
      image: 'https://i.ibb.co/0RBdZMBm/d32d60df-3480-4344-a176-5348b60eb3bb.jpg',
      description: 'Industry-leading reliability and exclusive transfer window reporting for professional football.',
      tags: ['Reporting', 'Real-time', 'Exclusive']
    },
    {
      title: 'Transfer Secret Series',
      category: 'Viral Content',
      link: 'https://www.youtube.com/playlist?list=PLgb1QutFip2RThjIdcEBw7JX-82T-gnJi',
      image: 'https://i.ibb.co/yF0tm904/de387368-018c-4d65-9307-f61af2b99729.png',
      description: 'Analytical behind-the-scenes reporting that garnered over 100K+ organic views.',
      tags: ['Analytics', 'Strategy', 'Audience']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-electricGreen font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Case Studies</span>
          <h2 className="text-7xl lg:text-9xl font-headline tracking-tighter leading-none mb-4">
            FEATURED <br/>
            <span className="text-outline">PROJECTS</span>
          </h2>
        </div>
        <div className="pb-4">
          <p className="text-offwhite/40 text-sm max-w-[280px] font-bold uppercase tracking-widest leading-relaxed">
            A curated selection of works defining modern sports media standards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Large Lead Project */}
        <div className="lg:col-span-7">
          <a 
            href={projects[0].link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block relative overflow-hidden bg-deepGray border border-white/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={projects[0].image} 
                alt={projects[0].title} 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
              
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-electricGreen rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </div>
              </div>
            </div>
            
            <div className="p-10 border-t border-white/5 bg-deepGray">
              <div className="flex justify-between items-center mb-6">
                <span className="px-3 py-1 bg-richMaroon text-white text-[9px] font-black uppercase tracking-widest">{projects[0].category}</span>
                <span className="text-offwhite/20 font-headline text-5xl">01</span>
              </div>
              <h3 className="text-4xl font-headline uppercase tracking-tight mb-4 group-hover:text-electricGreen transition-colors">{projects[0].title}</h3>
              <p className="text-offwhite/50 text-sm leading-relaxed mb-8 max-w-xl">{projects[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-offwhite/30 border border-white/10 px-3 py-1 hover:border-electricGreen hover:text-electricGreen transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        </div>

        {/* Side Stack */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {projects.slice(1).map((proj, idx) => (
            <a 
              key={idx}
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col bg-deepGray border border-white/10"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-offwhite text-charcoal text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                  {proj.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-headline uppercase tracking-tight group-hover:text-electricGreen transition-colors">{proj.title}</h3>
                  <span className="text-offwhite/10 font-headline text-3xl">0{idx + 2}</span>
                </div>
                <p className="text-offwhite/50 text-xs leading-relaxed mb-4">{proj.description}</p>
                <div className="flex gap-2">
                  {proj.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-offwhite/30 border border-white/10 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
