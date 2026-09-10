// components/Navbar.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/#upcoming' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#0d0914]/80">
      <div className="max-w-5xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Brand: Logo + Styled Header */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/favicon.ico"
              alt="Anime Club Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>

          <div className="flex flex-col justify-center select-none">
            <span className="font-display uppercase tracking-wider text-2xl leading-none text-[#f3efe6] transition-colors group-hover:text-white">
              ANIME CLUB
            </span>
            <span 
              className="font-display uppercase tracking-widest text-xs mt-1.5 font-bold"
              style={{ color: 'var(--accent-pink)' }}
            >
              VIT BHOPAL
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`pb-1 transition-all ${
                      isActive 
                        ? 'text-white border-b-2' 
                        : 'text-white/60 hover:text-white'
                    }`}
                    style={{ borderColor: isActive ? 'var(--accent-pink)' : 'transparent' }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
}