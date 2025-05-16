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
        <h2 className="text-2xl font-bold text-black">Welcome Onboard</h2>
        <p className="text-gray-800 mt-1">Let's get to know you!</p>
      </div>
      
      <div className="mt-8">
        <p className="font-medium text-[#227FA1] mb-3">What brings you to Techpadie?</p>
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
        <p className="font-medium text-[#227FA1] mb-3">Highest level of education ?</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Learn" 
            isSelected={preferences.question2 === 'Learn'} 
            onClick={() => handleSelection('question2', 'Learn')} 
          />
          <SelectionBox 
            text="Earn" 
            isSelected={preferences.question2 === 'Earn'} 
            onClick={() => handleSelection('question2', 'Earn')} 
          />
          <SelectionBox 
            text="Community" 
            isSelected={preferences.question2 === 'Community'} 
            onClick={() => handleSelection('question2', 'Community')} 
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium text-[#227FA1] mb-3">Preferred social media ?</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Telegram" 
            isSelected={preferences.question3 === 'Telegram'} 
            onClick={() => handleSelection('question3', 'Telegram')} 
          />
          <SelectionBox 
            text="Discord" 
            isSelected={preferences.question3 === 'Discord'} 
            onClick={() => handleSelection('question3', 'Discord')} 
          />
          <SelectionBox 
            text="Twitter X" 
            isSelected={preferences.question3 === 'Twitter X'} 
            onClick={() => handleSelection('question3', 'Twitter X')} 
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium text-[#227FA1] mb-3">Which application mode do you prefer ?</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="Dark mode" 
            isSelected={preferences.question4 === 'Dark mode'} 
            onClick={() => handleSelection('question4', 'Dark mode')} 
          />
          <SelectionBox 
            text="Light mode" 
            isSelected={preferences.question4 === 'Light mode'} 
            onClick={() => handleSelection('question4', 'Light mode')} 
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-medium text-[#227FA1] mb-3">What’s your level of web3;0 experience ?</p>
        <div className="grid grid-cols-3 gap-3">
          <SelectionBox 
            text="0-1 year" 
            isSelected={preferences.question5 === '0-1 year'} 
            onClick={() => handleSelection('question5', '0-1 year')} 
          />
          <SelectionBox 
            text="2-4 years" 
            isSelected={preferences.question5 === '2-4 years'} 
            onClick={() => handleSelection('question5', '2-4 years')} 
          />
          <SelectionBox 
            text="5 years-above" 
            isSelected={preferences.question5 === '5 years-above'} 
            onClick={() => handleSelection('question5', '5 years-above')} 
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