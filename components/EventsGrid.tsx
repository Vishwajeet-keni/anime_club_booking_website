'use client';
import { useState } from 'react';
import { EventRow } from '@/lib/events';
import EventCard from './EventCard';
import RegistrationModal from './RegistrationModal';

export default function EventsGrid({ 
  events, 
  emptyMessage = "No events found right now." 
}: { 
  events: EventRow[];
  emptyMessage?: string;
}) {
  const [selected, setSelected] = useState<EventRow | null>(null);

  if (events.length === 0) {
    return <p className="text-zinc-500 italic font-mono text-sm">{emptyMessage}</p>;
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => setSelected(event)} />
        ))}
      </div>
      {selected && (
        <RegistrationModal event={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}