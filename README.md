# The Blockworks - Minecraft Museum Website

A comprehensive, beautifully themed Next.js 14 application for a Minecraft museum featuring interactive exhibits, ticketing, events, gift shop, and more.

## Features

### Pages

- **Homepage** - Cinematic hero with animated Minecraft landscape, featured exhibits, stats ribbon, upcoming events, testimonials, and CTA sections
- **Exhibits** (`/exhibits`) - Filterable gallery of 12 unique exhibits with category filters and floor guide
- **Exhibit Details** (`/exhibits/[slug]`) - Individual exhibit pages with full descriptions, experiences, and fun facts
- **Tickets** (`/tickets`) - Complete ticketing system with 6 ticket types, date/time picker, add-ons, and cart
- **Plan Your Visit** (`/visit`) - Hours, location, accessibility info, cafe menu, and FAQ
- **Events** (`/events`) - Filterable event calendar with workshops, competitions, and special events
- **Gift Shop** (`/shop`) - Product grid with cart functionality, categories, and product detail modals
- **About** (`/about`) - Museum story, team, timeline, awards, and press mentions
- **Contact** (`/contact`) - Contact form with inquiry types and quick contact info

### The Exhibits

1. **The First Night** - Immersive recreation of your first survival night
2. **Redstone Revolution** - Interactive circuit displays and working contraptions
3. **The Nether Chronicles** - Walk through the Nether's evolution from 2010 to present
4. **Mob Hall of Fame** - Life-size animatronic mobs with complete history
5. **Speedrunner's Sanctum** - Famous speedrun moments and parkour course
6. **The End Gallery** - Journey to fight the dragon with projection mapping
7. **Block Evolution** - Every block ever added, organized chronologically
8. **Community Legends** - Recreations of famous community builds
9. **Mining Through Time** - Playable stations with every major Minecraft version
10. **The Sound of Blocks** - C418's music in an immersive listening room
11. **Herobrine's Vault** - Creepy exhibit on Minecraft myths and legends
12. **The Marketplace** - History of modding, servers, and community creation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom Minecraft-themed design tokens
- **Animations:** Framer Motion
- **Fonts:** Silkscreen (headings) + DM Sans (body)
- **Icons:** Lucide React

## Design System

### Color Palette

| Color | Hex | Use |
|-------|-----|-----|
| Obsidian | `#0f0f1a` | Background |
| Deepslate | `#1a1a2e` | Cards |
| Stone | `#2d2d44` | Secondary |
| Grass | `#5cb85c` | Success/Nature |
| Diamond | `#4fc3f7` | Primary accent |
| Gold | `#ffb300` | Highlight |
| Nether | `#b71c1c` | Warning/Fire |
| Amethyst | `#9b59b6` | Special |

### Features

- Dark obsidian/cave theme with vibrant Minecraft-inspired accents
- Pixel grid backgrounds and block pattern overlays
- Floating particle effects
- Enchantment shimmer animations
- Block-placing micro-interactions
- Fully responsive design
- Accessible (WCAG 2.1 AA compliant)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd minecraft-museum

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
minecraft-museum/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Homepage
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── exhibits/              # Exhibits pages
│   ├── tickets/               # Ticketing page
│   ├── visit/                 # Plan Your Visit
│   ├── events/                # Events calendar
│   ├── shop/                  # Gift shop
│   ├── about/                 # About page
│   └── contact/               # Contact page
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── home/                  # Homepage sections
│   ├── exhibits/              # Exhibit components
│   ├── tickets/               # Ticket components
│   ├── shop/                  # Shop components
│   ├── ui/                    # Reusable UI components
│   └── shared/                # Shared components
├── lib/
│   └── data/                  # Static data files
│       ├── exhibits.ts        # Exhibit data
│       ├── events.ts          # Event data
│       ├── tickets.ts         # Ticket types
│       └── products.ts        # Shop products
└── public/                    # Static assets
```

## License

This is a fictional museum website created for demonstration purposes.

---

Built with ❤️ and lots of ⛏️
