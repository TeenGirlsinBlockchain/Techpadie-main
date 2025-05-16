import React from 'react';
import ProgressBar from '../ProgressBar';
import ContinueButton from '../Buttons/ContinueButton';

const Step3 = ({ onContinue }) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
      {/* Progress Bar - fully filled */}
      <ProgressBar step={3} />
      
      {/* Content */}
      <div className="relative z-10 mt-6">
        <h2 className="text-2xl font-bold text-[#227FA1]">Your Crypto</h2>
        <p className="text-gray-700 mt-1">Access to more freedom</p>
        <p className="text-gray-600 mt-2 text-sm">
          Enjoy super-fast transaction with our wallet based on the solana blockchain ecosystem.
        </p>
      </div>
      
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#e6f4f8] via-[#c8e8f0] to-[#e6f4f8] opacity-60" />
        
        {/* Central glow with stronger blue */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#227FA1] blur-2xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#227FA1] blur-xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#227FA1] blur-lg opacity-20" />
      </div>
      
      {/* Single Card with Send/Receive Options */}
      <div className="mt-16 mb-16 relative z-10 flex justify-center">
        <div className="w-full max-w-md p-6 rounded-xl backdrop-filter backdrop-blur-lg bg-white/15 border border-white/30 shadow-lg">
          <div className="flex justify-center space-x-12">
            {/* Send Option */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#227FA1]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <p className="text-white font-medium">Send</p>
            </div>
            
            {/* Receive Option */}
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#227FA1]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white font-medium">Receive</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Continue Button */}
      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Step3;