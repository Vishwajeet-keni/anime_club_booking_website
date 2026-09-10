// app/page.tsx
import { getUpcomingEvents, getPastEvents } from '@/lib/events';
import EventsGrid from '@/components/EventsGrid';
import Navbar from '@/components/Navbar';

export default async function Home() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <main className="relative z-10 px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <header className="hero-flicker mb-16">
            <h1 className="font-display leading-[0.85]">
              <span className="block text-6xl sm:text-8xl">Anime Club</span>
              <span className="block text-3xl sm:text-4xl mt-3" style={{ color: 'var(--accent-pink)' }}>
                VIT Bhopal
              </span>
            </h1>
            <p className="mt-6 max-w-sm text-base" style={{ color: 'var(--text-muted)' }}>
              Screenings, quiz nights and cosplay meets — browse upcoming sessions or past highlights.
            </p>
          </header>

          {/* UPCOMING SECTION */}
          <section id="upcoming" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="font-display text-3xl">Upcoming Events</h2>
            </div>
            {upcomingEvents.length > 0 ? (
              <EventsGrid events={upcomingEvents} />
            ) : (
              <p className="text-white/40 italic">No upcoming events scheduled right now.</p>
            )}
          </section>

          {/* PAST EVENTS SECTION */}
          <section id="past">
            <div className="flex items-center justify-between border-t border-white/10 pt-12 mb-6">
              <h2 className="font-display text-3xl text-white/70">Past Events</h2>
              <span className="text-xs text-white/40 uppercase tracking-widest">
                Showing last {pastEvents.length} events
              </span>
            </div>
            {pastEvents.length > 0 ? (
              <div className="opacity-75 grayscale-[25%] hover:grayscale-0 transition-all">
                <EventsGrid events={pastEvents} />
              </div>
            ) : (
              <p className="text-white/40 italic">No past events found.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}