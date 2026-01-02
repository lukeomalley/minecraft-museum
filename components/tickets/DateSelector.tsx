'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DateSelectorProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export default function DateSelector({ selectedDate, onDateSelect }: DateSelectorProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthName = currentMonth.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="bg-deepslate/80 rounded-sm p-5 border border-stone/30">
      <div className="flex items-center gap-2 mb-5">
        <Calendar className="w-5 h-5 text-grass" />
        <h3 className="font-mono text-sm font-bold text-white">
          Select Date
        </h3>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-sm hover:bg-stone/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-grass" />
        </button>
        <span className="font-mono text-sm font-bold text-white">
          {monthName}
        </span>
        <button
          onClick={nextMonth}
          className="p-2 rounded-sm hover:bg-stone/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-grass" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div 
            key={day} 
            className="text-center font-mono text-xs text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {[...Array(firstDayOfMonth)].map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        
        {/* Day cells */}
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const disabled = isDateDisabled(day);
          const selected = isDateSelected(day);
          const todayDate = isToday(day);
          
          return (
            <motion.button
              key={day}
              onClick={() => {
                if (!disabled) {
                  onDateSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
                }
              }}
              disabled={disabled}
              className={`
                aspect-square flex items-center justify-center font-mono text-sm rounded-sm
                transition-all duration-200
                ${disabled 
                  ? 'text-muted-foreground/30 cursor-not-allowed' 
                  : selected
                    ? 'bg-grass text-obsidian font-bold'
                    : todayDate
                      ? 'bg-stone/40 text-emerald font-bold ring-1 ring-emerald/50'
                      : 'text-gray-300 hover:bg-stone/30'
                }
              `}
              whileHover={!disabled ? { scale: 1.1 } : undefined}
              whileTap={!disabled ? { scale: 0.95 } : undefined}
            >
              {day}
            </motion.button>
          );
        })}
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-grass/10 rounded-sm border border-grass/30 text-center"
        >
          <span className="font-mono text-xs text-grass">
            📅 {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </motion.div>
      )}
    </div>
  );
}
