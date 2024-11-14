import React from 'react';
import { DollarSign, Users, UserPlus, FileText, Building2 } from 'lucide-react';
import StatusBanner from './Organisationstatus';
import DonationStats from './DonationStats';
import DonorsList from './DonorsList';
import BeneficiaryStories from './BeneficiaryStories';
import InventoryManagement from './DonationInventory';

export default function OrganizationDashboard() {
  const orgStatus = 'approved';  // Organization's status
  const orgName = 'WildLIfe Direct';  // Organization's name

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Status Banner displaying organization status */}
        <StatusBanner status={orgStatus} />
        
        {/* Header section with organization name and Edit Profile button */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{orgName}</h1>
              <p className="text-slate-500">Organization Dashboard</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <Building2 size={16} />
              Edit Organization Profile
            </button>
          </div>
        </header>

        {/* Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Donations Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <DollarSign size={24} className="text-green-500" />
              </div>
              <span className="text-sm font-medium text-green-500">+12.5%</span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">Total Donations</h3>
            <p className="text-2xl font-bold text-slate-800">$128,450</p>
          </div>

          {/* Named Donors Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Users size={24} className="text-blue-500" />
              </div>
              <span className="text-sm font-medium text-green-500">+8.2%</span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">Named Donors</h3>
            <p className="text-2xl font-bold text-slate-800">892</p>
          </div>

          {/* Beneficiaries Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <UserPlus size={24} className="text-purple-500" />
              </div>
              <span className="text-sm font-medium text-green-500">+15.3%</span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">Beneficiaries</h3>
            <p className="text-2xl font-bold text-slate-800">456</p>
          </div>

          {/* Impact Stories Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FileText size={24} className="text-orange-500" />
              </div>
              <span className="text-sm font-medium text-green-500">+5.8%</span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">Impact Stories</h3>
            <p className="text-2xl font-bold text-slate-800">24</p>
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DonationStats />
          <DonorsList />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BeneficiaryStories />
          <InventoryManagement />
        </div>
      </div>
    </div>
  );
}
