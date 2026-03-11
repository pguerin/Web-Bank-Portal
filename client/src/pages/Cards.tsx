import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Plus, Lock, Unlock, Eye, EyeOff, MoreHorizontal, Nfc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cardBgImg from '@/assets/images/card-bg.png';

const cardsData = [
  {
    id: 1,
    type: 'Mastercard',
    holder: 'ALEX RIVERA',
    number: '8824',
    expiry: '12/28',
    balance: 42305.50,
    limit: 50000,
    status: 'active',
    isPrimary: true,
  },
  {
    id: 2,
    type: 'Visa',
    holder: 'ALEX RIVERA',
    number: '4156',
    expiry: '08/27',
    balance: 15750.25,
    limit: 25000,
    status: 'active',
    isPrimary: false,
  },
  {
    id: 3,
    type: 'Mastercard',
    holder: 'ALEX RIVERA',
    number: '2791',
    expiry: '03/26',
    balance: 8450.00,
    limit: 15000,
    status: 'inactive',
    isPrimary: false,
  },
];

export default function Cards() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [lockedCards, setLockedCards] = useState<number[]>([]);

  const toggleCardVisibility = (cardId: number) => {
    setVisibleCards(prev => 
      prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId]
    );
  };

  const toggleCardLock = (cardId: number) => {
    setLockedCards(prev => 
      prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId]
    );
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/10">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 scroll-smooth">
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">My Cards</h1>
                <p className="text-muted-foreground mt-1">Manage and view all your payment cards.</p>
              </div>
              <Button className="rounded-full h-12 shadow-md shadow-primary/20" data-testid="button-add-card">
                <Plus className="w-4 h-4 mr-2" />
                Add Card
              </Button>
            </div>

            {/* Primary Card Section */}
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Primary Card</h2>
              <div className="space-y-6">
                {cardsData.filter(card => card.isPrimary).map((card) => (
                  <div key={card.id} className="group">
                    <div className="relative w-full aspect-[1.586/1] rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10 cursor-pointer transition-transform duration-500 hover:scale-[1.02]" data-testid={`card-${card.id}`}>
                      <img 
                        src={cardBgImg} 
                        alt="Card Background" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Current Balance</span>
                            <span className="text-3xl font-bold mt-1 tracking-tight">${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => toggleCardVisibility(card.id)}
                              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
                              data-testid={`button-visibility-${card.id}`}
                            >
                              {visibleCards.includes(card.id) ? (
                                <EyeOff className="w-4 h-4 text-white" />
                              ) : (
                                <Eye className="w-4 h-4 text-white" />
                              )}
                            </button>
                            <button 
                              onClick={() => toggleCardLock(card.id)}
                              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
                              data-testid={`button-lock-${card.id}`}
                            >
                              {lockedCards.includes(card.id) ? (
                                <Lock className="w-4 h-4 text-white" />
                              ) : (
                                <Unlock className="w-4 h-4 text-white" />
                              )}
                            </button>
                            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
                              <MoreHorizontal className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-mono text-lg tracking-widest text-white/90 drop-shadow-md mb-3">
                            {visibleCards.includes(card.id) ? `**** **** **** ${card.number}` : '**** **** **** ****'}
                          </p>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Card Holder</p>
                              <p className="font-medium text-sm tracking-wide">{card.holder}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Expires</p>
                              <p className="font-medium text-sm tracking-wide">{card.expiry}</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-multiply"></div>
                              <div className="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-multiply -ml-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="bg-card rounded-2xl p-4 border border-border">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Available Balance</p>
                        <p className="text-lg font-bold text-foreground">${(card.limit - card.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                      </div>
                      <div className="bg-card rounded-2xl p-4 border border-border">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Credit Limit</p>
                        <p className="text-lg font-bold text-foreground">${card.limit.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                      </div>
                      <div className="bg-card rounded-2xl p-4 border border-border">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Card Type</p>
                        <p className="text-lg font-bold text-primary">{card.type}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Cards Section */}
            {cardsData.filter(card => !card.isPrimary).length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Other Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cardsData.filter(card => !card.isPrimary).map((card) => (
                    <div key={card.id} className="bg-card rounded-2xl p-6 border border-border shadow-sm" data-testid={`card-mini-${card.id}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{card.type}</h3>
                          <p className={`text-xs font-medium mt-1 ${card.status === 'active' ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                            {card.status === 'active' ? '✓ Active' : '• Inactive'}
                          </p>
                        </div>
                        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Card Number</p>
                          <p className="font-mono text-sm font-medium text-foreground">**** **** **** {card.number}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Holder</p>
                            <p className="font-medium text-xs text-foreground">{card.holder}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Expires</p>
                            <p className="font-medium text-xs text-foreground">{card.expiry}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-1">Balance</p>
                        <p className="text-xl font-bold text-foreground">${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
