"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  DoughnutController,
  ArcElement,
  Colors,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  DoughnutController,
  ArcElement,
  Colors
);

interface DoughnutChartProps {
  labels: string[];
  data: number[];
  title: string;
}

const DoughnutChart = ({ labels, data, title }: DoughnutChartProps) => {
  const doughnutData = {
    labels: labels,
    datasets: [
      {
        data: data,
        borderWidth: 2,
        backgroundColor: [
          "rgba(75, 55, 147, 1)",
          "rgba(75, 55, 147, 0.75)",
          "rgba(75, 55, 147, 0.5)",
          "rgba(75, 55, 147, 0.25)",
        ],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      colors: {
        enabled: true,
      },
      title: {
        display: true,
        text: title,
        color: "black",
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) => {
            const value = context.raw as number;

            return `Total Sales: ${
              value > 1 ? `${value} items` : `${value} item`
            } `;
          },
        },
      },
    },
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

export default DoughnutChart;
