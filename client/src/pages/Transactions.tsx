import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingBag, Laptop, CreditCard as CardIcon, TrendingUp, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const allTransactions = [
  { id: 1, name: 'Apple Store', category: 'Electronics', date: 'Today, 2:45 PM', amount: -1299.00, icon: Laptop, color: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400' },
  { id: 2, name: 'Salary Deposit', category: 'Income', date: 'Yesterday, 9:00 AM', amount: 5400.00, icon: ArrowDownLeft, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500' },
  { id: 3, name: 'Starbucks Coffee', category: 'Food & Beverage', date: 'Yesterday, 8:15 AM', amount: -14.50, icon: Coffee, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500' },
  { id: 4, name: 'Nike Store', category: 'Shopping', date: 'Oct 24, 4:30 PM', amount: -185.00, icon: ShoppingBag, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-500' },
  { id: 5, name: 'Netflix Subscription', category: 'Entertainment', date: 'Oct 22, 10:00 AM', amount: -15.99, icon: CardIcon, color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-500' },
  { id: 6, name: 'Freelance Payment', category: 'Income', date: 'Oct 20, 3:15 PM', amount: 2850.00, icon: ArrowDownLeft, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500' },
  { id: 7, name: 'Amazon Prime', category: 'Subscriptions', date: 'Oct 19, 11:30 AM', amount: -14.99, icon: CardIcon, color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-500' },
  { id: 8, name: 'Uber Eats', category: 'Food & Beverage', date: 'Oct 18, 7:00 PM', amount: -52.35, icon: Coffee, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500' },
  { id: 9, name: 'Electric Bill Payment', category: 'Utilities', date: 'Oct 17, 2:20 PM', amount: -145.00, icon: CardIcon, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-500' },
  { id: 10, name: 'Dividend Payout', category: 'Income', date: 'Oct 15, 9:00 AM', amount: 340.50, icon: ArrowDownLeft, color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-500' },
  { id: 11, name: 'Best Buy', category: 'Electronics', date: 'Oct 14, 5:45 PM', amount: -599.99, icon: Laptop, color: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400' },
  { id: 12, name: 'Gym Membership', category: 'Health & Fitness', date: 'Oct 13, 12:00 PM', amount: -49.99, icon: TrendingUp, color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-500' },
  { id: 13, name: 'Restaurant - La Trattoria', category: 'Food & Beverage', date: 'Oct 12, 8:30 PM', amount: -95.50, icon: Coffee, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500' },
  { id: 14, name: 'Insurance Premium', category: 'Insurance', date: 'Oct 10, 10:00 AM', amount: -250.00, icon: CardIcon, color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-500' },
  { id: 15, name: 'Gas Station - Shell', category: 'Transportation', date: 'Oct 8, 4:15 PM', amount: -68.40, icon: Laptop, color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-500' },
];

const categories = ['All', 'Income', 'Electronics', 'Food & Beverage', 'Shopping', 'Entertainment', 'Subscriptions', 'Utilities', 'Health & Fitness', 'Insurance', 'Transportation'];

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'amount'

  const filteredTransactions = allTransactions
    .filter(tx => {
      const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tx.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.id - a.id; // Newest first
      } else {
        return Math.abs(b.amount) - Math.abs(a.amount); // Largest first
      }
    });

  const totalIn = filteredTransactions.filter(tx => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const totalOut = Math.abs(filteredTransactions.filter(tx => tx.amount < 0).reduce((sum, tx) => sum + tx.amount, 0));

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/10">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">All Transactions</h1>
                <p className="text-muted-foreground mt-1">Review and manage all your financial activity.</p>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                <h3 className="text-2xl font-bold text-foreground mt-2">{filteredTransactions.length}</h3>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">Total Incoming</p>
                <h3 className="text-2xl font-bold text-emerald-600 mt-2">${totalIn.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">Total Outgoing</p>
                <h3 className="text-2xl font-bold text-red-500 mt-2">${totalOut.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filter & Search</span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search by merchant name..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 bg-secondary/30 border-transparent rounded-xl h-11 focus-visible:bg-background focus-visible:border-primary/30 focus-visible:ring-primary/20 transition-all duration-300"
                  data-testid="input-search-transactions"
                />
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      data-testid={`button-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Sort By</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy('date')}
                    data-testid="button-sort-date"
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      sortBy === 'date'
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    )}
                  >
                    Recent First
                  </button>
                  <button
                    onClick={() => setSortBy('amount')}
                    data-testid="button-sort-amount"
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      sortBy === 'amount'
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    )}
                  >
                    Largest First
                  </button>
                </div>
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-6">Transaction History</h3>

              {filteredTransactions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No transactions found matching your filters.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {filteredTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between group cursor-pointer hover:bg-secondary/30 p-4 rounded-xl transition-all duration-200" data-testid={`row-transaction-${tx.id}`}>
                      <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", tx.color)}>
                          <tx.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{tx.name}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">{tx.category}</p>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                        <p className={cn(
                          "font-semibold text-sm",
                          tx.amount > 0 ? "text-emerald-500" : "text-foreground"
                        )}>
                          {tx.amount > 0 ? '+' : ''}{tx.amount > 0 ? tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : `-$${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                        </p>
                        <p className="text-muted-foreground text-xs">{tx.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
