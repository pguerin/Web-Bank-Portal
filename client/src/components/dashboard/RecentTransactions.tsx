import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingBag, Laptop, CreditCard as CardIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  {
    id: 1,
    name: 'Apple Store',
    category: 'Electronics',
    date: 'Today, 2:45 PM',
    amount: -1299.00,
    icon: Laptop,
    color: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  },
  {
    id: 2,
    name: 'Salary Deposit',
    category: 'Income',
    date: 'Yesterday, 9:00 AM',
    amount: 5400.00,
    icon: ArrowDownLeft,
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500',
  },
  {
    id: 3,
    name: 'Starbucks Coffee',
    category: 'Food & Beverage',
    date: 'Yesterday, 8:15 AM',
    amount: -14.50,
    icon: Coffee,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500',
  },
  {
    id: 4,
    name: 'Nike Store',
    category: 'Shopping',
    date: 'Oct 24, 4:30 PM',
    amount: -185.00,
    icon: ShoppingBag,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500',
  },
  {
    id: 5,
    name: 'Netflix Subscription',
    category: 'Entertainment',
    date: 'Oct 22, 10:00 AM',
    amount: -15.99,
    icon: CardIcon,
    color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-500',
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-card rounded-3xl p-7 border border-border shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-foreground">Recent Transactions</h3>
        <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">View All</button>
      </div>

      <div className="space-y-5">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between group cursor-pointer" data-testid={`row-transaction-${tx.id}`}>
            <div className="flex items-center gap-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", tx.color)}>
                <tx.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{tx.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{tx.category} • {tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={cn(
                "font-semibold text-sm",
                tx.amount > 0 ? "text-emerald-500" : "text-foreground"
              )}>
                {tx.amount > 0 ? '+' : ''}{tx.amount > 0 ? tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : `-$${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
