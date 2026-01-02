export interface MuseumEvent {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  endTime: string;
  type: 'workshop' | 'competition' | 'special' | 'screening' | 'meetup';
  ageGroup: 'all-ages' | 'kids' | 'teens' | 'adults';
  price: number;
  capacity: number;
  spotsLeft: number;
  location: string;
  instructor?: string;
  image: string;
  tags: string[];
  isRecurring: boolean;
  recurringSchedule?: string;
}

export const events: MuseumEvent[] = [
  {
    id: '1',
    slug: 'beginner-redstone-workshop',
    name: 'Beginner Redstone Workshop',
    description: 'Learn the basics of redstone circuitry with hands-on activities.',
    longDescription: `Join our expert instructors for a hands-on introduction to Minecraft's electrical system. You'll learn the fundamentals of redstone power, signal transmission, and basic logic gates.

    By the end of this workshop, you'll have built your own working redstone door and understand the principles behind more complex contraptions.
    
    All materials provided. No prior experience necessary.`,
    date: '2026-01-14',
    time: '10:00',
    endTime: '12:00',
    type: 'workshop',
    ageGroup: 'all-ages',
    price: 25,
    capacity: 20,
    spotsLeft: 5,
    location: 'Workshop Room A',
    instructor: 'RedstoneWizard (Sarah Chen)',
    image: '/images/events/redstone-workshop.jpg',
    tags: ['redstone', 'beginner', 'hands-on'],
    isRecurring: true,
    recurringSchedule: 'Every Saturday'
  },
  {
    id: '2',
    slug: 'speedrun-showdown',
    name: 'Speedrun Showdown',
    description: 'Compete against other visitors in our monthly speedrun competition.',
    longDescription: `Think you have what it takes to beat the dragon in record time? Our monthly Speedrun Showdown puts visitors against each other in a race to complete Minecraft as fast as possible.

    Compete in categories including Any% Glitchless, Set Seed, and our special "Museum Challenge" category with unique constraints.
    
    Prizes include museum memberships, exclusive merchandise, and the glory of seeing your name on our leaderboard.`,
    date: '2026-01-19',
    time: '14:00',
    endTime: '18:00',
    type: 'competition',
    ageGroup: 'teens',
    price: 15,
    capacity: 32,
    spotsLeft: 12,
    location: 'Speedrunner\'s Sanctum',
    image: '/images/events/speedrun-showdown.jpg',
    tags: ['competition', 'speedrun', 'prizes'],
    isRecurring: true,
    recurringSchedule: 'Third Saturday of each month'
  },
  {
    id: '3',
    slug: 'minecraft-movie-night',
    name: 'Minecraft Movie Night: Community Documentaries',
    description: 'Watch community-made documentaries about Minecraft\'s history.',
    longDescription: `Settle into our theater for a curated selection of the best Minecraft documentaries and video essays. This month's theme: "The Rise of Speedrunning."

    Features include clips from famous speedrunners, analysis of world record progression, and exclusive interviews with community legends.
    
    Popcorn and drinks available for purchase. Doors open 30 minutes before showtime.`,
    date: '2026-01-24',
    time: '19:00',
    endTime: '21:30',
    type: 'screening',
    ageGroup: 'all-ages',
    price: 10,
    capacity: 100,
    spotsLeft: 45,
    location: 'The Blockworks Theater',
    image: '/images/events/movie-night.jpg',
    tags: ['screening', 'documentary', 'community'],
    isRecurring: true,
    recurringSchedule: 'Last Saturday of each month'
  },
  {
    id: '4',
    slug: 'kids-building-camp',
    name: 'Kids Building Camp',
    description: 'A full-day creative building experience for young architects.',
    longDescription: `Let your child's creativity run wild in our full-day building camp! Under the guidance of experienced builders, kids will learn construction techniques, design principles, and teamwork.

    The day includes guided building challenges, free creative time, and a showcase where kids present their creations to parents at pickup.
    
    Lunch and snacks provided. Please note any allergies at registration.`,
    date: '2026-01-17',
    time: '09:00',
    endTime: '16:00',
    type: 'workshop',
    ageGroup: 'kids',
    price: 75,
    capacity: 16,
    spotsLeft: 4,
    location: 'Education Center',
    instructor: 'The Build Team',
    image: '/images/events/kids-camp.jpg',
    tags: ['kids', 'building', 'full-day', 'creative'],
    isRecurring: false
  },
  {
    id: '5',
    slug: 'meet-the-devs',
    name: 'Meet the Devs: Special Q&A Session',
    description: 'A rare opportunity to meet Minecraft developers and ask your questions.',
    longDescription: `We're thrilled to host members of the Mojang development team for an exclusive Q&A session. Learn about upcoming features, hear behind-the-scenes stories, and get your burning questions answered.

    Limited seating available. Diamond Pass members get priority access and reserved front-row seating.
    
    Photo opportunities and autograph session following the Q&A.`,
    date: '2026-02-14',
    time: '15:00',
    endTime: '17:00',
    type: 'special',
    ageGroup: 'all-ages',
    price: 35,
    capacity: 150,
    spotsLeft: 23,
    location: 'Main Auditorium',
    image: '/images/events/meet-devs.jpg',
    tags: ['special', 'developers', 'Q&A', 'exclusive'],
    isRecurring: false
  },
  {
    id: '6',
    slug: 'cosplay-day',
    name: 'Cosplay Day',
    description: 'Dress as your favorite Minecraft character and join the parade!',
    longDescription: `Bring your best Minecraft costume and join fellow fans for our quarterly Cosplay Day! Whether you're an Enderman, Steve, Alex, or a custom skin, everyone is welcome.

    Events include a costume contest with prizes, photo opportunities throughout the museum, and a parade through our exhibits.
    
    Categories: Best Overall, Most Creative, Best Group, and People's Choice.`,
    date: '2026-02-08',
    time: '11:00',
    endTime: '16:00',
    type: 'special',
    ageGroup: 'all-ages',
    price: 0,
    capacity: 500,
    spotsLeft: 234,
    location: 'Museum-wide',
    image: '/images/events/cosplay-day.jpg',
    tags: ['cosplay', 'contest', 'community', 'free'],
    isRecurring: true,
    recurringSchedule: 'Quarterly'
  },
  {
    id: '7',
    slug: 'advanced-redstone',
    name: 'Advanced Redstone: Build a Calculator',
    description: 'Master complex redstone by building a working calculator.',
    longDescription: `Ready to take your redstone skills to the next level? In this advanced workshop, you'll learn about binary logic, adders, and displays as you build a working calculator in Minecraft.

    Prerequisites: Basic understanding of redstone components (OR, AND, NOT gates). Completion of our Beginner Redstone Workshop or equivalent experience recommended.
    
    This is a challenging workshop for dedicated learners.`,
    date: '2026-01-21',
    time: '13:00',
    endTime: '17:00',
    type: 'workshop',
    ageGroup: 'teens',
    price: 45,
    capacity: 12,
    spotsLeft: 5,
    location: 'Workshop Room B',
    instructor: 'ComputerCraft (Mike Torres)',
    image: '/images/events/advanced-redstone.jpg',
    tags: ['redstone', 'advanced', 'computing'],
    isRecurring: true,
    recurringSchedule: 'Monthly'
  },
  {
    id: '8',
    slug: 'server-admin-101',
    name: 'Server Administration 101',
    description: 'Learn how to set up and manage your own Minecraft server.',
    longDescription: `Want to create your own Minecraft server for friends or community? This workshop covers everything from basic setup to security, plugins, and moderation.

    Topics include: Server software options, port forwarding, plugin installation, permission systems, and best practices for community management.
    
    Bring your laptop! We'll help you set up a test server during the session.`,
    date: '2026-01-28',
    time: '14:00',
    endTime: '17:00',
    type: 'workshop',
    ageGroup: 'adults',
    price: 35,
    capacity: 15,
    spotsLeft: 9,
    location: 'Tech Lab',
    instructor: 'ServerSage (Alex Kim)',
    image: '/images/events/server-admin.jpg',
    tags: ['technical', 'servers', 'administration'],
    isRecurring: true,
    recurringSchedule: 'Bi-weekly'
  },
  {
    id: '9',
    slug: 'hermitcraft-meetup',
    name: 'Hermitcraft Fan Meetup',
    description: 'Connect with fellow Hermitcraft fans and watch together.',
    longDescription: `Calling all Hermitcraft fans! Join us for a community meetup where we'll watch recent episodes, discuss theories, and celebrate our favorite content creators.

    This month's focus: Season 10 highlights and predictions. Trivia contest with prizes!
    
    Free event, but registration required for headcount.`,
    date: '2026-02-01',
    time: '16:00',
    endTime: '19:00',
    type: 'meetup',
    ageGroup: 'all-ages',
    price: 0,
    capacity: 60,
    spotsLeft: 18,
    location: 'Community Lounge',
    image: '/images/events/hermitcraft-meetup.jpg',
    tags: ['community', 'hermitcraft', 'free', 'social'],
    isRecurring: true,
    recurringSchedule: 'First Saturday of each month'
  },
  {
    id: '10',
    slug: 'pixel-art-workshop',
    name: 'Pixel Art Masterclass',
    description: 'Create stunning pixel art using Minecraft blocks as your canvas.',
    longDescription: `Transform blocks into beautiful artwork in this creative workshop. Learn techniques for creating portraits, landscapes, and abstract designs using Minecraft's block palette.

    We'll cover color theory, dithering techniques, and how to plan large-scale pixel art projects. Each participant will complete a small artwork to take home (as a print).
    
    No artistic experience required - just enthusiasm!`,
    date: '2026-02-05',
    time: '11:00',
    endTime: '14:00',
    type: 'workshop',
    ageGroup: 'all-ages',
    price: 30,
    capacity: 20,
    spotsLeft: 11,
    location: 'Creative Studio',
    instructor: 'PixelPerfect (Jamie Lee)',
    image: '/images/events/pixel-art.jpg',
    tags: ['creative', 'art', 'building'],
    isRecurring: true,
    recurringSchedule: 'Monthly'
  }
];

export const getEventBySlug = (slug: string): MuseumEvent | undefined => {
  return events.find(event => event.slug === slug);
};

export const getUpcomingEvents = (): MuseumEvent[] => {
  const today = new Date().toISOString().split('T')[0];
  return events
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
};

export const getEventsByType = (type: MuseumEvent['type']): MuseumEvent[] => {
  return events.filter(event => event.type === type);
};

export const getFreeEvents = (): MuseumEvent[] => {
  return events.filter(event => event.price === 0);
};

