import { useState } from "react";
import QuestionCard from "./components/QuestionCard";

import { questions } from "./data/questions";
import type { UserAnswer } from "./types";
import Summary from "./components/Summary";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  colors,
  Container,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  const [language, setLanguage] = useState<"ro" | "en">("ro");

  const questionsList = questions[language];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [finished, setFinished] = useState(false);
  const total = questionsList.length;
  const current = questionsList[index];
  const progress = Math.round((index / total) * 100);

  const handleNext = () => {
    if (!selected) return;

    const isCorrect = selected === current.correctAnswer;

    setAnswers((prev) => [
      ...prev,
      { questionId: current.id, selectedAnswer: selected, isCorrect },
    ]);
    setSelected(null);

    if (index < total - 1) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Quiz App 🌍
          </Typography>
          <Box>
            <Button color="primary" onClick={() => setLanguage("ro")}>
              🇷🇴
            </Button>
            <Button onClick={() => setLanguage("en")}>🇬🇧</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        {!finished ? (
          <>
            <Box sx={{ mb: 3 }}>
              <LinearProgress variant="determinate" value={progress} />
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 1, opacity: 0.7 }}
              >
                Progres:{progress}%
              </Typography>
            </Box>

            <QuestionCard
              question={current}
              index={index}
              total={total}
              selected={selected}
              onSelect={setSelected}
              onNext={handleNext}
              canGoNext={Boolean(selected)}
            />
          </>
        ) : (
          <Summary
            questions={questionsList}
            answers={answers}
            onRestart={handleRestart}
          />
          // <Box sx={{ textAlign: "center", mt: 6 }}>
          //   <Typography variant="h5" sx={{ mb: 2 }}>
          //     Ai terminat quiz-ul 🎉
          //   </Typography>
          //   <Typography sx={{ mb: 3, opacity: 0.8 }}>
          //     În capitolul următor construim **rezumatul final** (scor + pie
          //     chart) și **persistăm** totul în LocalStorage.
          //   </Typography>
          //   <Button variant="contained" onClick={handleRestart}>
          //     Restart
          //   </Button>
          // </Box>
        )}
      </Container>
    </>
  );
}

export default App;
