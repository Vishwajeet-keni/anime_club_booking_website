// app/api/ingest-event/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('Authorization');
    const expectedSecret = process.env.SYNC_SECRET_TOKEN;

    if (!expectedSecret || authHeader !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { subject, body, dateReceived, eventDate } = await req.json();

    if (!body && !subject) {
      return NextResponse.json({ error: 'Empty payload' }, { status: 400 });
    }

    const parsedDate = eventDate ? new Date(eventDate) : new Date(dateReceived || Date.now());
    const isPast = parsedDate.getTime() < Date.now();

    // Only include columns that actually exist in your Supabase 'events' table
    const eventRecord = {
      title: subject?.replace(/\[.*?\]/g, '').trim() || 'Anime Club Event',
      description: body ? body.slice(0, 300).trim() + '...' : '',
      event_date: parsedDate.toISOString(),
      venue: 'Auditorium / Campus',
      registration_open: !isPast,
    };

    const { data, error } = await supabase
      .from('events')
      .upsert(eventRecord, { onConflict: 'title' })
      .select();

    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, event: data });
  } catch (err: any) {
    console.error('Ingest route error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}