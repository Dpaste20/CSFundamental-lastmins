// src/components/QuizContainer.tsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, ChevronDown } from 'lucide-react';
import type { Question } from '../types';
import QuestionCard from './QuestionCard';

interface QuizContainerProps {
  questions: Question[];
  title: string;
  onBack: () => void;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ questions, title, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [score, setScore] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    const newShowResult = [...showResult];
    
    newAnswers[currentQuestion] = answerIndex;
    newShowResult[currentQuestion] = true;
    
    setAnswers(newAnswers);
    setShowResult(newShowResult);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  useEffect(() => {
    calculateScore();
  }, [answers]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionJump = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setShowDropdown(false);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(new Array(questions.length).fill(false));
    setScore(0);
  };

  const answeredQuestions = answers.filter(answer => answer !== null).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Mobile Responsive */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg p-1 sm:p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base font-medium">Back</span>
            </button>
            
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center flex-1 mx-2 sm:mx-4 truncate">
              {title}
            </h1>
            
            <button
              onClick={handleReset}
              className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg p-1 sm:p-2 transition-colors"
            >
              <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
              <span className="text-sm sm:text-base font-medium hidden sm:inline">Reset</span>
            </button>
          </div>
          
          {/* Progress Bar - Mobile Optimized */}
          <div className="mt-3 sm:mt-4">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
              <span>Progress: {answeredQuestions}/{questions.length}</span>
              <span>{Math.round((answeredQuestions / questions.length) * 100)}% complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(answeredQuestions / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Quiz Controls - Mobile Responsive */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Question Navigation Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full sm:w-auto flex items-center justify-between bg-gray-100 hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-64 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-20">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionJump(index)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                        index === currentQuestion ? 'bg-indigo-50 text-indigo-600 font-medium' : ''
                      } ${answers[index] !== null ? 'border-l-4 border-green-400' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Question {index + 1}</span>
                        {answers[index] !== null && (
                          <span className="text-green-500 text-xs">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Score Display - Mobile Optimized */}
            <div className="flex items-center justify-center sm:justify-start gap-4 text-sm sm:text-base">
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900">{score}/{questions.length}</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-indigo-600">
                  {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}%
                </div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={answers[currentQuestion]}
          showResult={showResult[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />

        {/* Navigation Controls - Mobile Responsive */}
        <div className="flex justify-between items-center mt-4 sm:mt-6 gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 sm:flex-none sm:px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors text-sm sm:text-base"
          >
            <span className="flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              Previous
            </span>
          </button>
          
          <div className="flex-1 sm:flex-none text-center px-2">
            <span className="text-sm sm:text-base text-gray-600 font-medium">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          
          {showResult[currentQuestion] ? (
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              className="flex-1 sm:flex-none sm:px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                Next
                <ArrowRight className="h-4 w-4 ml-1 sm:ml-2" />
              </span>
            </button>
          ) : (
            <div className="flex-1 sm:flex-none sm:px-6 py-3 bg-gray-100 text-gray-400 rounded-lg font-medium text-sm sm:text-base text-center">
              Answer to continue
            </div>
          )}
        </div>

        {/* Final Results - Mobile Responsive */}
        {answeredQuestions === questions.length && (
          <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Quiz Complete! 🎉</h2>
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Your Score: {Math.round((score / questions.length) * 100)}%
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              >
                Try Again
              </button>
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm sm:text-base"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizContainer;