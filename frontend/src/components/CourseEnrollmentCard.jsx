import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CourseEnrollmentCard = ({ 
  courseImage, 
  currentPrice, 
  originalPrice, 
  discountPercent, 
  courseIncludes 
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEnrollNow = () => {
    // Navigate to the learning page with the first lesson
    // You can customize this to go to a specific lesson or just the course overview
    navigate(`/learn/${id}/lesson/l1`);
  };

  const handleStartLearning = () => {
    // Alternative: Navigate to course overview without specific lesson
    navigate(`/learn/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Course Image */}
      <div className="mb-6">
        <img 
          src={courseImage} 
          alt="Course preview"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Pricing Section */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">
            ${currentPrice.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discountPercent && (
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {discountPercent}% OFF
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        {/* Primary CTA - Start Learning (for development/demo) */}
        <button 
          onClick={handleStartLearning}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          🚀 Start Learning Now (Free Preview)
        </button>
        
        {/* Secondary CTA - Full Enrollment */}
        <button 
          onClick={handleEnrollNow}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Enroll Now
        </button>
        
        {/* Wallet Connection (for later implementation) */}
        <button 
          className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          disabled
        >
          Connect Wallet (Coming Soon)
        </button>
      </div>

      {/* Course Includes */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">This course includes:</h3>
        <ul className="space-y-2">
          {courseIncludes.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>30-day money-back guarantee</span>
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Full lifetime access</span>
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollmentCard;