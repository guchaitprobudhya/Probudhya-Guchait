
import React from 'react';

export const Publications: React.FC = () => {
  const categories = [
    {
      name: 'Tactical Analysis',
      items: [
        {
          title: 'Lobera reunites with his friend from Moghreb, as Mohun Bagan appoints David Deogracia as assistant coach!',
          date: 'Nov 2025',
          link: 'https://www.mbft.in/2025/11/LobEra-Tactical-Breakdown.html',
          desc: 'A deep dive into the tactical synergy between Lobera and Deogracia.'
        },
        {
          title: 'Mohun Bagan weighing up options if Molina Leaves',
          date: 'Nov 2025',
          link: 'https://www.mbft.in/2025/11/MB-weighing-up-options.html',
          desc: 'Exclusive reporting on the club\'s coaching shortlist and management decisions.'
        }
      ]
    },
    {
      name: 'Match Reports & Features',
      items: [
        {
          title: 'The Bong Connection: পরপর শিল্ড জয়ে ছাপ রেখে গেলেন যে বঙ্গ তনয়\'রা',
          date: 'March 2025',
          link: 'https://www.mbft.in/2025/03/The-Bong-Connection-ISL-Shield-24-25.html',
          desc: 'A tribute to the local Bengali talent contributing to the club\'s silverware.'
        },
        {
          title: 'Five things we learnt from the victory against Mumbai City FC',
          date: 'Aug 2023',
          link: 'https://www.mbft.in/2023/08/five-things-we-learnt-from-victory.html',
          desc: 'Key takeaways from a high-stakes tactical battle.'
        },
        {
          title: '\'Professional\' Mohun Bagan too heavy for Punjab',
          date: 'Aug 2023',
          link: 'https://www.mbft.in/2023/08/professional-mohun-bagan-too-heavy-for.html',
          desc: 'Match report and performance ratings for the Durand Cup.'
        }
      ]
    },
    {
      name: 'Club Culture & Transfer News',
      items: [
        {
          title: 'ইসকা নাম হ্যায় মোহনবাগান (This is Mohun Bagan)',
          date: 'March 2024',
          link: 'https://www.mbft.in/2024/03/ISHQ-ka-naam-hai-MOHUNBAGAN.html',
          desc: 'A long-form feature on the emotional bond between the fans and the club’s legacy.'
        },
        {
          title: 'The Legends of the Man: SANDIP MOIRA',
          date: 'May 2023',
          link: 'https://www.mbft.in/2023/05/the-legends-of-man-sandip-moira.html',
          desc: 'An obituary and retrospective on the legendary fan-activist and cartoonist.'
        },
        {
          title: 'Sumit Rathi Mutually Parts ways with Mohun Bagan',
          date: 'Feb 2025',
          link: 'https://www.mbft.in/2025/02/SumitRathiLeavesBagan.html',
          desc: 'Breaking news on player departures and squad restructuring.'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
        <div>
          <span className="text-richMaroon font-black text-[10px] uppercase tracking-[0.4em] mb-4 block underline decoration-electricGreen underline-offset-4">The Archive</span>
          <h2 className="text-6xl md:text-8xl font-headline tracking-tighter leading-none">
            SELECTED <br/><span className="text-outline">WORKS</span>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-offwhite/50 text-xs font-bold uppercase tracking-widest leading-relaxed border-l-2 border-electricGreen pl-4">
            Investigative reports, tactical breakdowns, and match analyses covering the pulse of Indian Football.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {categories.map((cat, i) => (
          <div key={i} className="relative">
            <h3 className="text-electricGreen font-black text-[10px] uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/5 flex items-center justify-between">
              <span>{cat.name}</span>
              <span className="text-white/20">VOL_{i+1}</span>
            </h3>
            
            <div className="divide-y divide-white/5">
              {cat.items.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block py-8 hover:px-6 transition-all duration-500 hover:bg-white/[0.02]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-2">
                      <span className="text-xs font-headline tracking-widest text-offwhite/30 group-hover:text-electricGreen transition-colors">
                        {item.date}
                      </span>
                    </div>
                    <div className="md:col-span-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="max-w-2xl">
                        <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-electricGreen transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-offwhite/50 leading-relaxed font-medium group-hover:text-offwhite/80 transition-colors italic">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-richMaroon/5 border border-white/5 flex flex-col items-center text-center">
        <h3 className="text-3xl font-headline tracking-tight uppercase mb-4">Need exclusive coverage?</h3>
        <p className="text-offwhite/50 text-sm max-w-xl mb-8 font-medium">
          Whether it's a tactical breakdown of a major tournament or a feature story on club history, I deliver content with engineering precision and journalistic flair.
        </p>
        <a 
          href="mailto:guchaitprobudhya@gmail.com" 
          className="px-10 py-4 bg-offwhite text-charcoal font-black uppercase tracking-[0.2em] text-[10px] hover:bg-electricGreen transition-all"
        >
          Request Publication
        </a>
      </div>
    </div>
  );
};
