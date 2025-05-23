import React, { useState } from 'react';

const TableOfContents = ({ modules, currentLessonId, completedLessons, onLessonSelect, darkMode }) => {
  const [expandedModules, setExpandedModules] = useState({ m1: true });

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className={`w-80 border-r ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} overflow-y-auto`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Course Menu
        </h2>
      </div>
      
      <div className="py-2">
        {modules.map(module => (
          <div key={module.id} className="mb-2">
            {/* Module Header */}
            <button
              className={`w-full flex items-center justify-between px-4 py-3 ${
                darkMode 
                  ? 'hover:bg-gray-700 text-gray-200' 
                  : 'hover:bg-gray-100 text-gray-800'
              } focus:outline-none transition-colors`}
              onClick={() => toggleModule(module.id)}
            >
              <span className="font-medium text-sm">{module.title}</span>
              <svg 
                className={`w-4 h-4 transform transition-transform ${
                  expandedModules[module.id] ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Module Lessons */}
            {expandedModules[module.id] && (
              <div className="pl-4">
                {module.lessons.map((lesson, index) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isCurrent = currentLessonId === lesson.id;
                  
                  return (
                    <button
                      key={lesson.id}
                      className={`w-full text-left p-3 pl-6 text-sm flex items-center group transition-all ${
                        isCurrent 
                          ? darkMode
                            ? 'bg-blue-900 text-blue-200 border-r-2 border-blue-400'
                            : 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                          : darkMode
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => onLessonSelect(lesson.id)}
                    >
                      {/* Completion Status */}
                      <div className="mr-3 flex-shrink-0">
                        {isCompleted ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : isCurrent ? (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        ) : (
                          <div className={`w-5 h-5 rounded-full border-2 ${
                            darkMode ? 'border-gray-600' : 'border-gray-300'
                          } group-hover:border-blue-400 transition-colors`}>
                            <span className="sr-only">Not started</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Lesson Info */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{lesson.title}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className={`text-xs ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Lesson {index + 1}
                          </span>
                          <span className={`text-xs font-medium ${
                            isCompleted 
                              ? 'text-green-600' 
                              : darkMode 
                                ? 'text-gray-400' 
                                : 'text-gray-500'
                          }`}>
                            {lesson.points} pts
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;