import { EventRow } from '@/lib/events';

export default function EventCard({ event, onClick }: { event: EventRow; onClick: () => void }) {
  const date = new Date(event.event_date).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
  const time = new Date(event.event_date).toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit',
  });
  const ticketNo = event.id.slice(0, 6).toUpperCase();

  return (
    <button
      onClick={onClick}
      className="ticket-rise relative w-full text-left rounded-md overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-yellow)]"
      style={{ backgroundColor: 'var(--ticket)', color: 'var(--ticket-ink)' }}
    >
      {event.poster_url ? (
        <img src={event.poster_url} alt="" className="w-full h-36 object-cover" />
      ) : (
        <div
          className="w-full h-36"
          style={{
            backgroundColor: 'var(--ticket)',
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(27,20,32,0.1) 0px, rgba(27,20,32,0.1) 10px, transparent 10px, transparent 22px)',
          }}
        />
      )}

      <div className="px-5 pt-5 pb-6">
        <h3 className="font-display text-2xl leading-none">{event.title}</h3>
        <p className="font-mono text-xs mt-2 opacity-70">
          {date} · {time}{event.venue ? ` · ${event.venue}` : ''}
        </p>
      </div>

      <div className="relative" style={{ borderTop: '2px dashed rgba(27,20,32,0.25)' }}>
        <span className="absolute -left-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
        <span className="absolute -right-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
      </div>

      <div className="flex items-center justify-between px-5 py-3 font-mono text-xs">
        <span>{event.registration_open ? 'ADMIT ONE' : 'SOLD OUT'}</span>
        <span className="opacity-60">№ {ticketNo}</span>
      </div>
    </button>
  );
}