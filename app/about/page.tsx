import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Anwesha Rout',
      role: 'Core Member — Photography Team',
      location: 'Bengaluru, KA',
      avatar: '📸',
    },
    {
      name: 'Soumallaya Mukherjee',
      role: 'Core Member — PR Team',
      location: 'Bhopal, MP',
      avatar: '📢',
    },
    {
      name: 'Ekash Ananjan',
      role: 'Core Member — Management Team',
      location: 'Vellore, TN',
      avatar: '🎯',
    },
  ];

  const clubStats = [
    { label: 'Founded', value: '2020' },
    { label: 'Core Team', value: '15+ Members' },
    { label: 'Campus Community', value: '500+ Weebs' },
    { label: 'Category', value: 'ECA / Cultural' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <main className="relative z-10 px-6 py-12 sm:py-16 max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-14">
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent-pink)' }}>
            Behind The Screen
          </p>
          <h1 className="font-display text-5xl sm:text-7xl leading-none text-white">
            Otaku Club VIT Bhopal
          </h1>
          <p className="mt-4 max-w-2xl text-base opacity-75 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            The ultimate haven for anime and manga enthusiasts at VIT Bhopal University.
          </p>
        </header>

        {/* Story & Mission Bento Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div 
            className="md:col-span-2 rounded-lg p-6 sm:p-8 border border-white/10 shadow-xl"
            style={{ backgroundColor: 'var(--ticket)', color: 'var(--ticket-ink)' }}
          >
            <span className="font-mono text-xs opacity-60 uppercase tracking-wider block mb-3">Our Manifesto</span>
            <h2 className="font-display text-3xl mb-4 leading-snug">
              We eat, sleep, and breathe anime.
            </h2>
            <p className="text-sm leading-relaxed opacity-85 space-y-3">
              Dive into the vibrant world of Japanese animation and manga with us. Otaku Club is not just a campus student chapter; it is a celebration of extraordinary stories, complex characters, and imaginative worlds that anime brings to our lives.
            </p>
            <p className="text-sm leading-relaxed opacity-85 mt-3">
              From high-stakes trivia nights and cosplay conventions to campus movie screenings and artistic showcases, we bring the anime community together to create memories that last through college and beyond.
            </p>
          </div>

          {/* Quick Stats Ticket */}
          <div 
            className="rounded-lg p-6 border border-white/10 flex flex-col justify-between"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            <div>
              <span className="font-mono text-xs opacity-50 uppercase tracking-widest block mb-4">
                Club Vitals
              </span>
              <div className="space-y-4 font-mono text-xs">
                {clubStats.map((stat) => (
                  <div key={stat.label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-60">{stat.label}</span>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dashed border-white/15">
              <Link 
                href="/contact" 
                className="w-full inline-block text-center py-2.5 rounded-sm font-mono text-xs transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-pink)', color: 'var(--ticket)' }}
              >
                Join Next Recruitment →
              </Link>
            </div>
          </div>
        </div>

        {/* Core Team Showcase */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
            <h2 className="font-display text-3xl text-white">Core Leads & Coordinators</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="p-5 rounded-md border border-white/10 relative overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <div className="w-12 h-12 rounded-md flex items-center justify-center text-2xl mb-4 bg-white/5 border border-white/10">
                  {member.avatar}
                </div>
                <h3 className="font-display text-xl text-white tracking-wide">{member.name}</h3>
                <p className="font-mono text-xs mt-1" style={{ color: 'var(--accent-pink)' }}>
                  {member.role}
                </p>
                <p className="font-mono text-[11px] opacity-40 mt-2">
                  📍 {member.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}