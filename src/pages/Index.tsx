
import { useState } from 'react';
import { mockEvents, Event } from '@/data/mockEvents';
import { EventFilters } from '@/lib/eventUtils';
import { Button } from '@/components/ui/button';
import { Plus, List } from 'lucide-react';
import EventFiltersComponent from '@/components/EventFilters';
import EventsList from '@/components/EventsList';
import EventForm from '@/components/EventForm';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filters, setFilters] = useState<EventFilters>({
    search: '',
    eventType: null,
    college: null,
    fromDate: null,
    toDate: null,
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddEvent = (newEvent: Event) => {
    setEvents([newEvent, ...events]);
    setShowAddForm(false);
    toast({
      title: "Event Added",
      description: `"${newEvent.name}" has been added to the events list.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-event-blue to-event-purple text-white py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">College Event Horizon</h1>
          <p className="mt-2 text-lg">Discover tech talks, hackathons, and workshops across college campuses</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <List className="h-6 w-6 mr-2" /> 
            Upcoming Events
          </h2>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-event-purple hover:bg-event-indigo"
          >
            <Plus className="mr-1 h-4 w-4" />
            {showAddForm ? 'Close Form' : 'Add Event'}
          </Button>
        </div>

        {showAddForm && (
          <div className="mb-8">
            <EventForm 
              onAddEvent={handleAddEvent} 
              onCancel={() => setShowAddForm(false)} 
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <EventFiltersComponent 
                events={events} 
                onFiltersChange={setFilters} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <EventsList events={events} filters={filters} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">College Event Horizon</h2>
              <p className="text-gray-400 mt-1">Find and share college tech events</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-event-blue transition-colors">About</a>
              <a href="#" className="hover:text-event-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-event-blue transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} College Event Horizon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
