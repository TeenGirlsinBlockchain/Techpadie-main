import React, { useState } from 'react';

const CourseMenu = ({ modules, currentLessonId, onLessonSelect }) => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  // Initially expand the module containing the current lesson
  React.useEffect(() => {
    modules.forEach(module => {
      const hasCurrentLesson = module.lessons.some(lesson => lesson.id === currentLessonId);
      if (hasCurrentLesson) {
        setExpandedModules(prev => ({
          ...prev,
          [module.id]: true
        }));
      }
    });
  }, [modules, currentLessonId]);

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-lg">Course Menu</h2>
      </div>
      
      <div className="py-2">
        {modules.map(module => (
          <div key={module.id} className="mb-2">
            {/* Module Header */}
            <button
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleModule(module.id)}
            >
              <span className="font-medium text-sm text-gray-800">{module.title}</span>
              <svg 
                className={`w-4 h-4 transform transition-transform ${expandedModules[module.id] ? 'rotate-180' : ''}`} 
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
                {module.lessons.map(lesson => (
                  <button
                    key={lesson.id}
                    className={`w-full text-left p-2 pl-6 text-sm ${
                      currentLessonId === lesson.id 
                        ? 'bg-blue-50 text-blue-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    } flex items-center`}
                    onClick={() => onLessonSelect(lesson.id)}
                  >
                    {lesson.completed && (
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    <span>{lesson.title}</span>
                    <span className="ml-auto text-xs font-medium text-gray-500">{lesson.points} pts</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMenu;