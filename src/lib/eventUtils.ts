
import { Event } from '@/data/mockEvents';

export interface EventFilters {
  search: string;
  eventType: string | null;
  college: string | null;
  fromDate: string | null;
  toDate: string | null;
}

export const filterEvents = (events: Event[], filters: EventFilters): Event[] => {
  return events.filter(event => {
    // Filter by search term (check name and description)
    if (filters.search && !(
      event.name.toLowerCase().includes(filters.search.toLowerCase()) || 
      event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.college.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.location.toLowerCase().includes(filters.search.toLowerCase())
    )) {
      return false;
    }
    
    // Filter by event type
    if (filters.eventType && event.eventType !== filters.eventType) {
      return false;
    }
    
    // Filter by college
    if (filters.college && event.college !== filters.college) {
      return false;
    }
    
    // Filter by date range
    if (filters.fromDate && new Date(event.date) < new Date(filters.fromDate)) {
      return false;
    }
    
    if (filters.toDate && new Date(event.date) > new Date(filters.toDate)) {
      return false;
    }
    
    return true;
  });
};

export const getUniqueColleges = (events: Event[]): string[] => {
  const colleges = new Set<string>();
  events.forEach(event => {
    colleges.add(event.college);
  });
  return Array.from(colleges).sort();
};

export const getUniqueEventTypes = (events: Event[]): string[] => {
  const types = new Set<string>();
  events.forEach(event => {
    types.add(event.eventType);
  });
  return Array.from(types).sort();
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};
