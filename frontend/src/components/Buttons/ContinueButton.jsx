import React from 'react';

const ContinueButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-[414px] h-[44px] max-w-full rounded-[10px] bg-[#227FA1] hover:bg-[#1c6a89] text-white font-medium flex items-center justify-center mx-auto mt-6 transition-colors duration-300"
    >
      Continue
    </button>
  );
};

export default ContinueButton;