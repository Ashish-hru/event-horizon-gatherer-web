
import { Event } from '@/data/mockEvents';
import { formatDate, formatTime } from '@/lib/eventUtils';
import { Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const eventTypeBgColor = {
    'hackathon': 'bg-event-purple text-white',
    'techTalk': 'bg-event-blue text-white',
    'workshop': 'bg-event-indigo text-white',
    'conference': 'bg-amber-500 text-white',
    'other': 'bg-gray-500 text-white',
  }[event.eventType] || 'bg-gray-500 text-white';
  
  const defaultImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop";
  
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.imageUrl || defaultImage} 
          alt={event.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold line-clamp-2">{event.name}</h3>
          <Badge className={cn("ml-2", eventTypeBgColor)}>
            {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
          </Badge>
        </div>
        <p className="font-semibold text-gray-600">{event.college}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500 line-clamp-3 mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="ml-6">{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <a 
          href={event.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-event-blue hover:text-event-purple transition-colors"
        >
          <LinkIcon className="h-4 w-4 mr-1" />
          <span>View Event</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
