export interface TicketType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  color: string;
  icon: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  bestValue?: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export const ticketTypes: TicketType[] = [
  {
    id: 'general',
    name: 'General Admission',
    subtitle: 'Stone Tier',
    description: 'Access all permanent exhibits and explore the museum at your own pace.',
    price: 32,
    color: '#607d8b',
    icon: '🪨',
    features: [
      'Access to all permanent exhibits',
      'Self-guided tour with map',
      'Access to The Furnace Café',
      'Gift shop access',
      'Valid for single day entry'
    ],
    limitations: [
      'Does not include special exhibitions',
      'No priority access'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Pass',
    subtitle: 'VIP Experience',
    description: 'The ultimate museum experience with exclusive perks and priority access.',
    price: 65,
    originalPrice: 80,
    color: '#4fc3f7',
    icon: '💎',
    features: [
      'Access to ALL exhibits including specials',
      'Priority entry - skip the line',
      'Exclusive Diamond Lounge access',
      'Free audio guide ($8 value)',
      'Complimentary drink at The Furnace',
      '15% gift shop discount',
      'Commemorative Diamond Pass card'
    ],
    popular: true
  },
  {
    id: 'family',
    name: 'Family Pack',
    subtitle: 'Bring the Squad',
    description: 'Perfect for families! Includes 2 adults and up to 3 children (under 16).',
    price: 99,
    originalPrice: 128,
    color: '#5cb85c',
    icon: '👨‍👩‍👧‍👦',
    features: [
      'Admission for 2 adults + 3 kids',
      'Access to all permanent exhibits',
      'Kids activity booklet',
      'Family photo opportunity',
      '10% gift shop discount',
      'Priority access to kids areas'
    ],
    bestValue: true
  },
  {
    id: 'bedrock',
    name: 'Bedrock Membership',
    subtitle: 'Annual Pass',
    description: 'Unlimited visits for a full year plus exclusive member benefits.',
    price: 149,
    color: '#424242',
    icon: '🏆',
    features: [
      'Unlimited visits for 12 months',
      'Free entry to ALL special exhibitions',
      'Exclusive member events',
      '20% gift shop discount',
      'Early access to new exhibits',
      'Free parking',
      'Bring a friend free (4x per year)',
      'Monthly newsletter with insider info'
    ]
  },
  {
    id: 'student',
    name: 'Student/Senior',
    subtitle: 'Discounted Entry',
    description: 'Reduced admission for students with valid ID and seniors 65+.',
    price: 24,
    color: '#9c27b0',
    icon: '🎓',
    features: [
      'Access to all permanent exhibits',
      'Self-guided tour with map',
      'Access to The Furnace Café',
      'Gift shop access'
    ],
    limitations: [
      'Valid student ID or proof of age required',
      'Does not include special exhibitions'
    ]
  },
  {
    id: 'child',
    name: 'Child Ticket',
    subtitle: 'Ages 4-15',
    description: 'Discounted admission for young builders and adventurers.',
    price: 18,
    color: '#ff9800',
    icon: '🧒',
    features: [
      'Access to all permanent exhibits',
      'Kids activity booklet',
      'Access to interactive play areas',
      'Scavenger hunt game included'
    ],
    limitations: [
      'Must be accompanied by adult',
      'Children under 4 are free'
    ]
  }
];

export const addOns: AddOn[] = [
  {
    id: 'audio-guide',
    name: 'Audio Guide',
    description: 'Immersive audio tour narrated by Minecraft community legends.',
    price: 8,
    icon: '🎧'
  },
  {
    id: 'photo-package',
    name: 'Photo Package',
    description: 'Professional photos at 3 locations plus digital downloads.',
    price: 25,
    icon: '📸'
  },
  {
    id: 'gift-voucher',
    name: 'Gift Shop Voucher',
    description: '$15 voucher for the gift shop (save $2!).',
    price: 13,
    icon: '🎁'
  },
  {
    id: 'cafe-combo',
    name: 'Café Combo',
    description: 'Meal + drink at The Furnace Café.',
    price: 18,
    icon: '🍔'
  },
  {
    id: 'guidebook',
    name: 'Official Guidebook',
    description: 'Full-color museum guidebook and souvenir.',
    price: 15,
    icon: '📖'
  }
];

export const getTicketById = (id: string): TicketType | undefined => {
  return ticketTypes.find(ticket => ticket.id === id);
};

export const getPopularTicket = (): TicketType | undefined => {
  return ticketTypes.find(ticket => ticket.popular);
};

export const getBestValueTicket = (): TicketType | undefined => {
  return ticketTypes.find(ticket => ticket.bestValue);
};

