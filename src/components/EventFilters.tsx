
import { useState, useEffect } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Event } from '@/data/mockEvents';
import { EventFilters as FiltersType, getUniqueColleges, getUniqueEventTypes } from '@/lib/eventUtils';

interface EventFiltersProps {
  events: Event[];
  onFiltersChange: (filters: FiltersType) => void;
  className?: string;
}

const EventFilters = ({ events, onFiltersChange, className }: EventFiltersProps) => {
  const [search, setSearch] = useState('');
  const [eventType, setEventType] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<string | null>(null);
  const [toDate, setToDate] = useState<string | null>(null);
  
  const colleges = getUniqueColleges(events);
  const eventTypes = getUniqueEventTypes(events);
  
  useEffect(() => {
    onFiltersChange({
      search,
      eventType,
      college,
      fromDate,
      toDate
    });
  }, [search, eventType, college, fromDate, toDate, onFiltersChange]);
  
  const clearFilters = () => {
    setSearch('');
    setEventType(null);
    setCollege(null);
    setFromDate(null);
    setToDate(null);
  };
  
  return (
    <div className={cn("space-y-4 p-4 bg-white rounded-lg shadow", className)}>
      <h2 className="text-xl font-semibold flex items-center">
        <Filter className="h-5 w-5 mr-2" />
        Filter Events
      </h2>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events, locations, colleges..."
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="eventType">Event Type</Label>
        <Select
          value={eventType || ""}
          onValueChange={(value) => setEventType(value || null)}
        >
          <SelectTrigger id="eventType">
            <SelectValue placeholder="All event types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All event types</SelectItem>
            {eventTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="college">College</Label>
        <Select
          value={college || ""}
          onValueChange={(value) => setCollege(value || null)}
        >
          <SelectTrigger id="college">
            <SelectValue placeholder="All colleges" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All colleges</SelectItem>
            {colleges.map((collegeOption) => (
              <SelectItem key={collegeOption} value={collegeOption}>
                {collegeOption}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="fromDate" className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> 
          From date
        </Label>
        <Input
          id="fromDate"
          type="date"
          value={fromDate || ''}
          onChange={(e) => setFromDate(e.target.value || null)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="toDate" className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" /> 
          To date
        </Label>
        <Input
          id="toDate"
          type="date"
          value={toDate || ''}
          onChange={(e) => setToDate(e.target.value || null)}
        />
      </div>
      
      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Clear Filters
      </Button>
    </div>
  );
};

export default EventFilters;
