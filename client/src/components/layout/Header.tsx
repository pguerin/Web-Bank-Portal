import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import avatarImg from '@/assets/images/avatar.png';

export default function Header() {
  return (
    <header className="h-24 px-6 md:px-10 flex items-center justify-between border-b border-border/40 bg-background/80 backdrop-blur-xl sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            type="search" 
            placeholder="Search transactions, cards..." 
            className="w-80 pl-11 bg-secondary/50 border-transparent focus-visible:bg-background focus-visible:border-primary/30 focus-visible:ring-primary/20 rounded-full h-11 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-border/60 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group p-1.5 rounded-full hover:bg-secondary/50 transition-colors pr-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-background shadow-sm group-hover:border-primary/20 transition-all duration-300">
            <img src={avatarImg} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block text-sm">
            <p className="font-semibold text-foreground leading-tight" data-testid="text-username">Alex Rivera</p>
            <p className="text-muted-foreground text-xs">Premium Member</p>
          </div>
        </div>
      </div>
    </header>
  );
}
