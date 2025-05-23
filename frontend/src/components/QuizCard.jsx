import React, { useState } from 'react';

const QuizCard = ({ 
  quiz, 
  onComplete, 
  fontSize = 'text-base', // Default value if not provided
  darkMode = false 
}) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const correct = selectedOption === quiz.correct;
    setIsCorrect(correct);
    setShowAnswer(true);
    if (onComplete) {
      onComplete(correct);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setIsCorrect(false);
  };

  return (
    <div className={`quiz-card p-6 rounded-lg border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } mt-6`}>
      <div className="quiz-header mb-4">
        <h3 className={`font-semibold ${fontSize} ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Quick Check
        </h3>
      </div>

      <div className="quiz-content">
        <p className={`question mb-4 ${fontSize} ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          {quiz.question}
        </p>

        <div className="options space-y-2 mb-4">
          {quiz.options.map((option, index) => (
            <label
              key={index}
              className={`option flex items-center p-3 rounded cursor-pointer transition-colors ${
                selectedOption === index
                  ? darkMode ? 'bg-blue-900 border-blue-600' : 'bg-blue-50 border-blue-300'
                  : darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              } border`}
            >
              <input
                type="radio"
                name="quiz-option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                disabled={showAnswer}
                className="mr-3"
              />
              <span className={`${fontSize} ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {option}
              </span>
            </label>
          ))}
        </div>

        {!showAnswer && (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`submit-btn px-4 py-2 rounded ${fontSize} font-medium transition-colors ${
              selectedOption === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Submit Answer
          </button>
        )}

        {showAnswer && (
          <div className={`answer-feedback p-4 rounded ${
            isCorrect
              ? darkMode ? 'bg-green-900 border-green-600' : 'bg-green-50 border-green-200'
              : darkMode ? 'bg-red-900 border-red-600' : 'bg-red-50 border-red-200'
          } border`}>
            <div className="flex items-center mb-2">
              <span className={`font-semibold ${fontSize} ${
                isCorrect
                  ? darkMode ? 'text-green-300' : 'text-green-700'
                  : darkMode ? 'text-red-300' : 'text-red-700'
              }`}>
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </span>
            </div>
            <p className={`${fontSize} ${
              isCorrect
                ? darkMode ? 'text-green-200' : 'text-green-600'
                : darkMode ? 'text-red-200' : 'text-red-600'
            }`}>
              {quiz.explanation}
            </p>
            <button
              onClick={handleReset}
              className={`mt-3 px-3 py-1 rounded text-sm ${
                darkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;