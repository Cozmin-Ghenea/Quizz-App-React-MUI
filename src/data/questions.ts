import type { Language } from "../types";

export const questions: Language[] = {
  ro: [
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
  ],
  en: [
    {
      id: 1,
      question: "What language runs natively in the browser",
      options: ["Python", "C++", "JavaScript", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      id: 2,
      question: "Who created React?",
      options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"],
      correctAnswer: "Facebook (Meta)",
    },
    {
      id: 3,
      question: "What hook do you use for local state?",
      options: ["useReducer", "useEffect", "useState", "useMemo"],
      correctAnswer: "useState",
    },
    {
      id: 4,
      question:
        "What MUI component displays a centered container with padding?",
      options: ["Box", "Stack", "Container", "Card"],
      correctAnswer: "Container",
    },
    {
      id: 5,
      question: "What does 'controlled' mean? component' in React?",
      options: [
        "Styled component",
        "State-controlled input value",
        "Component without props",
        "Read-only component",
      ],
      correctAnswer: "State-controlled input value",
    },
  ],
};
