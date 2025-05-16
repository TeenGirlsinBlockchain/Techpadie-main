import React from 'react';
import ProgressBar from '../ProgressBar';
import GradientBall from '../GradientBall';
import GlassmorphicCard from '../GlassmorphicCard';
import ContinueButton from '../Buttons/ContinueButton';
import { motion } from 'framer-motion';

const Step2 = ({ onContinue, userData }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
      <ProgressBar step={2} />
      
      <div className="mt-6 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800">More knowledge</h2>
        <p className="text-gray-600 mt-1">All in one place</p>
        <p className="text-gray-600 mt-3 text-sm">
          Enjoy super-fast transaction with our wallet based on the solana blockchain ecosystem.
        </p>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <GradientBall />
      </div>
      
      {/* Scrollable cards container */}
      <div className="mt-12 mb-8 relative z-10">
        <motion.div 
          className="flex space-x-4 overflow-x-auto py-4 px-2 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Card 1 - Introduction */}
          <GlassmorphicCard size="small">
            <div className="flex items-start">
              <div className="mr-2 mt-1 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Introduction to blockchain technology</p>
              </div>
            </div>
          </GlassmorphicCard>
          
          {/* Card 2 - In Progress */}
          <GlassmorphicCard size="large">
            <div className="flex flex-col items-center">
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2.5 mb-4">
                <div className="bg-[#227FA1] h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="font-medium text-white text-center">
                {userData?.fullName || 'User'}'s learning
              </p>
            </div>
          </GlassmorphicCard>
          
          {/* Card 3 - Completed */}
          <GlassmorphicCard size="small">
            <div className="flex items-start justify-between">
              <p className="font-medium text-white">Completed</p>
              <div className="ml-2 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
      
      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Step2;