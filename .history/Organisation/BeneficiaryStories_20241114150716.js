import React from 'react';
import { FileText, Plus } from 'lucide-react';

// Reusable Story Card Component
const StoryCard = ({ title, date, preview, beneficiary }) => {
  return (
    <div className="p-4 border border-slate-200 rounded-lg hover:border-purple-200 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-slate-800">{title}</h3>
        <span className="text-sm text-slate-500">{date}</span>
      </div>
      <p className="text-sm text-slate-600 mb-2">{preview}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-purple-500">{beneficiary}</span>
        <button className="text-sm text-blue-500 hover:text-blue-600">Read more</button>
      </div>
    </div>
  );
};

// Main BeneficiaryStories Component
const BeneficiaryStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Reforestation Success in Mpeketoni',
      beneficiary: 'Local Community A',
      date: '2024-03-15',
      preview: 'Successfully planted 10,000 trees with the help of local communities...',
    },
    {
      id: 2,
      title: 'Wildlife Protection Program',
      beneficiary: 'Reserve B Tsavo',
      date: '2024-03-14',
      preview: 'Implemented new protection measures for endangered species...',
    },
    {
      id: 3,
      title: 'Clean Water Initiative',
      beneficiary: 'Samburu',
      date: '2024-03-13',
      preview: 'Provided clean water access to over 500 families...',
    },
  ];

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
          <StoryCard
            key={story.id}
            title={story.title}
            date={story.date}
            preview={story.preview}
            beneficiary={story.beneficiary}
          />
        ))}
      </div>
    </div>
  );
};

export default BeneficiaryStories;
