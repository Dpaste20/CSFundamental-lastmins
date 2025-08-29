// src/pages/CN.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizContainer from '../components/QuizContainer';
import { cnQuestions } from '../data/cnQuestions';

const CN: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <QuizContainer
      questions={cnQuestions}
      title="Computer Networks Quiz"
      onBack={handleBack}
    />
  );
};

export default CN;