'use client';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dineshi-christina-perera/' },
    { name: 'Gmail', href: 'mailto:dineshiperera05@gmail.com' },
    { name: 'WhatsApp', href: 'https://wa.me/94787932390' },
    { name: 'Instagram', href: 'https://www.instagram.com/neshiizz/' },
    { name: 'GitHub', href: 'https://github.com/neshiy' },
  ];

  return (
    <footer className="section py-12">
      <div className="container flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition"
              aria-label={s.name}
            >
              {s.name.charAt(0)}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Christina Perera. All rights reserved.</p>
      </div>
    </footer>
  );
}
