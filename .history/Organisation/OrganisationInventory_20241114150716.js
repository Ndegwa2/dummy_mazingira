import React from 'react';
import { Package, Plus } from 'lucide-react';

const inventory = [
  {
    id: 1,
    item: 'Tree Saplings',
    quantity: 5000,
    allocated: 3500,
    beneficiary: 'Wajir Local Comunity',
    status: 'In Stock',
  },
  {
    id: 2,
    item: 'Solar Panels',
    quantity: 200,
    allocated: 150,
    beneficiary: 'Isinya Women Self-Help',
    status: 'Low Stock',
  },
  {
    id: 3,
    item: 'Water Filters',
    quantity: 1000,
    allocated: 800,
    beneficiary: 'Maasai Mara Reserve Community',
    status: 'In Stock',
  },
];

export default function InventoryManagement() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="text-orange-500" />
          <h2 className="text-lg font-bold text-slate-800">Inventory Management</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Plus size={16} />
          Add Item
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm font-medium text-slate-500 border-b border-slate-200">
              <th className="pb-4 pr-4">Item</th>
              <th className="pb-4 px-4">Quantity</th>
              <th className="pb-4 px-4">Allocated</th>
              <th className="pb-4 px-4">Beneficiary</th>
              <th className="pb-4 pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-b border-slate-100">
                <td className="py-4 pr-4">
                  <span className="font-medium text-slate-700">{item.item}</span>
                </td>
                <td className="px-4 text-slate-600">{item.quantity}</td>
                <td className="px-4 text-slate-600">{item.allocated}</td>
                <td className="px-4 text-slate-600">{item.beneficiary}</td>
                <td className="py-4 pl-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.status === 'In Stock' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
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