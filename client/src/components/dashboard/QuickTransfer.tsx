import React from 'react';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const contacts = [
  { id: 1, name: 'Emma', initials: 'EM', color: 'bg-blue-100 text-blue-700' },
  { id: 2, name: 'David', initials: 'DA', color: 'bg-purple-100 text-purple-700' },
  { id: 3, name: 'Sarah', initials: 'SA', color: 'bg-rose-100 text-rose-700' },
  { id: 4, name: 'James', initials: 'JA', color: 'bg-emerald-100 text-emerald-700' },
];

export default function QuickTransfer() {
  return (
    <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
      <h3 className="font-bold text-lg text-foreground mb-5">Quick Transfer</h3>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
        <div className="flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-secondary border border-border border-dashed flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
            <span className="text-xl leading-none mb-1">+</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">Add</span>
        </div>
        
        {contacts.map(contact => (
          <div key={contact.id} className="flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group" data-testid={`contact-${contact.name.toLowerCase()}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105 group-hover:shadow-md ${contact.color}`}>
              {contact.initials}
            </div>
            <span className="text-xs font-medium text-foreground">{contact.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-3 relative">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
          <Input 
            type="number" 
            placeholder="0.00" 
            className="pl-8 bg-secondary/30 border-transparent rounded-full h-12 focus-visible:bg-background focus-visible:ring-primary/20 transition-all text-foreground font-medium"
          />
        </div>
        <Button className="rounded-full w-12 h-12 p-0 flex items-center justify-center shadow-md shadow-primary/20" data-testid="button-quick-send">
          <Send className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
