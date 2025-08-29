// src/components/QuestionCard.tsx
import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (answerIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  showResult,
  onAnswerSelect
}) => {
  const getOptionStyle = (optionIndex: number) => {
    if (!showResult) {
      return selectedAnswer === optionIndex
        ? 'bg-blue-100 border-blue-500 text-blue-900'
        : 'bg-white border-gray-300 hover:bg-gray-50';
    }

    // Show results
    if (optionIndex === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-900';
    }
    if (selectedAnswer === optionIndex && selectedAnswer !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-900';
    }
    return 'bg-gray-50 border-gray-300 text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {question.question}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onAnswerSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-200 ${getOptionStyle(index)} ${
              !showResult ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
          >
            <span className="font-medium mr-2">
              {String.fromCharCode(97 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {showResult && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
          <p className="text-blue-800 text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;