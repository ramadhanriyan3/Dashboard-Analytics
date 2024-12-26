"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  TooltipItem,
} from "chart.js";
import { getCurrency } from "@/lib/constant";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: number[];
  xTicks: string[];
  title?: string;
}

const LineChart = ({ data, xTicks, title }: LineChartProps) => {
  const chartData = {
    labels: xTicks,
    datasets: [
      {
        label: "Total Revenue",
        data: data,
        borderColor: "rgb(75, 55, 147)",
        backgroundColor: "rgba(75, 55, 147, 0.4)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const lineChartOption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        color: "black",
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"line">) {
            const value = context.raw as number;
            return `Total Revenue: ${getCurrency(value)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Revenue (USD)",
        },
        grace: "45%",
        ticks: {
          padding: 10,
        },
      },
      x: {
        ticks: {
          display: data.length <= 12 ? true : false,
        },
      },
    },
  };

  return <Line data={chartData} options={lineChartOption} />;
};

export default LineChart;
