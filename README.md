
# College Event Horizon

## Overview

College Event Horizon is a web platform that aggregates and displays tech events happening across different college campuses. The platform helps students discover hackathons, tech talks, workshops, and other tech events in one centralized location.

![College Event Horizon Screenshot](https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop)

## Features

- **Event Dashboard**: Browse upcoming tech events from various colleges in a clean, card-based layout
- **Advanced Filtering**: Filter events by type, college, date range, or search by keywords
- **Event Submission**: Submit new events to the platform with a comprehensive form
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with a custom configuration for consistent design
- **UI Components**: Custom components built on shadcn/ui
- **Icons**: Lucide React icons
- **State Management**: React's useState and useEffect hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```sh
git clone https://github.com/your-username/college-event-horizon.git
cd college-event-horizon
```

2. Install dependencies
```sh
npm install
# or
yarn
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/           # UI components
│   ├── EventCard.tsx     # Individual event card
│   ├── EventFilters.tsx  # Filtering sidebar
│   ├── EventForm.tsx     # Event submission form
│   └── EventsList.tsx    # Grid of event cards
├── data/
│   └── mockEvents.ts     # Mock event data (could be replaced with API)
├── lib/
│   └── eventUtils.ts     # Utility functions for events
└── pages/
    └── Index.tsx         # Main page
```

## Future Enhancements

- **User Authentication**: Allow users to create accounts to track favorite events
- **Web Scraping Integration**: Automate collection of events from college websites
- **Notification System**: Alert users about upcoming events they're interested in
- **Calendar Export**: Add events to personal calendars (Google, iCal, etc.)
- **Event Recommendation**: Suggest events based on user preferences and history

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All college event organizers for their great work
- The open source community for providing excellent tools and libraries
