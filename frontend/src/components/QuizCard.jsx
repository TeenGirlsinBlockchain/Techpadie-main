/* eslint-disable no-undef */
import React, { useState } from 'react';

const QuizCard = ({ quiz, darkMode, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const correct = selectedOption === quiz.correct;
    setIsCorrect(correct);
    setShowResult(true);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setShowResult(false);
      if (correct) onComplete();
    }, 3000);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <div className={`p-6 rounded-xl border-2 ${
      darkMode 
        ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700/50' 
        : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'
    }`}>
      <div className="flex items-center mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-500'
        }`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className={`text-lg font-semibold ${
          darkMode ? 'text-purple-200' : 'text-purple-900'
        }`}>
          Knowledge Check
        </h3>
      </div>
      
      <p className={`mb-6 ${fontSize} ${
        darkMode ? 'text-purple-100' : 'text-purple-800'
      }`}>
        {quiz.question}
      </p>
      
      <div className="space-y-3 mb-6">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && setSelectedOption(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              showResult
                ? index === quiz.correct
                  ? 'border-green-500 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                  : index === selectedOption && !isCorrect
                    ? 'border-red-500 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                    : darkMode
                      ? 'border-gray-600 bg-gray-700 text-gray-300'
                      : 'border-gray-300 bg-gray-50 text-gray-700'
                : selectedOption === index
                  ? darkMode
                    ? 'border-purple-500 bg-purple-900/30 text-purple-200'
                    : 'border-purple-500 bg-purple-100 text-purple-800'
                  : darkMode
                    ? 'border-gray-600 bg-gray-700 text-gray-300 hover:border-purple-400'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-purple-300'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                showResult && index === quiz.correct
                  ? 'border-green-500 bg-green-500'
                  : showResult && index === selectedOption && !isCorrect
                    ? 'border-red-500 bg-red-500'
                    : selectedOption === index
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-400'
              }`}>
                {showResult && index === quiz.correct && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {showResult && index === selectedOption && !isCorrect && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {selectedOption === index && !showResult && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
              <span className="ml-2">{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
            selectedOption !== null
              ? 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
              : darkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Check Answer
        </button>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${
            isCorrect
              ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700'
              : 'bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700'
          }`}>
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className={`font-semibold ${
                isCorrect 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className={`text-sm ${
              isCorrect 
                ? 'text-green-700 dark:text-green-300' 
                : 'text-red-700 dark:text-red-300'
            }`}>
              {quiz.explanation}
            </p>
          </div>
          
          {!isCorrect && (
            <button
              onClick={resetQuiz}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                darkMode
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCard;