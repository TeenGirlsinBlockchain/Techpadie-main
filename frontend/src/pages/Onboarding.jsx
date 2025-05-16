import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/onboarding/Step1';
import Step2 from '../components/onboarding/Step2';
import Step3 from '../components/onboarding/Step3';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    fullName: 'John Doe', // This would come from your signup data
    preferences: {}
  });

  const handleStep1Complete = (preferences) => {
    setUserData(prev => ({
      ...prev,
      preferences
    }));
    setCurrentStep(2);
  };

  const handleStep2Complete = () => {
    setCurrentStep(3);
  };

  const handleStep3Complete = () => {
    // Navigate to dashboard or home after onboarding
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {currentStep === 1 && (
        <Step1 onContinue={handleStep1Complete} />
      )}
      
      {currentStep === 2 && (
        <Step2 
          onContinue={handleStep2Complete} 
          userData={userData}
        />
      )}
      
      {currentStep === 3 && (
        <Step3 onContinue={handleStep3Complete} />
      )}
    </div>
  );
};

export default Onboarding;