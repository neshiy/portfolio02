'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-libre)' }}>
            Projects
          </h2>
          <p className="text-gray-300 mt-4 text-lg">Explore my work across software and design.</p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl border border-white/15 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Software Engineering</h3>
            <p className="text-gray-300 mb-8">Web applications, tools, and interactive experiences built with modern tech.</p>
            <Link href="/projects/software" className="btn btn-outline px-8 py-3">
              View Page
            </Link>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl border border-white/15 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3">Graphic Design</h3>
            <p className="text-gray-300 mb-8">Visual identities, UI designs, and creative artwork showcasing design craft.</p>
            <Link href="/projects/design" className="btn btn-outline px-8 py-3">
              View Page
            </Link>
          </div>
        </div>

        <div className="text-center mt-14">
          <a href="/cv.pdf" download className="btn btn-primary text-lg px-10 py-4">
            DOWNLOAD MY CV
          </a>
        </div>
      </div>
    </section>
  );
}
