import { getUpcomingEvents } from '@/lib/events';
import EventsGrid from '@/components/EventsGrid';

export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <main className="relative z-10 min-h-screen px-6 py-16 sm:py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <header className="hero-flicker mb-16">
          <h1 className="font-display leading-[0.85]">
            <span className="block text-6xl sm:text-8xl">Anime Club</span>
            <span className="block text-3xl sm:text-4xl mt-3" style={{ color: 'var(--accent-pink)' }}>
              VIT Bhopal
            </span>
          </h1>
          <p className="mt-6 max-w-sm text-base" style={{ color: 'var(--text-muted)' }}>
            Screenings, quiz nights and cosplay meets — pick an event below and reserve your seat.
          </p>
        </header>

        <h2 className="font-display text-3xl mb-6">Upcoming</h2>

        <EventsGrid events={events} />
      </div>
    </main>
  );
}