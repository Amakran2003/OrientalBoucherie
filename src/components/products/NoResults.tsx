import React from 'react';

interface NoResultsProps {
  message: string;
  onReset: () => void;
  resetButtonText: string;
}

const NoResults: React.FC<NoResultsProps> = ({ message, onReset, resetButtonText }) => {
  return (
    <div className="text-center py-20">
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {message}
      </p>
      <button 
        onClick={onReset}
        className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
      >
        {resetButtonText}
      </button>
    </div>
  );
};

export default NoResults;
