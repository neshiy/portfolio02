'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY');
      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full bg-white/[0.06] border border-white/12 rounded-3xl px-8 py-6 md:py-7 text-white text-lg min-h-[64px] focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/[0.08] placeholder:text-gray-500 placeholder:font-medium transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] shadow-md';

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="orb orb-pink w-80 h-80 -bottom-20 -left-20" />
      <div className="section-divider mb-16" />

      <div className="container max-w-5xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">Say Hello</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mt-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass glass-soft rounded-4xl p-10 md:p-16 space-y-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Subtle glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <input type="text" name="first_name" required placeholder="First Name" className={inputClass} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35 }}
            >
              <input type="text" name="last_name" required placeholder="Last Name" className={inputClass} />
            </motion.div>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <input type="text" name="company" placeholder="Company or Organization" className={inputClass} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 }}
            >
              <input type="email" name="email" required placeholder="Email Address" className={inputClass} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <input type="tel" name="phone" placeholder="Phone Number" className={inputClass} />
            </motion.div>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            <textarea
              name="message"
              rows={8}
              required
              placeholder="Tell me about your project or say hello..."
              className={`${inputClass} resize-none min-h-55 md:min-h-65 px-8 py-7`}
            />
          </motion.div>

          <input type="hidden" name="to_email" value="dineshiperera05@gmail.com" />

          {sent && (
            <motion.p
              className="text-green-400 text-sm font-semibold flex items-center gap-2 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {error && <p className="text-red-400 text-sm font-semibold relative z-10">{error}</p>}

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-8 relative z-10 sm:justify-end sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              type="submit"
              disabled={sending}
              className="btn btn-primary w-full sm:w-auto px-12 py-5 text-lg disabled:opacity-60"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </motion.button>
            <a href="tel:+94787932390" className="btn btn-outline w-full sm:w-auto px-10 py-5 text-lg">
              Call Me
            </a>
            <a href="/cv.pdf" download className="btn btn-outline w-full sm:w-auto px-10 py-5 text-lg">
              Download CV
            </a>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
