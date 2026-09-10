'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', regNo: '', message: '', subject: 'general' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-sm px-3.5 py-2.5 text-sm outline-none border focus:ring-2 focus:ring-[var(--accent-yellow)] bg-black/40 text-white border-white/15 placeholder-white/30";

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />

      <main className="relative z-10 px-6 py-12 sm:py-16 max-w-5xl mx-auto">
        <header className="mb-12">
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent-pink)' }}>
            Get In Touch
          </p>
          <h1 className="font-display text-5xl sm:text-7xl leading-none text-white">
            Connect With The Guild
          </h1>
          <p className="mt-4 max-w-xl text-base opacity-75" style={{ color: 'var(--text-muted)' }}>
            Questions about our screenings, ticket reservations, or club recruitments? Reach out below.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Details & Socials (2 cols) */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-md border border-white/10 bg-white/[0.02]">
              <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">Headquarters</h3>
              <p className="font-display text-xl text-white">VIT Bhopal University</p>
              <p className="text-sm font-mono opacity-60 mt-1 leading-relaxed">
                Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh – 466114
              </p>
            </div>

            <div className="p-6 rounded-md border border-white/10 bg-white/[0.02] space-y-4 font-mono text-xs">
              <div>
                <span className="block opacity-50 uppercase tracking-widest mb-1">Official Email</span>
                <a href="mailto:animeclub@vitbhopal.ac.in" className="text-white hover:underline">
                  animeclub@vitbhopal.ac.in
                </a>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="block opacity-50 uppercase tracking-widest mb-1">ECA Club Code</span>
                <span className="text-white font-bold">OTAKU-VITB</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="block opacity-50 uppercase tracking-widest mb-1">Social Communities</span>
                <div className="flex gap-4 pt-1 text-sm font-sans text-white/80">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-pink)] transition-colors">Instagram ↗</a>
                  <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-pink)] transition-colors">Discord ↗</a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-pink)] transition-colors">YouTube ↗</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Ticket stub (3 cols) */}
          <div 
            className="md:col-span-3 rounded-lg p-6 sm:p-8 border border-white/10 shadow-2xl relative"
            style={{ backgroundColor: 'var(--ticket)', color: 'var(--ticket-ink)' }}
          >
            <div className="flex justify-between items-center pb-4 border-b border-black/10 mb-6">
              <div>
                <p className="font-mono text-xs opacity-60">TRANSMISSION DISPATCH</p>
                <h2 className="font-display text-2xl leading-none mt-1">Send a Message</h2>
              </div>
              <span className="font-mono text-xs opacity-50">VITB // ECA</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display text-3xl text-emerald-600">Message Received!</p>
                <p className="font-mono text-xs opacity-80 mt-2 max-w-xs mx-auto">
                  A core committee member will follow up at your university email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs underline opacity-70 hover:opacity-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] opacity-70 uppercase mb-1">Full Name</label>
                    <input 
                      required 
                      placeholder="Spike Spiegel" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                      className={inputClass}
                      style={{ backgroundColor: '#ffffff', color: '#1b1420', borderColor: 'rgba(27,20,32,0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] opacity-70 uppercase mb-1">Reg Number</label>
                    <input 
                      required 
                      placeholder="2XBCEXXXX" 
                      value={form.regNo} 
                      onChange={(e) => setForm({ ...form, regNo: e.target.value })} 
                      className={inputClass}
                      style={{ backgroundColor: '#ffffff', color: '#1b1420', borderColor: 'rgba(27,20,32,0.2)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] opacity-70 uppercase mb-1">VIT Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="student@vitbhopal.ac.in" 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    className={inputClass}
                    style={{ backgroundColor: '#ffffff', color: '#1b1420', borderColor: 'rgba(27,20,32,0.2)' }}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] opacity-70 uppercase mb-1">Subject</label>
                  <select 
                    value={form.subject} 
                    onChange={(e) => setForm({ ...form, subject: e.target.value })} 
                    className={inputClass}
                    style={{ backgroundColor: '#ffffff', color: '#1b1420', borderColor: 'rgba(27,20,32,0.2)' }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Event Ticket / Booking Issue</option>
                    <option value="recruitment">Club Recruitment 2026-27</option>
                    <option value="collab">Club Collaboration / Screening Proposal</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] opacity-70 uppercase mb-1">Your Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Drop your query, suggestions or favorite anime recommendations..."
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    className={inputClass}
                    style={{ backgroundColor: '#ffffff', color: '#1b1420', borderColor: 'rgba(27,20,32,0.2)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-mono text-sm uppercase font-bold tracking-wider rounded-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent-pink)', color: 'var(--ticket)' }}
                >
                  Transmit Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}