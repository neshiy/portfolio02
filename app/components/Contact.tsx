'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container max-w-4xl">
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-libre)' }}>
            Get In Touch
          </h2>
          <p className="text-gray-300 mt-4 text-lg">Have a project in mind or just want to say hello? Let's talk.</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`glass rounded-3xl p-8 md:p-10 space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">First Name</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Last Name</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Company</label>
            <input
              type="text"
              name="company"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400"
            />
          </div>

          <input type="hidden" name="to_email" value="dineshiperera05@gmail.com" />

          {sent && <p className="text-green-400 text-sm">Message sent! I'll get back to you soon.</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={sending}
              className="btn btn-primary w-full sm:w-auto px-8 py-4 disabled:opacity-60"
            >
              {sending ? 'Sending...' : 'Send'}
            </button>
            <a
              href="tel:+94787932390"
              className="btn btn-outline w-full sm:w-auto px-8 py-4"
            >
              Call Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn btn-outline w-full sm:w-auto px-8 py-4"
            >
              Download CV
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
