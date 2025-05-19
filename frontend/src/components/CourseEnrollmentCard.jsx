import React from 'react';

const CourseEnrollmentCard = ({ 
  courseImage, 
  currentPrice, 
  originalPrice, 
  discountPercent,
  courseIncludes 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Course Image */}
      <div className="mb-4">
        <img 
          src={courseImage} 
          alt="Course"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Price Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl font-bold text-gray-900">
            USD ${currentPrice}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        {discountPercent && (
          <div className="inline-block">
            <span className="bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded">
              {discountPercent}% OFF
            </span>
          </div>
        )}
      </div>

      {/* This course includes */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">This course includes</h3>
        <ul className="space-y-2">
          {courseIncludes.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-[#227FA1] hover:bg-[#1e6d8b] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Enroll now
        </button>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Send a message
        </button>
      </div>
    </div>
  );
};

export default CourseEnrollmentCard;