import React from 'react';
import { Leaf } from 'lucide-react';
import Card from './OrganisationCard';


type OrganizationProps = {
  name: string;
  description: string;
  impact: string;
  imageUrl: string;
  category: string;
};

export default function OrganizationCard({ name, description, impact, imageUrl, category }: OrganizationProps) {
  return (
    <Card>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Leaf className="text-green-500" size={20} />
          <h3 className="text-lg font-bold text-slate-800">{name}</h3>
        </div>
        
        <p className="text-slate-600 text-sm">{description}</p>
        
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Impact</span>
            <span className="text-sm font-medium text-green-600">{impact}</span>
          </div>
        </div>

        <button className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
          Donate Now
        </button>
      </div>
    </Card>
  );
}