'use client';

const tools = [
  { name: 'Canva', icon: '/tools/canva.svg' },
  { name: 'Figma', icon: '/tools/figma.svg' },
  { name: 'Photoshop', icon: '/tools/photoshop.svg' },
  { name: 'VS code', icon: '/tools/vscode.svg' },
  { name: 'Typescript', icon: '/tools/typescript.svg' },
  { name: 'HTML', icon: '/tools/html.svg' },
  { name: 'CSS', icon: '/tools/css.svg' },
  { name: 'Javascript', icon: '/tools/javascript.svg' },
  { name: 'Nodejs', icon: '/tools/nodejs.svg' },
  { name: 'MongoDB', icon: '/tools/mongodb.svg' },
  { name: 'Nextjs', icon: '/tools/nextjs.svg' },
  { name: 'Tailwind', icon: '/tools/tailwind.svg' },
  { name: 'Python', icon: '/tools/python.svg' },
  { name: 'PowerBI', icon: '/tools/powerbi.svg' },
  { name: 'Git', icon: '/tools/git.svg' },
  { name: 'GitHub', icon: '/tools/github.svg' },
];

export default function ToolsMarquee() {
  const items = [...tools, ...tools];

  return (
    <section className="section py-16">
      <div className="container">
        <p className="text-center text-gray-300 text-sm font-semibold tracking-[0.3em] mb-8">
          TOOLS & TECHNOLOGIES
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10" />

          <div className="marquee-track">
            {items.map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="shrink-0 mx-8 flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-white/10 transition">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('span')) {
                        const span = document.createElement('span');
                        span.textContent = tool.name.charAt(0);
                        span.className = 'text-xl font-bold text-gray-400';
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
                <span className="text-xs text-gray-400 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
