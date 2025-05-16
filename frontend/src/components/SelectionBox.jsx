import React from 'react';

const SelectionBox = ({ text, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        px-2 py-2 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-center h-full
        ${isSelected 
          ? 'bg-[#227FA1] text-white shadow-lg' 
          : 'bg-white border border-gray-300 text-gray-700 hover:shadow'}
      `}
    >
      <p className="font-medium text-center text-sm whitespace-normal">{text}</p>
    </div>
  );
};

export default SelectionBox;