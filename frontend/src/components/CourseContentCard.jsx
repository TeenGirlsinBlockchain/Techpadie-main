// File: src/components/CourseContentCard.jsx

import React, { useState } from 'react';

const CourseContentCard = ({ sections }) => {
  const [expandedSections, setExpandedSections] = useState({ 1: true }); // First section expanded by default

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const totalLessons = sections.reduce((total, section) => total + section.lessons.length, 0);
  const totalDuration = "2hr 30min"; // You can calculate this dynamically

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Course content Overview</h2>
        <a 
          href="#" 
          className="text-sm text-[#227FA1] hover:text-[#1e6d8b] transition-colors"
        >
          Collapse all sections
        </a>
      </div>

      {/* Course Stats */}
      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {sections.length} sections
        </span>
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          {totalLessons} lectures
        </span>
        <span>{totalDuration} total length</span>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <svg 
                  className={`w-4 h-4 mr-3 text-gray-400 transition-transform ${
                    expandedSections[section.id] ? 'transform rotate-90' : ''
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-900">
                  {section.title}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {section.lessons.length} lectures • {section.duration}
              </div>
            </button>

            {/* Section Content */}
            {expandedSections[section.id] && (
              <div className="border-t border-gray-200">
                {section.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="px-8 py-3 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{lesson.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentCard;