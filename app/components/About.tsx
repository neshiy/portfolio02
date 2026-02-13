'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section id="about" className="section" ref={ref}>
      <div className="container flex flex-col md:flex-row items-center gap-12">
        <div className={`flex-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/20 shadow-xl mx-auto">
            <img src="/bg-d.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className={`flex-1 text-center md:text-left space-y-5 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700 delay-100`}>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-libre)' }}>
            About Me
          </h2>
          <p className="text-purple-300 text-xl font-semibold">
            Building digital stories through design and development.
          </p>
          <div className="text-gray-200 space-y-4 leading-relaxed">
            <p>
              Hello there, I'm a UI/UX designer and front end web developer who loves turning ideas into beautiful,
              meaningful digital experiences. I combine creative design thinking with clean, responsive development to
              craft products that feel intuitive, visually engaging, and user-focused.
            </p>
            <p>
              I enjoy bringing life to interfaces from wireframes and prototypes to fully developed, interactive
              websites. My approach is simple: understand the user, design with intention, and build with purpose. I'm
              constantly learning, exploring new tools, and refining my craft to create work that is both aesthetically
              pleasing and functional.
            </p>
            <p>
              Beyond the screen, I'm someone who values clarity, creativity, and problem-solving. Whether it's designing
              a smooth user journey or developing a fast, responsive interface, I put my heart into creating digital
              experiences that truly make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
