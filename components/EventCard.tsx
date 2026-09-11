// components/EventCard.tsx
import { EventRow } from '@/lib/events';

export default function EventCard({ event, onClick }: { event: EventRow; onClick: () => void }) {
  const eventDateObj = new Date(event.event_date);
  const isPast = eventDateObj.getTime() < Date.now();

  const date = eventDateObj.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
  const time = eventDateObj.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit',
  });
  const ticketNo = event.id.slice(0, 6).toUpperCase();

  let ticketStatus = 'ADMIT ONE';
  if (isPast) {
    ticketStatus = 'EVENT ENDED';
  } else if (!event.registration_open) {
    ticketStatus = 'REGISTRATION CLOSED';
  }

  return (
    <button
      onClick={onClick}
      className={`ticket-rise relative w-full text-left rounded-md overflow-hidden shadow-2xl transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-pink)] ${
        isPast ? 'opacity-80 hover:opacity-100' : ''
      }`}
      style={{ backgroundColor: 'var(--ticket)', color: 'var(--ticket-ink)' }}
    >
      {event.poster_url ? (
        <img 
          src={event.poster_url} 
          alt={event.title} 
          className={`w-full h-40 object-cover ${isPast ? 'grayscale-[35%]' : ''}`} 
        />
      ) : (
        <div
          className="w-full h-40"
          style={{
            backgroundColor: 'var(--ticket)',
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(27,20,32,0.06) 0px, rgba(27,20,32,0.06) 10px, transparent 10px, transparent 22px)',
          }}
        />
      )}

      <div className="px-5 pt-5 pb-5">
        <h3 className="font-display text-2xl leading-none">{event.title}</h3>
        <p className="font-mono text-xs mt-2" style={{ color: 'var(--ticket-muted)' }}>
          {date} · {time}{event.venue ? ` · ${event.venue}` : ''}
        </p>
      </div>

      {/* Perforation line */}
      <div className="relative" style={{ borderTop: '2px dashed var(--ticket-border)' }}>
        <span className="absolute -left-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
        <span className="absolute -right-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
      </div>

      <div className="flex items-center justify-between px-5 py-3 font-mono text-xs">
        <span className={isPast || !event.registration_open ? 'opacity-60' : 'font-bold'} style={{ color: !isPast && event.registration_open ? 'var(--accent-pink)' : 'inherit' }}>
          {ticketStatus}
        </span>
        <span style={{ color: 'var(--ticket-muted)' }}>№ {ticketNo}</span>
      </div>
    </button>
  );
}