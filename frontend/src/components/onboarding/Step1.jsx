import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import SelectionBox from '../SelectionBox';
import ContinueButton from '../Buttons/ContinueButton';

const Step1 = ({ onContinue }) => {
  // State for each question's selected option
  const [preferences, setPreferences] = useState({
    purpose: '', 
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
  });

  // Handler for selecting an option
  const handleSelection = (question, value) => {
    setPreferences(prev => ({
      ...prev,
      [question]: value
    }));
  };
  
  // Check if all questions have been answered
  const areAllQuestionsAnswered = () => {
    return Object.values(preferences).every(value => value !== '');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <ProgressBar step={1} />
      
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome onboard</h2>
        <p className="text-gray-600 mt-1">Let's get to know you!</p>
      </div>
      
      <div className="mt-8">
        <p className="font-medium text-gray-700 mb-3">What brings you to Techpadie?</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Learn" 
            isSelected={preferences.purpose === 'Learn'} 
            onClick={() => handleSelection('purpose', 'Learn')} 
          />
          <SelectionBox 
            text="Earn" 
            isSelected={preferences.purpose === 'Earn'} 
            onClick={() => handleSelection('purpose', 'Earn')} 
          />
          <SelectionBox 
            text="Community" 
            isSelected={preferences.purpose === 'Community'} 
            onClick={() => handleSelection('purpose', 'Community')} 
          />
        </div>
      </div>
      
      {/* Question 2 */}
      <div className="mt-6">
        <p className="font-medium text-gray-700 mb-3">Question 2</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Option 1" 
            isSelected={preferences.question2 === 'Option 1'} 
            onClick={() => handleSelection('question2', 'Option 1')} 
          />
          <SelectionBox 
            text="Option 2" 
            isSelected={preferences.question2 === 'Option 2'} 
            onClick={() => handleSelection('question2', 'Option 2')} 
          />
          <SelectionBox 
            text="Option 3" 
            isSelected={preferences.question2 === 'Option 3'} 
            onClick={() => handleSelection('question2', 'Option 3')} 
          />
        </div>
      </div>
      
      {/* Repeat similar structure for questions 3-6 */}
      {/* For brevity, I'm showing just 3 out of the 6 questions */}
      <div className="mt-6">
        <p className="font-medium text-gray-700 mb-3">Question 3</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Option 1" 
            isSelected={preferences.question3 === 'Option 1'} 
            onClick={() => handleSelection('question3', 'Option 1')} 
          />
          <SelectionBox 
            text="Option 2" 
            isSelected={preferences.question3 === 'Option 2'} 
            onClick={() => handleSelection('question3', 'Option 2')} 
          />
          <SelectionBox 
            text="Option 3" 
            isSelected={preferences.question3 === 'Option 3'} 
            onClick={() => handleSelection('question3', 'Option 3')} 
          />
        </div>
      </div>
      
      <ContinueButton onClick={() => {
        onContinue(preferences);
      }} />
    </div>
  );
};

export default Step1;