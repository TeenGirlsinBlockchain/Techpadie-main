import React from 'react';
import ProgressBar from '../ProgressBar';
import ContinueButton from '../Buttons/ContinueButton';

const Step2 = ({ onContinue, userData }) => {
  const userName = userData?.fullName || 'User';
  
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
      {/* Progress Bar - Using full primary color */}
      <ProgressBar step={2} />
      
      {/* Content */}
      <div className="relative z-10 mt-6">
        <h2 className="text-2xl font-bold text-[#227FA1]">More Knowledge</h2>
        <p className="text-gray-700 mt-1">All in one place</p>
        <p className="text-gray-600 mt-2 text-sm">
          Enjoy super-fast transaction with our wallet based on the solana blockchain ecosystem.
        </p>
      </div>
      
      {/* Enhanced Background Gradient - Expanded to cover cards but not reach progress bar */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#e6f4f8] via-[#c8e8f0] to-[#e6f4f8] opacity-60" />
        
        {/* Central glow with stronger blue */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#227FA1] blur-2xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#227FA1] blur-xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#227FA1] blur-lg opacity-20" />
      </div>
      
      {/* Cards - Staggered layout with enhanced glass effect */}
      <div className="mt-10 mb-10 relative z-10 flex flex-col items-center">
        {/* Card 1 - Introduction - Wider to fit text on one line */}
        <div className="w-full max-w-sm ml-8 p-4 rounded-xl backdrop-filter backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg">
          <div className="flex items-center">
            <div className="text-green-500 mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#4CAF50" fillOpacity="0.2" />
                <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-white font-medium whitespace-nowrap">Introduction to blockchain technology</p>
          </div>
        </div>
        
        {/* Card 2 - User's Learning - Larger and centered */}
        <div className="w-full max-w-md p-5 rounded-xl backdrop-filter backdrop-blur-lg bg-white/15 border border-white/30 shadow-lg my-4">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </div>
            <p className="text-white font-medium">{userName}'s learning</p>
          </div>
        </div>
        
        {/* Card 3 - Completed - Offset to the right like the first card */}
        <div className="w-full max-w-xs ml-8 p-4 rounded-xl backdrop-filter backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg">
          <div className="flex items-center justify-between">
            <p className="text-white font-medium">Completed</p>
            <div className="text-green-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#4CAF50" fillOpacity="0.2" />
                <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Continue Button - Using full primary color */}
      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Step2;