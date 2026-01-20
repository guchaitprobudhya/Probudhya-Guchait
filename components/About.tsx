
import React from 'react';

export const About: React.FC = () => {
  const education = [
    { title: 'B.Tech in Computer Engineering', institution: 'MAKAUT', result: 'CGPA 8.36', year: 'Graduate' },
    { title: 'Diploma in CS & Tech', institution: 'WBSCTE', result: 'CGPA 7.8', year: 'Undergrad' },
    { title: 'Secondary Education', institution: 'Sri Ramkrishna Sikshalaya', result: 'CGPA 7.2', year: 'Schooling' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-electricGreen font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Biography</span>
          <h2 className="text-5xl md:text-6xl font-headline tracking-tighter leading-none mb-10">
            ANALYTICAL DEPTH <br/>
            MEETS <span className="text-outline">DYNAMIC</span><br/>
            STORYTELLING
          </h2>
          <div className="space-y-6 text-offwhite/70 text-lg leading-relaxed max-w-xl">
            <p>
              With a 6-year foundation at <span className="text-offwhite font-bold">Amazon India</span>, I mastered the art of complex problem-solving and customer excellence. 
              However, my technical roots in <span className="text-offwhite font-bold">Computer Engineering</span> were destined to merge with my lifelong passion for sports.
            </p>
            <p>
              Today, I lead content at <span className="text-offwhite font-bold">MBFT</span>, where I apply engineering-level logic to sports journalism, transfer market analysis, and visual storytelling. 
              This unique "Tech-meets-Creative" approach allows me to deliver high-impact media that resonates with a global audience.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-charcoal p-10 border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
             </div>
             
            <h3 className="text-xs font-bold uppercase tracking-widest text-offwhite/50 mb-10 pb-4 border-b border-white/10 flex justify-between items-center">
              <span>Academic Timeline</span>
              <span className="text-electricGreen">01—03</span>
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10 hover:border-electricGreen transition-colors group/item">
                  <div className="absolute top-0 -left-[5px] w-2 h-2 bg-white/20 rounded-full group-hover/item:bg-electricGreen transition-colors" />
                  <p className="text-xs font-bold text-electricGreen mb-1">{edu.year}</p>
                  <h4 className="text-xl font-bold mb-1">{edu.title}</h4>
                  <div className="flex justify-between items-center text-sm text-offwhite/40">
                    <span>{edu.institution}</span>
                    <span className="bg-white/5 px-2 py-1 rounded text-[10px] font-bold text-offwhite/80">{edu.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
