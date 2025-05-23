import React from 'react';

const NavigationButtons = ({ 
  onPrevious, 
  onNext, 
  isFirstLesson, 
  isLastLesson, 
  currentLesson,
  darkMode 
}) => {
  return (
    <div className={`border-t p-4 ${
      darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    }`}>
      <div className="flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={isFirstLesson}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isFirstLesson
              ? darkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : darkMode
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        {/* Current Lesson Info */}
        <div className="text-center">
          <div className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            {currentLesson?.title || 'Loading...'}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Lesson Progress
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={isLastLesson}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isLastLesson
              ? darkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
          }`}
        >
          {isLastLesson ? 'Course Complete' : 'Next'}
          {!isLastLesson && (
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Lesson Progress</span>
          <span>🎯</span>
        </div>
        <div className={`w-full h-2 rounded-full ${
          darkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}>
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: '75%' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;