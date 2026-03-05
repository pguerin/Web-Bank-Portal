import React from 'react';
import cardBgImg from '@/assets/images/card-bg.png';
import { Nfc } from 'lucide-react';

export default function CreditCard() {
  return (
    <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg text-foreground">My Card</h3>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Manage</button>
      </div>
      
      <div className="relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden shadow-xl shadow-foreground/5 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
        <img 
          src={cardBgImg} 
          alt="Card Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Current Balance</span>
              <span className="text-2xl font-bold mt-1 tracking-tight" data-testid="text-card-balance">$42,305.50</span>
            </div>
            <Nfc className="w-6 h-6 text-white/80" />
          </div>
          
          <div>
            <p className="font-mono text-lg tracking-widest text-white/90 drop-shadow-md mb-2">
              **** **** **** 8824
            </p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Card Holder</p>
                <p className="font-medium text-sm tracking-wide">ALEX RIVERA</p>
              </div>
              <div className="text-right">
                <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Expires</p>
                <p className="font-medium text-sm tracking-wide">12/28</p>
              </div>
              {/* Mastercard overlapping circles logo */}
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-500/80 mix-blend-multiply"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500/80 mix-blend-multiply -ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
