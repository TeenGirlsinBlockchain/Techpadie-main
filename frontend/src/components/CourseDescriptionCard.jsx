import React, { useState } from 'react';

const CourseDescriptionCard = ({ 
  title, 
  description, 
  studentsEnrolled, 
  rating 
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header with title and bookmark */}
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-xl font-semibold text-gray-900 leading-tight pr-4">
          {title}
        </h1>
        
        {/* Bookmark Icon */}
        <button 
          onClick={toggleBookmark}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
        >
          {isBookmarked ? (
            <svg className="w-6 h-6 text-[#227FA1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-5-7 5V5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {description}
      </p>

      {/* Stats at bottom */}
      <div className="flex items-center space-x-6">
        {/* Students Enrolled */}
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <span className="text-sm">{studentsEnrolled}+ taught the course</span>
        </div>

        {/* Rating */}
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-600 mr-2">{rating}</span>
          <a 
            href="#reviews" 
            className="text-sm text-[#227FA1] underline hover:text-[#1e6d8b] transition-colors"
          >
            Based on popular reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionCard;