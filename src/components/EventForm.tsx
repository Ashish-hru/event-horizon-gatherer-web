
import { useState } from 'react';
import { Event } from '@/data/mockEvents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

interface EventFormProps {
  onAddEvent: (event: Event) => void;
  onCancel: () => void;
}

const EventForm = ({ onAddEvent, onCancel }: EventFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<Event>>({
    eventType: 'other',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name?.trim()) newErrors.name = 'Event name is required';
    if (!formData.description?.trim()) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.startTime) newErrors.startTime = 'Start time is required';
    if (!formData.endTime) newErrors.endTime = 'End time is required';
    if (!formData.location?.trim()) newErrors.location = 'Location is required';
    if (!formData.college?.trim()) newErrors.college = 'College name is required';
    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    if (!formData.link?.trim()) newErrors.link = 'Event link is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newEvent: Event = {
        id: Date.now().toString(), // Generate a unique ID
        name: formData.name!,
        description: formData.description!,
        date: formData.date!,
        startTime: formData.startTime!,
        endTime: formData.endTime!,
        location: formData.location!,
        college: formData.college!,
        eventType: formData.eventType as Event['eventType'],
        link: formData.link!,
        imageUrl: formData.imageUrl,
      };
      
      onAddEvent(newEvent);
      toast({
        title: "Event Submitted",
        description: "Your event has been successfully submitted.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center">
          <Upload className="h-5 w-5 mr-2" />
          Submit New Event
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Event Name*</Label>
          <Input
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description*</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            rows={4}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date*</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date || ''}
              onChange={handleChange}
              className={errors.date ? "border-red-500" : ""}
            />
            {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time*</Label>
              <Input
                id="startTime"
                name="startTime"
                type="time"
                value={formData.startTime || ''}
                onChange={handleChange}
                className={errors.startTime ? "border-red-500" : ""}
              />
              {errors.startTime && <p className="text-red-500 text-xs">{errors.startTime}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time*</Label>
              <Input
                id="endTime"
                name="endTime"
                type="time"
                value={formData.endTime || ''}
                onChange={handleChange}
                className={errors.endTime ? "border-red-500" : ""}
              />
              {errors.endTime && <p className="text-red-500 text-xs">{errors.endTime}</p>}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location*</Label>
          <Input
            id="location"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className={errors.location ? "border-red-500" : ""}
            placeholder="Building, Room number"
          />
          {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="college">College/University*</Label>
          <Input
            id="college"
            name="college"
            value={formData.college || ''}
            onChange={handleChange}
            className={errors.college ? "border-red-500" : ""}
          />
          {errors.college && <p className="text-red-500 text-xs">{errors.college}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type*</Label>
          <Select
            value={formData.eventType}
            onValueChange={handleSelectChange('eventType')}
          >
            <SelectTrigger id="eventType" className={errors.eventType ? "border-red-500" : ""}>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hackathon">Hackathon</SelectItem>
              <SelectItem value="techTalk">Tech Talk</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.eventType && <p className="text-red-500 text-xs">{errors.eventType}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="link">Event Link*</Label>
          <Input
            id="link"
            name="link"
            value={formData.link || ''}
            onChange={handleChange}
            className={errors.link ? "border-red-500" : ""}
            placeholder="https://..."
          />
          {errors.link && <p className="text-red-500 text-xs">{errors.link}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL (optional)</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl || ''}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>
        
        <div className="flex space-x-3 pt-2">
          <Button type="submit" className="bg-event-blue hover:bg-event-indigo">
            Submit Event
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;
