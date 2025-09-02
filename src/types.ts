export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type UserAnswer = {
  questionId: number;
  selectedAnswer: string;
  isCorrect: boolean;
};
