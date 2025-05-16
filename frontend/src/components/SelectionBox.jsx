import React from 'react';

const SelectionBox = ({ text, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        px-6 py-4 rounded-xl cursor-pointer transition-all duration-300
        ${isSelected 
          ? 'bg-[#227FA1] text-white shadow-lg' 
          : 'bg-white border border-gray-300 text-gray-700 hover:shadow'}
      `}
    >
      <p className="font-medium text-center">{text}</p>
    </div>
  );
};

export default SelectionBox;