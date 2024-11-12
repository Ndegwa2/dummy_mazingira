import React from 'react';
import { Users, Search } from 'lucide-react';

const donors = [
  { id: 1, name: 'Sarah Johnson', amount: 1200, date: '2024-03-15', type: 'Monthly' },
  { id: 2, name: 'Anonymous', amount: 500, date: '2024-03-14', type: 'One-time' },
  { id: 3, name: 'Michael Chen', amount: 2500, date: '2024-03-13', type: 'Quarterly' },
  { id: 4, name: 'Anonymous', amount: 750, date: '2024-03-12', type: 'One-time' },
  { id: 5, name: 'Emily Williams', amount: 1000, date: '2024-03-11', type: 'Monthly' },
];

export default function DonorsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="text-blue-500" />
          <h2 className="text-lg font-bold text-slate-800">Recent Donors</h2>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search donors..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-slate-500 border-b border-slate-200">
              <th className="pb-4 pr-4">Donor</th>
              <th className="pb-4 px-4">Amount</th>
              <th className="pb-4 px-4">Date</th>
              <th className="pb-4 pl-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id} className="border-b border-slate-100">
                <td className="py-4 pr-4">
                  <span className="font-medium text-slate-700">{donor.name}</span>
                </td>
                <td className="px-4 text-slate-600">${donor.amount}</td>
                <td className="px-4 text-slate-600">{donor.date}</td>
                <td className="py-4 pl-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {donor.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}