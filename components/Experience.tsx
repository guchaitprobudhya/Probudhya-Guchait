
import React from 'react';

export const Experience: React.FC = () => {
  const history = [
    {
      role: 'Co-Founder & Content Head',
      company: 'MBFT',
      period: '2023 – Present',
      desc: 'Leading a dynamic team of creators. Managing end-to-end content production for YouTube and web journalism. Spearheading high-impact transfer news segments with 100K+ reach.'
    },
    {
      role: 'Customer Service Associate',
      company: 'Amazon India',
      period: '2020 – 2026',
      desc: '6 years of excellence in customer resolution and problem solving within a fast-paced corporate ecosystem. Recognized for analytical thinking and commitment to excellence.'
    }
  ];

  const skills = [
    'SEO Content Writing', 'YouTube Scripting', 'Team Leadership', 
    'Analytical Thinking', 'Social Media Strategy', 'On-Camera Presentation',
    'Market Analysis', 'Problem Solving'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
        <h2 className="text-7xl font-headline tracking-tighter leading-none">
          CRAFTED <br/> EXPERIENCE
        </h2>
        <div className="md:max-w-md text-right md:text-left self-end">
          <p className="text-offwhite/50 text-sm uppercase tracking-widest font-bold mb-4">Core Skillset</p>
          <div className="flex flex-wrap gap-2 justify-end md:justify-start">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 border border-white/10 text-[10px] uppercase font-bold text-offwhite/80 hover:border-electricGreen hover:text-electricGreen transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {history.map((job, idx) => (
          <div key={idx} className="group border-b border-white/10 py-12 flex flex-col md:grid md:grid-cols-12 items-center gap-8 hover:bg-white/[0.02] transition-colors px-4">
            <div className="md:col-span-3 text-offwhite/30 font-headline text-5xl opacity-20 group-hover:opacity-100 group-hover:text-richMaroon transition-all">
              0{idx + 1}
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-1">{job.company}</h3>
              <p className="text-xs uppercase tracking-widest text-electricGreen font-bold">{job.period}</p>
            </div>
            <div className="md:col-span-6">
              <h4 className="text-lg font-bold text-offwhite/80 mb-3">{job.role}</h4>
              <p className="text-offwhite/50 text-sm leading-relaxed max-w-xl">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
