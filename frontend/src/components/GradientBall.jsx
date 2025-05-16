/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const GradientBall = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-48 h-48 rounded-full bg-[#227FA1] opacity-30 blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-32 h-32 rounded-full bg-[#227FA1] opacity-50 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="w-20 h-20 rounded-full bg-[#227FA1] opacity-70 blur-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
};

export default GradientBall;