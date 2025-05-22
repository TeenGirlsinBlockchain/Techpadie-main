import React, { useState } from 'react';

const GlossaryTooltip = ({ children, text, definition, darkMode }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!definition) {
    return children;
  }

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={`cursor-help border-b-2 border-dotted ${
        darkMode 
          ? 'border-blue-400 hover:border-blue-300' 
          : 'border-blue-500 hover:border-blue-600'
      }`}>
        {children}
      </span>
      
      {showTooltip && (
        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm rounded-lg shadow-lg z-50 w-64 ${
          darkMode 
            ? 'bg-gray-800 text-gray-200 border border-gray-700' 
            : 'bg-white text-gray-900 border border-gray-200'
        }`}>
          <div className={`font-semibold mb-1 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {text}
          </div>
          <div className="text-xs leading-relaxed">
            {definition}
          </div>
          
          {/* Tooltip arrow */}
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
            darkMode ? 'bg-gray-800 border-r border-b border-gray-700' : 'bg-white border-r border-b border-gray-200'
          }`} />
        </div>
      )}
    </span>
  );
};

export default GlossaryTooltip;