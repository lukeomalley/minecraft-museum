'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AddOn } from '@/lib/data/tickets';

interface AddOnCardProps {
  addOn: AddOn;
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

export default function AddOnCard({ addOn, quantity, onQuantityChange }: AddOnCardProps) {
  return (
    <motion.div
      className={`
        flex items-center justify-between p-4 rounded-sm transition-all border
        ${quantity > 0 
          ? 'bg-grass/10 border-grass/50' 
          : 'bg-deepslate/60 border-stone/30 hover:border-stone/50 hover:bg-deepslate/80'
        }
      `}
      whileHover={{ scale: 1.005 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-sm bg-stone/30 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl pixelated">{addOn.icon}</span>
        </div>
        <div>
          <h4 className="font-mono text-sm font-bold text-white">
            {addOn.name}
          </h4>
          <p className="font-mono text-xs text-gray-400 mt-0.5">{addOn.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="font-mono text-base font-bold text-emerald">
          +${addOn.price}
        </span>
        
        <div className="flex items-center gap-2">
          <AnimatePresence mode="popLayout">
            {quantity > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0.8, width: 0 }}
                onClick={() => onQuantityChange(quantity - 1)}
                className="w-9 h-9 rounded-sm bg-stone/50 hover:bg-redstone/30 text-gray-300 hover:text-redstone flex items-center justify-center transition-colors border border-stone/30"
              >
                <Minus className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
          
          <AnimatePresence mode="popLayout">
            {quantity > 0 && (
              <motion.span 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="w-8 text-center font-mono text-base font-bold text-white"
              >
                {quantity}
              </motion.span>
            )}
          </AnimatePresence>
          
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="w-9 h-9 rounded-sm bg-grass/80 hover:bg-grass text-obsidian flex items-center justify-center transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
