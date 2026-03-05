import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Mon', income: 400, expense: 240 },
  { name: 'Tue', income: 300, expense: 139 },
  { name: 'Wed', income: 550, expense: 380 },
  { name: 'Thu', income: 278, expense: 190 },
  { name: 'Fri', income: 489, expense: 280 },
  { name: 'Sat', income: 239, expense: 380 },
  { name: 'Sun', income: 349, expense: 130 },
];

export default function IncomeExpenseChart() {
  return (
    <div className="bg-card rounded-3xl p-6 border border-border shadow-sm flex flex-col min-h-[220px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg text-foreground">Cash Flow</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Last 7 days</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-xs font-medium text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="text-xs font-medium text-muted-foreground">Expense</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              itemStyle={{ fontWeight: 600 }}
            />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }} 
              dy={10}
            />
            <Bar dataKey="income" radius={[4, 4, 0, 0]} maxBarSize={12}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="hsl(var(--primary))" />
              ))}
            </Bar>
            <Bar dataKey="expense" radius={[4, 4, 0, 0]} maxBarSize={12}>
               {data.map((entry, index) => (
                <Cell key={`cell-exp-${index}`} fill="hsl(var(--secondary-foreground) / 0.1)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
