import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import type { Question, UserAnswer } from "../types";
import ResultsChart from "./ResultsChart";

type SummaryProps = {
  questions: Question[];
  answers: UserAnswer[];
  onRestart?: () => void;
};

function Summary({ questions, answers, onRestart }: SummaryProps) {
  const correct = answers.filter((a) => a.isCorrect).length;
  const incorrect = answers.length - correct;

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Rezumat Quiz
      </Typography>

      <Typography variant="h6" sx={{ mb: 4, textAlign: "center" }}>
        Ai răspuns corect la {correct} din {questions.length} întrebări.
      </Typography>

      <ResultsChart correct={correct} incorrect={incorrect} />

      <Box mt={5} textAlign="left">
        <Typography variant="h6" gutterBottom>
          Detalii Raspunsuri
        </Typography>
        <List>
          {questions.map((q) => {
            const UserAnswer = answers.find((a) => a.questionId === q.id);
            const isCorrect = UserAnswer?.isCorrect;

            return (
              <ListItem
                key={q.id}
                sx={{
                  borderLeft: `6px solid ${isCorrect ? "#4caf50" : "#f44336"}`,
                  mb: 1,
                  borderRadius: 1,
                  bgcolor: isCorrect
                    ? "rgba(76,175,80,0.1)"
                    : "rgba(244,67,54,0.1)",
                }}
              >
                <ListItemText
                  primary={q.question}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color={isCorrect ? "green" : "red"}
                      >
                        Răspunsul tău:{" "}
                        {UserAnswer?.selectedAnswer || "Nerăspuns"}
                      </Typography>

                      <br />
                      {!isCorrect && (
                        <Typography
                          component="span"
                          variant="body2"
                          color="textSecondary"
                        >
                          Corect era: {q.correctAnswer}
                        </Typography>
                      )}
                    </>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>

      {onRestart && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" onClick={onRestart}>
            Restart Quiz
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default Summary;
