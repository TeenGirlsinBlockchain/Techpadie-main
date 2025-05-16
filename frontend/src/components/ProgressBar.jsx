import React from 'react';

const ProgressBar = ({ step }) => {
  // Calculate progress based on step (1, 2, or 3)
  const progress = (step / 3) * 100;
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#227FA1] rounded-full transition-all duration-500 ease-in-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;