import { getPastEvents, getUpcomingEvents } from '@/lib/events';
import EventsGrid from '@/components/EventsGrid';
import Navbar from '@/components/Navbar';

export default async function Home() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <Navbar />

      <main className="relative z-10 px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <section className="mb-20 pt-4">
            <p
              className="font-mono text-xs uppercase tracking-[0.25em]"
              style={{ color: 'var(--accent-pink)' }}
            >
              A place for fans, creators and curious minds
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.9] sm:text-7xl">
              Where stories become
              <span
                className="block"
                style={{ color: 'var(--accent-pink)' }}
              >
                experiences.
              </span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-base leading-7 sm:text-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              A student community built around anime, manga and Japanese
              pop culture. From screenings and quiz nights to cosplay and
              creative events, we bring fans together to watch, compete,
              create and share what they love.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#upcoming"
                className="rounded-sm px-5 py-3 font-mono text-sm transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: 'var(--accent-pink)',
                  color: 'var(--ticket)',
                }}
              >
                Explore events
              </a>

              <a
                href="/about"
                className="rounded-sm border px-5 py-3 font-mono text-sm transition-colors"
                style={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  color: 'var(--text)',
                }}
              >
                About the club
              </a>
            </div>

            {/* HERO HIGHLIGHTS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div
                className="rounded-md border p-5"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'var(--accent-pink)' }}
                >
                  01 / Watch
                </p>

                <h2 className="mt-3 font-display text-2xl">
                  Screen together
                </h2>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Enjoy anime screenings and revisit favourite stories
                  with other fans.
                </p>
              </div>

              <div
                className="rounded-md border p-5"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'var(--accent-pink)' }}
                >
                  02 / Compete
                </p>

                <h2 className="mt-3 font-display text-2xl">
                  Test your knowledge
                </h2>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Take on quizzes, challenges and activities made for
                  casual viewers and dedicated fans.
                </p>
              </div>

              <div
                className="rounded-md border p-5"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: 'var(--accent-pink)' }}
                >
                  03 / Create
                </p>

                <h2 className="mt-3 font-display text-2xl">
                  Bring fandom to life
                </h2>

                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Express your interests through cosplay, creativity,
                  collaboration and club activities.
                </p>
              </div>
            </div>
          </section>

          {/* UPCOMING EVENTS */}
          <section id="upcoming" className="mb-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              <h2 className="font-display text-3xl">
                Upcoming Events
              </h2>
            </div>

            {upcomingEvents.length > 0 ? (
              <EventsGrid events={upcomingEvents} />
            ) : (
              <p className="text-white/40 italic">
                No upcoming events scheduled right now.
              </p>
            )}
          </section>

          {/* PAST EVENTS */}
          <section id="past">
            <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-12">
              <h2 className="font-display text-3xl text-white/70">
                Past Events
              </h2>

              <span className="hidden text-xs uppercase tracking-widest text-white/40 sm:block">
                Showing last {pastEvents.length} events
              </span>
            </div>

            {pastEvents.length > 0 ? (
              <div className="opacity-75 grayscale-[25%] transition-all hover:grayscale-0">
                <EventsGrid events={pastEvents} />
              </div>
            ) : (
              <p className="text-white/40 italic">
                No past events found.
              </p>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}