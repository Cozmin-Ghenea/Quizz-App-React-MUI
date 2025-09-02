import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    question: "Ce limbraj ruleaza nativ in browser",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    id: 2,
    question: "Cine a creat React?",
    options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"],
    correctAnswer: "Facebook (Meta)",
  },
  {
    id: 3,
    question: "Ce hook folosești pentru state local?",
    options: ["useReducer", "useEffect", "useState", "useMemo"],
    correctAnswer: "useState",
  },
  {
    id: 4,
    question: "Ce componentă MUI afișează un container centrat cu padding?",
    options: ["Box", "Stack", "Container", "Card"],
    correctAnswer: "Container",
  },
  {
    id: 5,
    question: "Ce înseamnă 'controlled component' în React?",
    options: [
      "Componentă stilizată",
      "Valoarea intrărilor controlată de state",
      "Componentă fără props",
      "Componentă doar pentru citire",
    ],
    correctAnswer: "Valoarea intrărilor controlată de state",
  },
];
