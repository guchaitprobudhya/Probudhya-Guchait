
import React from 'react';

export const Contact: React.FC = () => {
  const googleFormUrl = "https://forms.gle/yJuAYPanfQkBLMVHA";

  const socialIcons = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/probudhya-guchait-584b8095/', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' },
    { name: 'X', href: 'https://x.com/Probudhya13', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
    { name: 'Instagram', href: 'https://www.instagram.com/Probudhya13', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
    { name: 'YouTube', href: 'https://www.youtube.com/@MBFT89', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <span className="text-electricGreen font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Inquiries</span>
          <h2 className="text-7xl lg:text-8xl font-headline tracking-tighter leading-[0.85] mb-10">
            LET'S SHAPE <br/>
            <span className="text-outline">THE FUTURE</span> <br/>
            OF MEDIA.
          </h2>
          
          <div className="space-y-12 mb-16">
            <div className="group">
              <p className="text-[10px] uppercase font-black tracking-widest text-offwhite/40 mb-2 group-hover:text-electricGreen transition-colors">Direct Correspondence</p>
              <a href="mailto:guchaitprobudhya@gmail.com" className="text-3xl font-headline uppercase tracking-tight group-hover:text-offwhite transition-colors break-all">
                guchaitprobudhya@gmail.com
              </a>
            </div>
            <div className="group">
              <p className="text-[10px] uppercase font-black tracking-widest text-offwhite/40 mb-2 group-hover:text-electricGreen transition-colors">Hotline</p>
              <a href="tel:+917003814950" className="text-3xl font-headline uppercase tracking-tight group-hover:text-offwhite transition-colors">
                +91 700 381 4950
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-offwhite/40 mb-6">Digital Presence</p>
            <div className="flex gap-6">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-white/10 flex items-center justify-center group hover:bg-electricGreen hover:border-electricGreen transition-all"
                  aria-label={social.name}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white group-hover:text-charcoal transition-colors"
                  >
                    {social.name === 'LinkedIn' ? (
                      <path d={social.icon} />
                    ) : social.name === 'X' ? (
                      <path d={social.icon} />
                    ) : social.name === 'Instagram' ? (
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    ) : (
                      <path d={social.icon} />
                    )}
                    {social.name === 'Instagram' && <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />}
                    {social.name === 'Instagram' && <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-deepGray p-12 border border-white/10 relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            {/* Form Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electricGreen/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-richMaroon/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-electricGreen mb-8">Official Inquiry Portal</h3>
              <h4 className="text-4xl md:text-5xl font-headline uppercase leading-tight mb-8">
                Ready to start a <br/> New Project?
              </h4>
              <p className="text-offwhite/50 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
                To provide the most analytical and effective solution, please fill out the official inquiry form. I respond to all professional queries within 24-48 hours.
              </p>
              
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-electricGreen text-charcoal font-black uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-offwhite"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Open Inquiry Form
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </span>
                <div className="absolute inset-0 w-0 bg-white transition-all group-hover:w-full"></div>
              </a>

              <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                <span className="text-[8px] font-bold uppercase tracking-widest text-offwhite/20">Secure Processing via Google Forms</span>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-electricGreen rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-electricGreen rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-electricGreen rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
