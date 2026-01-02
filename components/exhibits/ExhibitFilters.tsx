'use client';

import { motion } from 'framer-motion';

interface ExhibitFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Exhibits', icon: '🏛️' },
  { id: 'survival', name: 'Survival', icon: '⚔️' },
  { id: 'redstone', name: 'Redstone', icon: '⚡' },
  { id: 'exploration', name: 'Exploration', icon: '🗺️' },
  { id: 'community', name: 'Community', icon: '👥' },
  { id: 'history', name: 'History', icon: '📜' },
  { id: 'creative', name: 'Creative', icon: '🎨' },
];

export default function ExhibitFilters({ activeCategory, onCategoryChange }: ExhibitFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-4 py-2 retro text-[7px] uppercase tracking-wider
            transition-all duration-200 flex items-center gap-2 border-2
            ${activeCategory === category.id 
              ? 'bg-grass text-obsidian border-grass' 
              : 'bg-deepslate text-grass/70 hover:bg-stone hover:text-grass border-grass/30'
            }
          `}
          style={{ boxShadow: activeCategory === category.id ? '3px 3px 0 #0a1a0a' : '2px 2px 0 #0a1a0a' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="pixelated">{category.icon}</span>
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
