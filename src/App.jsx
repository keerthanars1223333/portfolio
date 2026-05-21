import React, { useRef } from 'react';
import './App.css';

export default function App() {
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-bg min-h-screen text-white relative pb-12 px-4 overflow-hidden font-poppins flex flex-col justify-between">
      
      <div>
        {/* RUNNING PAGE BORDER ANIMATION */}
        <div className="page-border-line border-top"></div>
        <div className="page-border-line border-right"></div>
        <div className="page-border-line border-bottom"></div>
        <div className="page-border-line border-left"></div>
        
        {/* NEW MESH GRADIENT BLUR ORBS */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="mesh-orb-1"></div>
          <div className="mesh-orb-2"></div>
          <div className="mesh-orb-3"></div>
        </div>

        {/* MODERN GLASS-MORPHIC NAVBAR */}
        <nav className="modern-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-2 rounded-full max-w-xl w-[90%] border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          
          {/* KEERTHANA NAME WITH ROTATING BORDER */}
          <div 
            className="name-glow-wrapper"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="name-glow-text font-['Syne'] font-bold text-cyan-400 text-xs md:text-sm tracking-widest select-none">
              Keerthana
            </span>
          </div>

          <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium text-slate-300 items-center">
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button>
            <button onClick={() => scrollToSection(eduRef)} className="nav-link">Education</button>
            <button onClick={() => scrollToSection(skillsRef)} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button>
          </div>
        </nav>

        {/* MAIN CONTENT CARD */}
        <div className="neon-card max-w-4xl mx-auto rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,242,254,0.15)] z-10 relative space-y-16 mt-28 mb-16">
          
          {/* SIDE-BY-SIDE HERO SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 pb-8 border-b border-white/5">
            
            {/* LEFT SIDE: ULTRA ANIMATED 3D PORTAL IMAGE AVATAR */}
            <div className="md:col-span-4 flex justify-center">
              <div className="profile-portal-wrapper relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <div className="portal-ring-1 absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 p-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]"></div>
                <div className="portal-ring-2 absolute inset-2 rounded-full border border-double border-pink-500/40 p-4 shadow-[0_0_30px_rgba(236,72,153,0.15)]"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 blur-2xl opacity-40 scale-95"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/20 z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] bg-[#070517]">
                  <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/068/222/926/small/close-up-of-a-charming-ginger-kitten-with-big-blue-eyes-resting-on-a-soft-blanket-photo.jpg" 
                    alt="Keerthana RS Profile"
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-700 filter contrast-105 brightness-95"
                  />
                </div>
                <div className="portal-ring-1 absolute -top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f2fe]"></div>
                <div className="portal-ring-2 absolute -bottom-1 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_12px_#ec4899]"></div>
              </div>
            </div>
            
            {/* RIGHT SIDE: NAME, SUBTITLE & INTRO PARAGRAPH */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="space-y-1">
                <h1 className="cyber-heading text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter uppercase select-none">
                  Keerthana RS
                </h1>
                <p className="text-cyan-400 text-xs md:text-sm font-medium tracking-widest uppercase flex items-center justify-center md:justify-start gap-2 pt-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  Computer Engineer & Frontend Developer
                </p>
              </div>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Hi, I am a passionate creator of digital environments. Fusing core Computer Engineering concepts with creative frontend expertise, I specialize in leveraging the full potential of React to craft ultra-responsive websites designed for speed, beauty, and absolute scalability.
              </p>
              <div className="pt-2 flex gap-3">
                <button onClick={() => scrollToSection(skillsRef)} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 active:scale-95 transition shadow-[0_4px_15px_rgba(6,182,212,0.3)]">
                  View Expertise
                </button>
                <button onClick={() => scrollToSection(contactRef)} className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 active:scale-95 transition">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          {/* DEEP ABOUT SECTION */}
          <div ref={aboutRef} className="space-y-4 text-left pt-2 scroll-mt-24">
            <div className="border-b border-cyan-500/20 pb-2">
              <h2 className="glowing-heading text-xl font-bold text-cyan-400 tracking-wide">About Me</h2>
            </div>
            <div className="text-slate-300 leading-relaxed font-light text-base pl-1 space-y-4">
              <p>
                I am a dedicated and detail-oriented **Computer Engineering student and Frontend Developer** specializing in building high-performance, immersive, and visually stellar web architectures. My engineering background gives me a distinct edge in algorithmic problem solving and clean application architecture.
              </p>
              <p>
                Beyond just converting layouts into code, I prioritize **component reusability, web accessibility (a11y), state management, and optimized logic flows**. Combining hardware-level logic understanding with modern software frameworks, I love designing flawless user interactions.
              </p>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div ref={eduRef} className="space-y-4 text-left pt-6 scroll-mt-24">
            <div className="border-b border-purple-500/20 pb-2">
              <h2 className="glowing-heading text-xl font-bold text-purple-400 tracking-wide">Academic Background</h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 pt-2">
              
              {/* Poly Computer Engineering */}
              <div className="hover-glow-tile p-6 rounded-2xl relative overflow-hidden group border-l-2 border-cyan-400/30">
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider bg-cyan-400/5 px-2.5 py-1 rounded-md border border-cyan-400/10">Current</span>
                <p className="font-bold text-xl mt-3 text-white group-hover:text-cyan-300 transition">Diploma in Computer Engineering</p>
                <p className="text-slate-400 text-sm mt-1 font-medium">Government Polytechnic College for Women, Thiruvananthapuram</p>
                <p className="text-slate-400 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3">
                  Actively pursuing formal education in core computer science. Immersion in topics like Data Structures, Object-Oriented Programming, Operating Systems, and Software Engineering principles that directly reinforce high-end web dev architecture.
                </p>
              </div>

              {/* DCA Certification */}
              <div className="hover-glow-tile p-6 rounded-2xl relative overflow-hidden group border-l-2 border-emerald-400/30">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-400/5 px-2.5 py-1 rounded-md border border-emerald-400/10">Certified</span>
                <p className="font-bold text-xl mt-3 text-white group-hover:text-emerald-300 transition">Diploma in Computer Applications (DCA)</p>
                <p className="text-slate-400 text-sm mt-1 font-medium">Technical Training Institute</p>
                <p className="text-slate-400 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3">
                  Acquired comprehensive certified foundation in computational workflows, data management, and operational systems. This certification marked my concrete entry into core computing tools and automated system processing.
                </p>
              </div>

              {/* BA */}
              <div className="hover-glow-tile p-6 rounded-2xl relative overflow-hidden group">
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider bg-purple-400/5 px-2.5 py-1 rounded-md border border-purple-400/10">2021 - 2024</span>
                <p className="font-bold text-xl mt-3 text-white group-hover:text-purple-300 transition">Bachelor of Arts (BA)</p>
                <p className="text-slate-400 text-sm mt-1 font-medium">Kerala University</p>
                <p className="text-slate-400 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3">
                  Graduated with an emphasis on advanced textual analysis and structured communication. This academic journey heavily refined my semantic documentation skills and design-thinking approaches in modular interface management.
                </p>
              </div>

              {/* HSE */}
              <div className="hover-glow-tile p-6 rounded-2xl relative overflow-hidden group">
                <span className="text-xs text-pink-400 font-semibold uppercase tracking-wider bg-pink-400/5 px-2.5 py-1 rounded-md border border-pink-400/10">2019 - 2021</span>
                <p className="font-bold text-xl mt-3 text-white group-hover:text-pink-300 transition">Higher Secondary Education</p>
                <p className="text-slate-400 text-sm mt-1 font-medium">Board of Higher Secondary Education</p>
                <p className="text-slate-400 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3">
                  Completed core academic disciplines with high logical aptitude. This foundational period helped build the essential analytical background required for structured engineering math and algorithmic computation.
                </p>
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS SECTION */}
          <div ref={skillsRef} className="space-y-6 text-left pt-6 scroll-mt-24">
            <div className="border-b border-cyan-500/20 pb-2">
              <h2 className="glowing-heading text-xl font-bold text-cyan-400 tracking-wide">Technical Expertise & Core Skills</h2>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 pt-2">
              
              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-cyan-300 transition">React.js Architecture</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">90%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Hooks (useRef, useMemo, useCallback), Context API for global state management, Virtual DOM optimization, and modular component reusability principles.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-cyan-500 to-blue-500 w-[90%] shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
                </div>
              </div>

              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-purple-300 transition">JavaScript (ES6+ & Beyond)</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">85%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Asynchronous systems (Async/Await, Promises), REST API integrations, Event Loop mechanism, JSON handling, Arrays, and dynamic DOM data-binding.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-purple-500 to-indigo-500 w-[85%] shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                </div>
              </div>

              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-pink-300 transition">Tailwind CSS & Modern UI</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20">95%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Utility-First layouts, fluid responsive design (Mobile-First approach), complex Flexbox/CSS Grid structuring, custom theme layering, and Glassmorphism.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-pink-500 to-rose-500 w-[95%] shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
                </div>
              </div>

              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-emerald-300 transition">Dev Tools & Version Control</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">80%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Git version control systems, GitHub repo environments, branching operations, merge reviews, Vite build bundlers, and Chrome V8 performance audits.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-emerald-500 to-teal-500 w-[80%] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>

              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-orange-300 transition">State Management & Next.js Basics</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">75%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Handling scalable multi-page application flows, absolute state parameters, Redux Toolkit fundamentals, and server-side rendering concept layouts.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-orange-500 to-amber-500 w-[75%] shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
                </div>
              </div>

              <div className="hover-glow-tile p-5 rounded-xl group">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-white group-hover:text-blue-300 transition">Performance & Web Standards</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">85%</span>
                </div>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Writing semantic HTML5 code, ensuring maximum SEO friendliness, structural asset loading optimizations, cross-browser responsiveness, and debugging skills.
                </p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill bg-gradient-to-r from-blue-500 to-cyan-500 w-[85%] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT SECTION */}
          <div ref={contactRef} className="space-y-4 text-left pt-6 scroll-mt-24">
            <div className="border-b border-pink-500/20 pb-2">
              <h2 className="glowing-heading text-xl font-bold text-pink-400 tracking-wide">Connect & Collaborate</h2>
            </div>
            <p className="text-slate-400 text-sm pl-1 font-light">Whether you are looking to hire an agile frontend developer or discuss an open-source project, feel free to drop a message!</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 text-sm text-slate-300 pt-2">
              <a href="mailto:keerthanagalaxy669@gmail.com" className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-300 block">
                <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Email Me</span>
                <span className="font-medium text-slate-200 break-all text-xs">keerthanagalaxy669@gmail.com</span>
              </a>
              <a href="tel:+919876543210" className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-300 block">
                <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Call Me</span>
                <span className="font-medium text-slate-200 text-xs">+91 9876543210</span>
              </a>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/40 transition-all duration-300 block">
                <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Location</span>
                <span className="font-medium text-slate-200 text-xs">Thiruvananthapuram, Kerala</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* NEW MODERN GLASS-MORPHIC FOOTER */}
      <footer className="modern-footer w-full py-6 mt-auto relative z-10 rounded-t-3xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-wider font-['Syne'] bg-gradient-to-r from-cyan-400 to-pink-500 -webkit-background-clip-text -webkit-text-fill-color:transparent">
              KEERTHANA RS
            </p>
            <p className="text-xs text-slate-400 font-light">
              &copy; 2026 • Crafted with passion and React.
            </p>
          </div>

          {/* SOCIAL LINKS WITH HOVER GLOW EFFECT */}
          <div className="flex gap-6 text-xs font-medium tracking-wide">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">
              LinkedIn
            </a>
            <a href="mailto:keerthanagalaxy669@gmail.com" className="footer-social-link">
              Mail
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}