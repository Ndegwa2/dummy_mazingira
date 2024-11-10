import React from 'react';
import { FileText, Plus } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'Reforestation Success in Amazon',
    beneficiary: 'Local Community A',
    date: '2024-03-15',
    preview: 'Successfully planted 10,000 trees with the help of local communities...',
  },
  {
    id: 2,
    title: 'Wildlife Protection Program',
    beneficiary: 'Reserve B',
    date: '2024-03-14',
    preview: 'Implemented new protection measures for endangered species...',
  },
  {
    id: 3,
    title: 'Clean Water Initiative',
    beneficiary: 'Village C',
    date: '2024-03-13',
    preview: 'Provided clean water access to over 500 families...',
  },
];

export default function BeneficiaryStories() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileText className="text-purple-500" />
          <h2 className="text-lg font-bold text-slate-800">Beneficiary Stories</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Plus size={16} />
          New Story
        </button>
      </div>

      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="p-4 border border-slate-200 rounded-lg hover:border-purple-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-slate-800">{story.title}</h3>
              <span className="text-sm text-slate-500">{story.date}</span>
            </div>
            <p className="text-sm text-slate-600 mb-2">{story.preview}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-500">{story.beneficiary}</span>
              <button className="text-sm text-blue-500 hover:text-blue-600">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}