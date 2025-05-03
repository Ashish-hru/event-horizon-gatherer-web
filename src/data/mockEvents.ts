
export interface Event {
  id: string;
  name: string;
  description: string;
  date: string; // ISO format
  startTime: string;
  endTime: string;
  location: string;
  college: string;
  eventType: 'hackathon' | 'techTalk' | 'workshop' | 'conference' | 'other';
  link: string;
  imageUrl?: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'AI Innovation Hackathon',
    description: 'A 24-hour hackathon focused on creating innovative AI solutions. Open to all college students with prizes totaling $5,000.',
    date: '2025-06-15',
    startTime: '09:00',
    endTime: '09:00',
    location: 'MIT Media Lab',
    college: 'MIT',
    eventType: 'hackathon',
    link: 'https://example.com/ai-hackathon',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Web3 Development Workshop',
    description: 'Learn the fundamentals of blockchain and Web3 development in this hands-on workshop led by industry experts.',
    date: '2025-05-20',
    startTime: '13:00',
    endTime: '17:00',
    location: 'CS Building, Room 305',
    college: 'Stanford University',
    eventType: 'workshop',
    link: 'https://example.com/web3-workshop',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Future of Robotics Tech Talk',
    description: 'Join Dr. Jane Smith as she discusses the latest advancements in robotics and what we can expect in the next decade.',
    date: '2025-05-10',
    startTime: '15:00',
    endTime: '16:30',
    location: 'Engineering Hall Auditorium',
    college: 'Carnegie Mellon University',
    eventType: 'techTalk',
    link: 'https://example.com/robotics-talk',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab98af64264?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Data Science Symposium',
    description: 'A day-long symposium featuring talks from leading researchers and practitioners in data science and machine learning.',
    date: '2025-07-05',
    startTime: '08:30',
    endTime: '17:00',
    location: 'Science Center',
    college: 'Harvard University',
    eventType: 'conference',
    link: 'https://example.com/data-symposium',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Cybersecurity Bootcamp',
    description: 'An intensive weekend bootcamp covering practical cybersecurity skills including penetration testing and threat analysis.',
    date: '2025-06-01',
    startTime: '09:00',
    endTime: '18:00',
    location: 'Technology Building',
    college: 'UC Berkeley',
    eventType: 'workshop',
    link: 'https://example.com/security-bootcamp'
  },
  {
    id: '6',
    name: 'Mobile App Design Challenge',
    description: 'Put your UI/UX skills to the test in this 12-hour design challenge. Create innovative mobile interfaces for real-world problems.',
    date: '2025-05-25',
    startTime: '10:00',
    endTime: '22:00',
    location: 'Design Studio',
    college: 'Rhode Island School of Design',
    eventType: 'hackathon',
    link: 'https://example.com/app-challenge',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Quantum Computing Seminar',
    description: 'An introduction to quantum computing principles and their potential applications in various fields.',
    date: '2025-06-20',
    startTime: '14:00',
    endTime: '16:00',
    location: 'Physics Building, Lecture Hall 2',
    college: 'Caltech',
    eventType: 'techTalk',
    link: 'https://example.com/quantum-seminar'
  },
  {
    id: '8',
    name: 'Green Tech Innovation Summit',
    description: 'A conference focused on sustainable technology solutions and environmental innovation.',
    date: '2025-07-15',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Environmental Science Center',
    college: 'Yale University',
    eventType: 'conference',
    link: 'https://example.com/green-tech-summit',
    imageUrl: 'https://images.unsplash.com/photo-1611095965923-b8b19341cc31?q=80&w=1471&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Game Development Workshop',
    description: 'Learn game development basics using Unity in this beginner-friendly hands-on workshop.',
    date: '2025-05-18',
    startTime: '13:00',
    endTime: '17:00',
    location: 'Computer Lab 3',
    college: 'New York University',
    eventType: 'workshop',
    link: 'https://example.com/game-dev-workshop'
  },
  {
    id: '10',
    name: 'AI Ethics Panel Discussion',
    description: 'Join leading ethicists and AI researchers for a critical discussion on the ethical implications of artificial intelligence.',
    date: '2025-06-05',
    startTime: '16:00',
    endTime: '18:00',
    location: 'Philosophy Department',
    college: 'Princeton University',
    eventType: 'techTalk',
    link: 'https://example.com/ai-ethics'
  }
];
