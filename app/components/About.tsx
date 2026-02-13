'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Experience', value: '2+ yrs' },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      {/* Decorative */}
      <div className="orb orb-blue w-80 h-80 -top-20 right-0" />
      <div className="section-divider mb-20" />

      <div className="container flex flex-col lg:flex-row items-center gap-30">
        {/* Image Side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -80, rotate: -5 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="absolute -inset-5 rounded-4xl bg-linear-to-tr from-purple-500/15 via-transparent to-pink-500/15 blur-xl" />
            <div className="relative w-80 h-96 md:w-88 md:h-112 rounded-4xl overflow-hidden border border-white/15 shadow-2xl hover-tilt">
              <img src="/bg-d.jpg" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-3 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-sm font-bold text-purple-300">UI/UX & Dev</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-16"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="space-y-5">
            <motion.span
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Who I Am
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-poppins)' }}>
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <p className="text-purple-200 text-xl md:text-2xl font-black italic">
            Building digital stories through design and development.
          </p>

          <div className="text-gray-300 space-y-12 leading-relaxed text-lg">
            <p>
              Hello there, I&apos;m a UI/UX designer and front end web developer who loves turning ideas into beautiful,
              meaningful digital experiences. I combine creative design thinking with clean, responsive development to
              craft products that feel intuitive, visually engaging, and user-focused.
            </p>
            <p>
              I enjoy bringing life to interfaces from wireframes and prototypes to fully developed, interactive
              websites. My approach is simple: understand the user, design with intention, and build with purpose. I&apos;m
              constantly learning, exploring new tools, and refining my craft to create work that is both aesthetically
              pleasing and functional.
            </p>
            <p>
              Beyond the screen, I&apos;m someone who values clarity, creativity, and problem-solving. Whether it&apos;s designing
              a smooth user journey or developing a fast, responsive interface, I put my heart into creating digital
              experiences that truly make an impact.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-12 pt-14"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl py-5 px-4 text-center hover:bg-white/5 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
