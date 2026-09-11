# 🎟️ Otaku Club VIT Bhopal — Event Management Platform

The official web portal and event reservation platform for the **Otaku (Anime) Club at VIT Bhopal University**. Built with a dark cinematic "ticket stub" aesthetic, featuring automated email-based event ingestion, real-time seat ticketing, and club communications.

---

## ✨ Features

- **Cinematic Ticket UI:** Vintage perforated admission passes featuring custom notch styling, status tracking (`ADMIT ONE`, `EVENT ENDED`), and smooth layout transitions.
- **Dynamic Event Feeds:** Real-time database queries splitting events into **Upcoming Sessions** and **Past Highlights** based on event timestamps.
- **Automated Event Ingestion:** Dedicated webhook endpoint (`/api/ingest-event`) integrated with Google Apps Script to parse campus announcement emails directly into Supabase.
- **Adaptive Responsive Layout:** Mobile-optimized navigation with an interactive slide-down menu and touch-friendly layouts across phones, tablets, and desktops.
- **Student Transmission Hub:** Dedicated contact and collaboration dispatch system for recruitment queries, screening proposals, and booking assistance.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database & Backend:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Automation:** Google Apps Script (Gmail webhook pipeline)
- **Deployment:** [Vercel](https://vercel.com/)
- **Language:** TypeScript

---

## 🗄️ Database Architecture

The core catalog runs on Supabase under the `events` table:

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  description TEXT,
  event_date TIMESTAMPTZ NOT NULL,
  venue TEXT,
  poster_url TEXT,
  registration_open BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);