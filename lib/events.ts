import { supabase } from '@/lib/supabase';

export interface EventRow {
  id: string;
  title: string;
  description: string;
  event_date: string;
  venue: string | null;
  poster_url: string | null;
  registration_open: boolean;
  created_at?: string;
}

export type AnimeEvent = EventRow;

export async function getUpcomingEvents(): Promise<EventRow[]> {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('event_date', now)
    .order('event_date', { ascending: true });

  if (error) {
    console.error('Error fetching upcoming events:', error.message || error);
    return [];
  }
  return data ?? [];
}

export async function getPastEvents(): Promise<EventRow[]> {
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .lt('event_date', now)
    .order('event_date', { ascending: false })
    .limit(20);

  if (error) {
    console.error('Error fetching past events:', error.message || error);
    return [];
  }
  return data ?? [];
}