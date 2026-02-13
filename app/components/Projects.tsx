'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    {
      title: 'Software Engineering',
      description: 'Web applications, tools, and interactive experiences built with modern tech.',
      href: '#contact',
      color: 'purple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: 'Graphic Design',
      description: 'Visual identities, UI designs, and creative artwork showcasing design craft.',
      href: '#contact',
      color: 'pink',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="orb orb-purple w-72 h-72 -top-10 left-1/2 -translate-x-1/2" />
      <div className="section-divider mb-16" />

      <div className="container">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">My Work</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mt-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-18">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="card text-center py-16 px-12 space-y-10 group relative"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                card.color === 'purple'
                  ? 'bg-linear-to-br from-purple-500/5 via-transparent to-purple-500/5'
                  : 'bg-linear-to-br from-pink-500/5 via-transparent to-pink-500/5'
              }`} />

              <motion.div
                className={`w-20 h-20 mx-auto rounded-2xl border flex items-center justify-center ${
                  card.color === 'purple'
                    ? 'border-purple-500/20 text-purple-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10'
                    : 'border-pink-500/20 text-pink-300 group-hover:border-pink-400/40 group-hover:bg-pink-500/10'
                } transition-all duration-300`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                {card.icon}
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold relative z-10">{card.title}</h3>
              <p className="text-gray-300 text-lg relative z-10 max-w-sm mx-auto">{card.description}</p>

              <div className="pt-8 relative z-10">
                <Link href={card.href} className="btn btn-outline px-10 py-4 text-base">
                  View Page
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="/cv.pdf"
            download
            className="btn btn-primary text-lg px-12 py-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            DOWNLOAD MY CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
