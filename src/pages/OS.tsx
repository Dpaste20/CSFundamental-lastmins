// src/pages/OS.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizContainer from '../components/QuizContainer';
import { osQuestions } from '../data/osQuestions';

const OS: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <QuizContainer
      questions={osQuestions}
      title="Operating Systems Quiz"
      onBack={handleBack}
    />
  );
};

export default OS;