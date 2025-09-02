import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import type { Question } from "../types";

type QuestionCardProps = {
  question: Question;
  index: number;
  total: number;
  selected: string | null;
  onSelect: (option: string) => void;
  onNext: () => void;
  canGoNext: boolean;
};

function QuestionCard({
  question,
  index,
  total,
  selected,
  onSelect,
  onNext,
  canGoNext,
}: QuestionCardProps) {
  return (
    <Card sx={{ maxWidth: 720, mx: "auto" }}>
      <CardContent>
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          Întrebarea {index + 1} / {total}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
          {question.question}
        </Typography>
        <RadioGroup
          value={selected ?? ""}
          onChange={(e) => onSelect(e.target.value)}
          name={`q-${question.id}`}
        >
          {question.options.map((opt) => (
            <FormControlLabel
              key={opt}
              value={opt}
              control={<Radio />}
              label={opt}
            />
          ))}
        </RadioGroup>
      </CardContent>

      <CardActions>
        <Stack direction="row" spacing={2} sx={{ ml: "auto", p: 1 }}>
          <Button variant="contained" onClick={onNext} disabled={!canGoNext}>
            Next
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
export default QuestionCard;
