import Link from 'next/link';

export default function DesignProjects() {
  const projects = [
    {
      title: 'Brand Identity 1',
      description: 'Complete brand identity design including logo, colors, and typography.',
      tags: ['Branding', 'Logo Design', 'Typography'],
      image: '/bg-d.jpg',
    },
    {
      title: 'UI/UX Case Study',
      description: 'A comprehensive case study for a mobile application redesign.',
      tags: ['UI/UX', 'Mobile', 'Figma'],
      image: '/bg-d.jpg',
    },
    {
      title: 'Marketing Campaign',
      description: 'Visual design for a multi-platform marketing campaign.',
      tags: ['Social Media', 'Photoshop', 'Illustrator'],
      image: '/bg-d.jpg',
    },
  ];

  return (
    <main className="text-white min-h-screen relative">
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-libre)' }}>
          Graphic Design Projects
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          Visual identities, UI designs, and creative artwork showcasing design craft.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div key={project.title} className="glass rounded-3xl overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
