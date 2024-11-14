import React, { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import './styles.css';

export default function DonationStats() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");

  const handleSelectChange = (event) => {
    setSelectedPeriod(event.target.value);
    // You can add logic to update statistics based on the selected period
  };

  const progressBarData = [
    { label: 'Total Donations', amount: 128450, progress: 75, color: 'green' },
    { label: 'Anonymous Donations', amount: 45230, progress: 35, color: 'blue' },
    { label: 'Named Donations', amount: 83220, progress: 65, color: 'purple' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="text-green-500" />
          <h2 className="text-lg font-bold text-slate-800">Donation Statistics</h2>
        </div>
        
        <label htmlFor="timePeriod" className="sr-only">Time Period</label>
        <select 
          id="timePeriod" 
          value={selectedPeriod}
          onChange={handleSelectChange}
          className="text-sm border border-slate-200 rounded-lg px-3 py-2"
        >
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="space-y-4">
        {progressBarData.map((data, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">{data.label}</span>
              <span className="text-sm font-medium text-slate-800">${data.amount}</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full">
              <div
                className={`h-2 rounded-full bg-${data.color}-500`}
                style={{ width: `${data.progress}%` }}
              />
            </div>
          </div>
        ))}

        <div className="pt-4 mt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Monthly Growth</span>
            <span className="flex items-center gap-1 text-green-500">
              <TrendingUp size={16} />
              12.5%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
