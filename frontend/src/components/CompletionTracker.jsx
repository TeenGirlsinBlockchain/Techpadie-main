import React, { useState } from 'react';

const CompletionTracker = ({ isCompleted, onMarkComplete, points }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMarkComplete = () => {
    if (!isCompleted) {
      setIsAnimating(true);
      onMarkComplete();
      
      // Reset animation after completion
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Completion Button */}
      <button
        onClick={handleMarkComplete}
        disabled={isCompleted}
        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
          isCompleted
            ? 'bg-green-100 text-green-800 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
        } ${isAnimating ? 'animate-pulse scale-110' : ''}`}
      >
        {isCompleted ? (
          <>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Completed
          </>
        ) : (
          <>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mark Complete
          </>
        )}
      </button>

      {/* Points Display */}
      <div className={`flex items-center px-3 py-2 rounded-lg ${
        isCompleted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
      }`}>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span className="text-sm font-medium">{points} points</span>
      </div>

      {/* Success Animation */}
      {isAnimating && (
        <div className="flex items-center">
          <div className="animate-bounce">
            <span className="text-2xl">🎉</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompletionTracker;