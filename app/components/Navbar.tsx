'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-8 md:py-10">
        {/* Left */}
        <motion.a
          href="#home"
          className="text-2xl md:text-3xl font-black tracking-widest"
          style={{ fontFamily: 'Beckan, var(--font-libre)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">PORTFOLIO</span>
        </motion.a>

        {/* Center */}
        <nav className="hidden md:flex items-center gap-12">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="link-underline text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+94787932390"
            className="hidden md:inline-flex px-12 py-5 text-lg font-bold rounded-full border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            style={{ backgroundColor: 'rgba(42,10,84,0.6)', color: '#e9d5ff' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            +94 787932390
          </motion.a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden px-5 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="glass rounded-2xl p-7">
              <nav className="flex flex-col gap-5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold text-gray-200 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="tel:+94787932390"
                  className="btn btn-outline w-full justify-center text-base py-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
