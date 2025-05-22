import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, darkMode }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search in lesson..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`block w-full pl-10 pr-3 py-2 border rounded-md text-sm transition-colors ${
          darkMode
            ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
        } focus:outline-none focus:ring-1`}
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
            darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;