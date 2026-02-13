'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dineshi-christina-perera/' },
    { name: 'Gmail', href: 'mailto:dineshiperera05@gmail.com' },
    { name: 'WhatsApp', href: 'https://wa.me/94787932390' },
    { name: 'Instagram', href: 'https://www.instagram.com/neshiizz/' },
    { name: 'GitHub', href: 'https://github.com/neshiy' },
  ];

  return (
    <section id="home" className="section pt-28 pb-24">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div
          className={`flex-1 text-center md:text-left transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="badge">Hello! I'm</p>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black" style={{ fontFamily: 'var(--font-poppins)' }}>
            Christina Perera
          </h1>
          <p className="mt-3 text-2xl md:text-3xl font-semibold text-gray-200">
            <span className="gradient-text">Visual Designer</span>
            <span className="text-white/80"> &amp; </span>
            <span className="gradient-text">Web Developer</span>
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="btn btn-outline text-lg px-8 py-4">
              View Projects
            </a>
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right */}
        <div className={`flex-1 flex flex-col items-center ${mounted ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <img src="/bg-d.jpg" alt="Christina Perera" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-4 mt-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition"
                aria-label={s.name}
              >
                {s.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
