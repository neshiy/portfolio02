'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dineshi-christina-perera/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Gmail',
      href: 'mailto:dineshiperera05@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/94787932390',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/neshiizz/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/neshiy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="home" className="section pt-44 pb-40 min-h-screen flex items-center">
      {/* Decorative Orbs */}
      <div className="orb orb-purple w-96 h-96 -top-20 -left-40 animate-float" style={{ animationDelay: '0s' }} />
      <div className="orb orb-pink w-72 h-72 bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container flex flex-col md:flex-row items-center gap-30 relative z-10">
        {/* Left */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-14">
            <motion.p variants={itemVariants} className="badge">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              Hello! I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tight"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Christina
              <br />
              <span className="gradient-text">Perera</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
              <span className="gradient-text">Visual Designer</span>
              <span className="text-white/60"> & </span>
              <span className="gradient-text">Web Developer</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-8 pt-14">
              <a href="#projects" className="btn btn-outline text-lg px-10 py-5">
                View Projects
              </a>
              <a href="#contact" className="btn btn-primary text-lg px-10 py-5">
                Get in Touch
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex items-center gap-4 pt-9 text-gray-400 text-sm"
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-white/40 rounded-full animate-scroll-bounce" />
              </div>
              <span>Scroll to explore</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 flex flex-col items-center gap-14"
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute -inset-6 rounded-4xl bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-2xl animate-pulse-glow" />
            <div className="relative w-80 h-88 md:w-96 md:h-112 rounded-4xl overflow-hidden border border-white/15 shadow-2xl animate-float hover-tilt">
              <img src="/globe.svg" alt="Christina Perera" className="w-full h-full object-cover bg-black" />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 animate-shimmer opacity-60" />
            </div>
          </div>

          <motion.div
            className="flex items-center gap-6"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } } }}
          >
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
                aria-label={s.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
