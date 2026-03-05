import React from 'react';
import { LayoutDashboard, CreditCard, ArrowLeftRight, PieChart, Settings, LifeBuoy, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'wouter';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: ArrowLeftRight, label: 'Transactions', href: '/transactions' },
  { icon: PieChart, label: 'Analytics', href: '/analytics' },
  { icon: CreditCard, label: 'My Cards', href: '/cards' },
];

const bottomNavItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: LifeBuoy, label: 'Help Center', href: '/help' },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-72 bg-sidebar border-r border-sidebar-border h-full pt-8 pb-6 px-6 z-10 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 px-2 mb-12">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
          <div className="w-5 h-5 border-2 border-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">Nexus</span>
      </div>

      <div className="flex-1 space-y-8">
        <div>
          <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Menu</p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                    isActive 
                      ? "text-primary bg-primary/10 font-semibold" 
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground font-medium"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="space-y-4">
        <nav className="space-y-1.5">
          {bottomNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary/80 hover:text-foreground font-medium transition-all duration-200"
            >
              <item.icon className="w-5 h-5" strokeWidth={2} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="pt-4 mt-4 border-t border-border/50">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive font-medium transition-all duration-200">
            <LogOut className="w-5 h-5" strokeWidth={2} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
