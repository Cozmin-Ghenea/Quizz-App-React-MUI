import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type ResultsChartProps = {
  correct: number;
  incorrect: number;
};

const COLORS = ["#4caf50", "#f44336"];

function ResultsChart({ correct, incorrect }: ResultsChartProps) {
  const data = [
    { name: "Corecte", value: correct },
    { name: "Greșite", value: incorrect },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default ResultsChart;
