import React from 'react';

const GlassmorphicCard = ({ children, size = "normal" }) => {
  // Different size classes based on the size prop
  const sizeClasses = {
    small: "p-4 w-64",
    normal: "p-5 w-72",
    large: "p-6 w-80",
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        backdrop-filter backdrop-blur-lg 
        bg-white bg-opacity-20 
        rounded-xl shadow-lg 
        border border-white border-opacity-20
      `}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;