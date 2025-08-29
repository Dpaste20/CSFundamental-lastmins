// src/pages/DBMS.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizContainer from '../components/QuizContainer';
import { dbmsQuestions } from '../data/dbmsQuestions';

const DBMS: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <QuizContainer
      questions={dbmsQuestions}
      title="DBMS Quiz"
      onBack={handleBack}
    />
  );
};

export default DBMS;