// src/types/quiz.ts
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  score: number;
  showResult: boolean;
}