import React from 'react';
import { AlertCircle } from 'lucide-react';

const StatusBanner = ({ status }) => {
  if (status === 'approved') return null;

  const statusConfig = {
    pending: {
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-200',
      message: "Your organization application is pending approval. We'll notify you once it's reviewed."
    },
    rejected: {
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      borderColor: 'border-red-200',
      message: 'Your organization application needs attention. Please review the feedback and resubmit.'
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bgColor} ${config.textColor} ${config.borderColor} border rounded-lg p-4 mb-8`}>
      <div className="flex items-center gap-3">
        <AlertCircle className="flex-shrink-0" />
        <p className="text-sm font-medium">{config.message}</p>
      </div>
    </div>
  );
};

export default StatusBanner;
