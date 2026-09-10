import { supabase } from './supabase';

export type EventRow = {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  venue: string | null;
  poster_url: string | null;
  registration_open: boolean;
};

export async function getUpcomingEvents(): Promise<EventRow[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .gte('event_date', new Date().toISOString())
    .order('event_date', { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }
  return data;
}