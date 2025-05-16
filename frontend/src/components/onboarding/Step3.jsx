import React from 'react';
import ProgressBar from '../ProgressBar';
import GradientBall from '../GradientBall';
import GlassmorphicCard from '../GlassmorphicCard';
import ContinueButton from '../Buttons/ContinueButton';
import { motion } from 'framer-motion';

const Step3 = ({ onContinue }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
      <ProgressBar step={3} />
      
      <div className="mt-6 relative z-10">
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="bg-[#227FA1] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">1</span>
            <p className="text-gray-800 font-medium">Your crypto</p>
          </div>
          
          <div className="flex items-center">
            <span className="bg-[#227FA1] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
            <p className="text-gray-800 font-medium">Access to more freedom</p>
          </div>
          
          <div className="flex items-center">
            <span className="bg-[#227FA1] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">3</span>
            <p className="text-gray-800 font-medium">Enjoy super-fast transaction with our wallet based on the solana blockchain ecosystem.</p>
          </div>
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <GradientBall />
      </div>
      
      {/* Card with Send/Receive */}
      <div className="mt-12 flex justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassmorphicCard size="large">
            <div className="flex justify-around">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <p className="text-white font-medium">Send</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="text-white font-medium">Receive</p>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
      
      <ContinueButton onClick={onContinue} />
    </div>
  );
};

export default Step3;