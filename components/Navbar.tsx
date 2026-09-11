'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/#upcoming' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#0d0914]/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Logo + Title */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3.5 group z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/favicon.ico"
              alt="Anime Club Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>

          <div className="flex flex-col justify-center select-none">
            <span className="font-display uppercase tracking-wider text-lg sm:text-xl leading-none text-[#f3efe6] group-hover:text-white transition-colors">
              ANIME CLUB
            </span>
            <span 
              className="font-display uppercase tracking-widest text-[9px] sm:text-[10px] mt-1 font-bold"
              style={{ color: 'var(--accent-pink)' }}
            >
              VIT BHOPAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`pb-1 transition-all ${
                      isActive 
                        ? 'text-white border-b-2' 
                        : 'text-white/65 hover:text-white'
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

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none z-50"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl transition-all"
          style={{ backgroundColor: 'rgba(13, 11, 20, 0.98)' }}
        >
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-sm flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-white font-bold bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: 'var(--accent-pink)' }} 
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}