'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tools = [
  { name: 'Photoshop', icon: '/tools/photoshop.svg' },
  { name: 'Canva', icon: '/tools/canva.svg' },
  { name: 'Typescript', icon: '/tools/typescript.svg' },
  { name: 'Figma', icon: '/tools/figma.svg' },
  { name: 'Nodejs', icon: '/tools/nodejs.svg' },
  { name: 'Nextjs', icon: '/tools/nextjs.svg' },
  { name: 'HTML', icon: '/tools/html.svg' },
  { name: 'CSS', icon: '/tools/css.svg' },
  { name: 'Javascript', icon: '/tools/javascript.svg' },
  { name: 'MongoDB', icon: '/tools/mongodb.svg' },
  { name: 'Tailwind', icon: '/tools/tailwind.svg' },
  { name: 'Python', icon: '/tools/python.svg' },
  { name: 'VS Code', icon: '/tools/vscode.svg' },
  { name: 'Git', icon: '/tools/git.svg' },
  { name: 'GitHub', icon: '/tools/github.svg' },
  { name: 'PowerBI', icon: '/tools/powerbi.svg' },
];

export default function ToolsMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const items = [...tools, ...tools];

  return (
    <section className="section py-24" ref={ref}>
      <div className="section-divider mb-16" />

      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">Tech Stack</span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
        </motion.div>

        <motion.div
          className="relative overflow-hidden py-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#0b0f1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#0b0f1a] to-transparent z-10 pointer-events-none" />

          <div className="marquee-track">
            {items.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="shrink-0 mx-8 md:mx-14 flex flex-col items-center gap-3 group cursor-default"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass flex items-center justify-center group-hover:bg-white/8 group-hover:border-purple-400/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-300">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('span')) {
                        const span = document.createElement('span');
                        span.textContent = tool.name.charAt(0);
                        span.className = 'text-2xl font-bold text-gray-400';
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500 font-semibold group-hover:text-gray-200 transition-colors duration-300">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
