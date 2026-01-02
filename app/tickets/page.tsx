'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Clock, ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import { ticketTypes, addOns } from '@/lib/data/tickets';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import TicketCard from '@/components/tickets/TicketCard';
import DateSelector from '@/components/tickets/DateSelector';
import AddOnCard from '@/components/tickets/AddOnCard';
import PageHero from '@/components/shared/PageHero';
import { PAGE_WALLPAPERS } from '@/lib/data/wallpapers';

type TimeSlot = '10:00' | '12:00' | '14:00' | '16:00' | '18:00';

const timeSlots: { time: TimeSlot; label: string; available: number }[] = [
  { time: '10:00', label: '10:00 AM', available: 45 },
  { time: '12:00', label: '12:00 PM', available: 32 },
  { time: '14:00', label: '2:00 PM', available: 18 },
  { time: '16:00', label: '4:00 PM', available: 67 },
  { time: '18:00', label: '6:00 PM', available: 89 },
];

export default function TicketsPage() {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<Record<string, number>>({});

  const ticketTotal = useMemo(() => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = ticketTypes.find(t => t.id === ticketId);
      return total + (ticket?.price || 0) * quantity;
    }, 0);
  }, [selectedTickets]);

  const addOnTotal = useMemo(() => {
    return Object.entries(selectedAddOns).reduce((total, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0) * quantity;
    }, 0);
  }, [selectedAddOns]);

  const totalTicketCount = useMemo(() => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  }, [selectedTickets]);

  const grandTotal = ticketTotal + addOnTotal;

  const canProceed = totalTicketCount > 0 && selectedDate && selectedTime;

  return (
    <div className="min-h-screen pb-16 bg-obsidian">
      {/* Hero */}
      <PageHero
        wallpaper={PAGE_WALLPAPERS.tickets}
        title="Get Your Tickets"
        subtitle="Choose your adventure and join us at The Blockworks Museum"
        icon={<Ticket className="w-8 h-8 text-grass" />}
        size="md"
      />

      <Container>
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Step 1: Select Tickets */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-grass flex items-center justify-center">
                  <span className="font-mono text-lg font-bold text-obsidian">1</span>
                </div>
                <div>
                  <h2 className="font-mono text-lg font-bold text-white">
                    Select Ticket Type
                  </h2>
                  <p className="font-mono text-xs text-gray-400">Choose the pass that works best for you</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {ticketTypes.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
                  >
                    <TicketCard
                      ticket={ticket}
                      selected={selectedTickets[ticket.id] !== undefined}
                      onSelect={() => {
                        if (selectedTickets[ticket.id] !== undefined) {
                          const newTickets = { ...selectedTickets };
                          delete newTickets[ticket.id];
                          setSelectedTickets(newTickets);
                        } else {
                          setSelectedTickets({ ...selectedTickets, [ticket.id]: 1 });
                        }
                      }}
                      quantity={selectedTickets[ticket.id] || 0}
                      onQuantityChange={(qty) => {
                        if (qty === 0) {
                          const newTickets = { ...selectedTickets };
                          delete newTickets[ticket.id];
                          setSelectedTickets(newTickets);
                        } else {
                          setSelectedTickets({ ...selectedTickets, [ticket.id]: qty });
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Step 2: Select Date & Time */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                  totalTicketCount > 0 ? 'bg-grass' : 'bg-stone/50'
                }`}>
                  <span className={`font-mono text-lg font-bold ${
                    totalTicketCount > 0 ? 'text-obsidian' : 'text-muted-foreground'
                  }`}>2</span>
                </div>
                <div>
                  <h2 className={`font-mono text-lg font-bold transition-colors ${
                    totalTicketCount > 0 ? 'text-white' : 'text-muted-foreground'
                  }`}>
                    Select Date & Time
                  </h2>
                  <p className="font-mono text-xs text-gray-400">Pick your preferred visit slot</p>
                </div>
              </div>

              {totalTicketCount > 0 ? (
                <div className="grid md:grid-cols-2 gap-5">
                  <DateSelector
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                  />

                  <div className="bg-deepslate/80 rounded-sm p-5 border border-stone/30">
                    <div className="flex items-center gap-2 mb-5">
                      <Clock className="w-5 h-5 text-grass" />
                      <h3 className="font-mono text-sm font-bold text-white">
                        Select Time
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {timeSlots.map((slot) => (
                        <motion.button
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`
                            w-full p-3.5 flex items-center justify-between transition-all rounded-sm border
                            ${selectedTime === slot.time
                              ? 'bg-grass/20 border-grass text-white'
                              : 'bg-stone/30 border-stone/30 hover:border-grass/50 hover:bg-stone/40'
                            }
                          `}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <span className={`font-mono text-sm ${selectedTime === slot.time ? 'text-white font-bold' : 'text-gray-300'}`}>
                            {slot.label}
                          </span>
                          <span className={`font-mono text-xs ${slot.available < 20 ? 'text-redstone' : 'text-emerald'}`}>
                            {slot.available} spots
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-deepslate/50 rounded-sm p-10 text-center border border-stone/20">
                  <div className="w-12 h-12 rounded-sm bg-stone/30 flex items-center justify-center mx-auto mb-4">
                    <Ticket className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Select a ticket type to continue</p>
                </div>
              )}
            </section>

            {/* Step 3: Add-Ons */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-colors ${
                  selectedDate && selectedTime ? 'bg-grass' : 'bg-stone/50'
                }`}>
                  <span className={`font-mono text-lg font-bold ${
                    selectedDate && selectedTime ? 'text-obsidian' : 'text-muted-foreground'
                  }`}>3</span>
                </div>
                <div>
                  <h2 className={`font-mono text-lg font-bold transition-colors ${
                    selectedDate && selectedTime ? 'text-white' : 'text-muted-foreground'
                  }`}>
                    Add Extras
                  </h2>
                  <p className="font-mono text-xs text-gray-400">Optional add-ons to enhance your visit</p>
                </div>
              </div>

              {selectedDate && selectedTime ? (
                <div className="space-y-3">
                  {addOns.map((addOn) => (
                    <AddOnCard
                      key={addOn.id}
                      addOn={addOn}
                      quantity={selectedAddOns[addOn.id] || 0}
                      onQuantityChange={(qty) => {
                        if (qty === 0) {
                          const newAddOns = { ...selectedAddOns };
                          delete newAddOns[addOn.id];
                          setSelectedAddOns(newAddOns);
                        } else {
                          setSelectedAddOns({ ...selectedAddOns, [addOn.id]: qty });
                        }
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-deepslate/50 rounded-sm p-10 text-center border border-stone/20">
                  <div className="w-12 h-12 rounded-sm bg-stone/30 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">Select a date and time to see extras</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar - Order Summary */}
          <div>
            <div className="sticky top-24">
              <div className="bg-deepslate/80 rounded-sm border border-stone/30 overflow-hidden">
                {/* Header */}
                <div className="p-5 border-b border-stone/30 bg-stone/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-grass/20 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-grass" />
                    </div>
                    <h3 className="font-mono text-base font-bold text-white">Order Summary</h3>
                  </div>
                </div>

                <div className="p-5">
                  {/* Tickets */}
                  <div className="space-y-3 mb-5">
                    {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                      const ticket = ticketTypes.find(t => t.id === ticketId);
                      if (!ticket || quantity === 0) return null;
                      return (
                        <div key={ticketId} className="flex justify-between items-center">
                          <span className="font-mono text-sm text-gray-300">
                            {ticket.name} <span className="text-gray-500">× {quantity}</span>
                          </span>
                          <span className="font-mono text-sm font-bold text-white">${ticket.price * quantity}</span>
                        </div>
                      );
                    })}
                    
                    {totalTicketCount === 0 && (
                      <p className="font-mono text-sm text-muted-foreground py-4 text-center">No tickets selected</p>
                    )}
                  </div>

                  {/* Add-Ons */}
                  {Object.keys(selectedAddOns).length > 0 && (
                    <div className="space-y-3 mb-5 pt-5 border-t border-stone/30">
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Add-Ons</p>
                      {Object.entries(selectedAddOns).map(([addOnId, quantity]) => {
                        const addOn = addOns.find(a => a.id === addOnId);
                        if (!addOn || quantity === 0) return null;
                        return (
                          <div key={addOnId} className="flex justify-between items-center">
                            <span className="font-mono text-sm text-gray-300">
                              {addOn.name} <span className="text-gray-500">× {quantity}</span>
                            </span>
                            <span className="font-mono text-sm font-bold text-white">${addOn.price * quantity}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Date & Time */}
                  {(selectedDate || selectedTime) && (
                    <div className="mb-5 pt-5 border-t border-stone/30">
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">Visit Details</p>
                      <div className="bg-stone/20 rounded-sm p-3">
                        {selectedDate && (
                          <p className="font-mono text-sm text-gray-300">
                            📅 {selectedDate.toLocaleDateString('en-US', { 
                              weekday: 'short',
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        )}
                        {selectedTime && (
                          <p className="font-mono text-sm text-gray-300 mt-1">
                            🕐 {timeSlots.find(s => s.time === selectedTime)?.label}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-5 border-t border-stone/30">
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-mono text-sm text-gray-400">Total</span>
                      <span className="font-mono text-3xl font-bold text-emerald">
                        ${grandTotal}
                      </span>
                    </div>

                    <Button 
                      className={`w-full h-12 font-mono text-sm font-bold transition-all ${
                        canProceed 
                          ? 'bg-grass hover:bg-emerald text-obsidian' 
                          : 'bg-stone/50 text-muted-foreground cursor-not-allowed'
                      }`}
                      disabled={!canProceed}
                    >
                      {canProceed ? 'Proceed to Checkout' : 'Complete Selection'}
                    </Button>

                    {canProceed && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald" />
                        <span className="font-mono text-xs text-emerald">Ready to book!</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-5 text-center">
                <p className="font-mono text-xs text-muted-foreground mb-2">Secure checkout powered by Stripe</p>
                <div className="flex justify-center gap-4 font-mono text-xs text-muted-foreground">
                  <span>🔒 SSL Encrypted</span>
                  <span>💳 Safe Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
