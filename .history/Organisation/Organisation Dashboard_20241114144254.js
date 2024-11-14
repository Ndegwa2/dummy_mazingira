import React from 'react';
import { DollarSign, Users, UserPlus, FileText, Building2 } from 'lucide-react';
import StatusBanner from './Organisationstatus';
import DonationStats from './DonationStats';
import DonorsList from './DonorsList';
import BeneficiaryStories from './BeneficiaryStories';
import InventoryManagement from './DonationInventory';

const OrganizationDashboard = () => {
  const orgStatus = 'approved';
  const orgName = 'Wildlife Direct';

  // Card data for modularity
  const cardData = [
    {
      icon: <DollarSign size={24} className="text-green-500" />,
      bgColorClass: 'bg-green-50',
      stat: '+12.5%',
      title: 'Total Donations',
      value: '$128,450',
      statColorClass: 'text-green-500'
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      bgColorClass: 'bg-blue-50',
      stat: '+8.2%',
      title: 'Named Donors',
      value: '892',
      statColorClass: 'text-green-500'
    },
    {
      icon: <UserPlus size={24} className="text-purple-500" />,
      bgColorClass: 'bg-purple-50',
      stat: '+15.3%',
      title: 'Beneficiaries',
      value: '456',
      statColorClass: 'text-green-500'
    },
    {
      icon: <FileText size={24} className="text-orange-500" />,
      bgColorClass: 'bg-orange-50',
      stat: '+5.8%',
      title: 'Impact Stories',
      value: '24',
      statColorClass: 'text-green-500'
    }
  ];

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <StatusBanner status={orgStatus} />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cardData.map((card, index) => (
            <DashboardCard
              key={index}
              icon={card.icon}
              bgColorClass={card.bgColorClass}
              stat={card.stat}
              title={card.title}
              value={card.value}
              statColorClass={card.statColorClass}
            />
          ))}
        </div>

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
};

const DashboardCard = ({ icon, bgColorClass, stat, title, value, statColorClass }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 ${bgColorClass} rounded-lg`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${statColorClass}`}>{stat}</span>
    </div>
    <h3 className="text-sm font-medium text-slate-500">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value}</p>
  </div>
);

export default OrganizationDashboard;
