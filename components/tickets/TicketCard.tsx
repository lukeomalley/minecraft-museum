'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Minus, Plus } from 'lucide-react';
import { TicketType } from '@/lib/data/tickets';

interface TicketCardProps {
  ticket: TicketType;
  selected: boolean;
  onSelect: () => void;
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

export default function TicketCard({ 
  ticket, 
  selected, 
  onSelect,
  quantity,
  onQuantityChange 
}: TicketCardProps) {
  return (
    <motion.div
      className={`
        relative h-full flex flex-col cursor-pointer transition-all duration-200 rounded-sm overflow-hidden
        ${selected 
          ? 'ring-2 ring-emerald ring-offset-2 ring-offset-obsidian' 
          : 'hover:ring-1 hover:ring-grass/50 hover:ring-offset-1 hover:ring-offset-obsidian'
        }
      `}
      onClick={onSelect}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      layout
    >
      {/* Card Background with Gradient */}
      <div className={`
        absolute inset-0 bg-gradient-to-b from-deepslate via-deepslate to-obsidian
        ${selected ? 'opacity-100' : 'opacity-90'}
      `} />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '8px 8px'
      }} />

      {/* Popular/Best Value Badge */}
      {(ticket.popular || ticket.bestValue) && (
        <div className={`
          absolute top-3 right-3 px-3 py-1.5 rounded-sm flex items-center gap-1.5
          ${ticket.popular ? 'bg-diamond/90' : 'bg-emerald/90'}
        `}>
          <Sparkles className="w-3 h-3 text-obsidian" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-obsidian">
            {ticket.popular ? 'Popular' : 'Best Value'}
          </span>
        </div>
      )}

      <div className="relative p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm bg-stone/30 flex items-center justify-center">
              <span className="text-2xl pixelated">{ticket.icon}</span>
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-white leading-tight">
                {ticket.name}
              </h3>
              <p className="font-mono text-xs text-grass/80 mt-0.5">{ticket.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-mono text-3xl font-bold text-white">
            ${ticket.price}
          </span>
          {ticket.originalPrice && (
            <span className="font-mono text-sm text-muted-foreground line-through">
              ${ticket.originalPrice}
            </span>
          )}
          <span className="font-mono text-xs text-muted-foreground ml-auto">
            per ticket
          </span>
        </div>

        {/* Description */}
        <p className="font-mono text-xs text-gray-400 leading-relaxed mb-4">
          {ticket.description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-grass/30 to-transparent mb-4" />

        {/* Features */}
        <div className="flex-1">
          <ul className="space-y-2.5">
            {ticket.features.slice(0, 6).map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-sm bg-grass/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-grass" />
                </div>
                <span className="font-mono text-xs text-gray-300 leading-relaxed">{feature}</span>
              </li>
            ))}
            {ticket.features.length > 6 && (
              <li className="font-mono text-xs text-grass/70 pl-8">
                +{ticket.features.length - 6} more benefits
              </li>
            )}
          </ul>
        </div>

        {/* Limitations */}
        {ticket.limitations && ticket.limitations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-stone/30">
            {ticket.limitations.slice(0, 2).map((limitation, i) => (
              <p key={i} className="font-mono text-[10px] text-muted-foreground/60 leading-relaxed">
                • {limitation}
              </p>
            ))}
          </div>
        )}

        {/* Quantity Selector */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-grass/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gray-400">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuantityChange(Math.max(0, quantity - 1));
                    }}
                    className="w-9 h-9 rounded-sm bg-stone/50 hover:bg-grass/20 text-grass transition-colors flex items-center justify-center border border-grass/30"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xl font-bold text-white w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuantityChange(Math.min(10, quantity + 1));
                    }}
                    className="w-9 h-9 rounded-sm bg-stone/50 hover:bg-grass/20 text-grass transition-colors flex items-center justify-center border border-grass/30"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {quantity > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-between items-center mt-3 pt-3 border-t border-stone/20"
                >
                  <span className="font-mono text-xs text-gray-400">Subtotal</span>
                  <span className="font-mono text-xl font-bold text-emerald">
                    ${ticket.price * quantity}
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selection Indicator */}
        {!selected && (
          <div className="mt-4 pt-4 border-t border-stone/20">
            <div className="font-mono text-xs text-center text-grass/60 py-2">
              Click to select
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
