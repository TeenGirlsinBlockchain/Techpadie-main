import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Course Image */}
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-32 object-cover"
        />
        {/* Device icon if present */}
        {course.deviceType && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Course Details */}
      <div className="p-4">
        {/* Level Badge */}
        <div className="mb-2">
          <span className="bg-[#227FA1] text-white text-xs font-medium px-3 py-1 rounded-full">
            {course.level}
          </span>
        </div>
        
        {/* Stats */}
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <div className="flex items-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            {course.students}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {course.rating}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-medium text-gray-800 mb-1">{course.title}</h3>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-600 mb-3">{course.subtitle}</p>
        
        {/* Instructor */}
        <div className="flex items-center mt-2">
          <img 
            src={course.instructor.avatar} 
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm font-medium text-[#227FA1]">{course.instructor.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;