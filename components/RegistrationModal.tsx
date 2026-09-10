'use client';
import { useState } from 'react';
import { EventRow } from '@/lib/events';
import { supabase } from '@/lib/supabase';

export default function RegistrationModal({ event, onClose }: { event: EventRow; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', registration_number: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('registrations').insert({
      event_id: event.id,
      ...form,
    });
    if (error) {
      setStatus('error');
      setErrorMsg(error.code === '23505' ? "You've already reserved a seat with this registration number." : 'Something went wrong — try again.');
      return;
    }
    setStatus('success');
  }

  const inputClass =
    "w-full rounded-sm px-3 py-2 text-sm outline-none border focus:ring-2 focus:ring-[var(--accent-yellow)]";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: 'rgba(13,11,20,0.8)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-md overflow-hidden"
        style={{ backgroundColor: 'var(--ticket)', color: 'var(--ticket-ink)', animation: 'rise-in 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-5 pt-5">
          <div>
            <p className="font-mono text-xs opacity-60">Reserve your seat</p>
            <h2 className="font-display text-3xl leading-none mt-1">{event.title}</h2>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-lg opacity-50 hover:opacity-100">✕</button>
        </div>

        <div className="px-5 pb-5 pt-4">
          {status === 'success' ? (
            <p className="text-sm">
              Seat reserved. Bring your registration number to the door.
            </p>
          ) : !event.registration_open ? (
            <p className="text-sm opacity-70">Registrations are closed for this event.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input required placeholder="Full name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass} style={{ borderColor: 'rgba(27,20,32,0.2)', backgroundColor: '#fff' }} />
              <input required placeholder="Registration number" value={form.registration_number}
                onChange={(e) => setForm({ ...form, registration_number: e.target.value })}
                className={inputClass} style={{ borderColor: 'rgba(27,20,32,0.2)', backgroundColor: '#fff' }} />
              <input required type="email" placeholder="Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass} style={{ borderColor: 'rgba(27,20,32,0.2)', backgroundColor: '#fff' }} />
              <input placeholder="Phone (optional)" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass} style={{ borderColor: 'rgba(27,20,32,0.2)', backgroundColor: '#fff' }} />
              {status === 'error' && <p className="text-xs" style={{ color: 'var(--accent-pink)' }}>{errorMsg}</p>}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-sm py-2.5 font-mono text-sm disabled:opacity-50 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--accent-pink)', color: 'var(--ticket)' }}
              >
                {status === 'submitting' ? 'Reserving…' : 'Reserve seat'}
              </button>
            </form>
          )}
        </div>

        <div className="relative mt-1" style={{ borderTop: '2px dashed rgba(27,20,32,0.2)' }}>
          <span className="absolute -left-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
          <span className="absolute -right-2.5 -top-2.5 w-5 h-5 rounded-full" style={{ backgroundColor: 'var(--bg)' }} />
        </div>
        <div className="flex justify-between px-5 py-3 font-mono text-xs opacity-60">
          <span>ADMIT ONE</span>
          <span>№ {event.id.slice(0, 6).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}