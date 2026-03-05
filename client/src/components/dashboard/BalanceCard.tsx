import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BalanceCard() {
  return (
    <div className="bg-card rounded-3xl p-7 border border-border shadow-sm relative overflow-hidden flex flex-col justify-between h-full min-h-[220px]">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="relative z-10">
        <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          Total Balance
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold">
            <TrendingUp className="w-3 h-3 mr-1" />
            +2.4%
          </span>
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 tracking-tight" data-testid="text-total-balance">
          $124,563.00
        </h2>
      </div>

      <div className="flex gap-3 mt-8 relative z-10">
        <Button className="rounded-full flex-1 h-12 text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300" data-testid="button-transfer">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Transfer
        </Button>
        <Button variant="outline" className="rounded-full flex-1 h-12 text-sm font-semibold border-border/60 hover:bg-secondary transition-all duration-300" data-testid="button-request">
          Request
        </Button>
      </div>
    </div>
  );
}
