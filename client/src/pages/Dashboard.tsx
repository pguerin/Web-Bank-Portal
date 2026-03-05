import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import BalanceCard from '@/components/dashboard/BalanceCard';
import CreditCard from '@/components/dashboard/CreditCard';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import QuickTransfer from '@/components/dashboard/QuickTransfer';
import IncomeExpenseChart from '@/components/dashboard/IncomeExpenseChart';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/10">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground" data-testid="heading-overview">Financial Overview</h1>
                <p className="text-muted-foreground mt-1" data-testid="text-date-overview">Track your wealth and daily transactions seamlessly.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - 8/12 */}
              <div className="lg:col-span-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BalanceCard />
                  <IncomeExpenseChart />
                </div>
                <RecentTransactions />
              </div>

              {/* Right Column - 4/12 */}
              <div className="lg:col-span-4 space-y-8">
                <CreditCard />
                <QuickTransfer />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
