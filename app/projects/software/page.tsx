import Link from 'next/link';

export default function SoftwareProjects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with modern technologies.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      image: '/bg-d.jpg',
    },
    {
      title: 'Project 2',
      description: 'An interactive dashboard with real-time data visualization.',
      tech: ['JavaScript', 'Node.js', 'MongoDB'],
      image: '/bg-d.jpg',
    },
    {
      title: 'Project 3',
      description: 'A responsive e-commerce platform with payment integration.',
      tech: ['React', 'Stripe', 'Firebase'],
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
          Software Engineering Projects
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          A collection of web applications, tools, and interactive experiences built with modern technologies.
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
                  {project.tech.map((t) => (
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
