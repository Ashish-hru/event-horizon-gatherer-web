
import { useState, useMemo } from 'react';
import { Event } from '@/data/mockEvents';
import EventCard from './EventCard';
import { filterEvents, EventFilters } from '@/lib/eventUtils';
import { cn } from '@/lib/utils';

interface EventsListProps {
  events: Event[];
  filters: EventFilters;
  className?: string;
}

const EventsList = ({ events, filters, className }: EventsListProps) => {
  const filteredEvents = useMemo(() => {
    return filterEvents(events, filters);
  }, [events, filters]);

  if (filteredEvents.length === 0) {
    return (
      <div className={cn("text-center py-8", className)}>
        <h3 className="text-xl font-medium text-gray-600">No events found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3", className)}>
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
