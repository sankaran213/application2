import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const StackedBarChart = ({ data }) => {
  const labels = data.map((item) => item.label);
  const lowerValues = data.map((item) => item.lowerValue);
  const upperValues = data.map((item) => item.upperValue);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Lower Value",
        data: lowerValues,
        backgroundColor: "#008CFF", // Dark blue
        barThickness: 15, // Thinner bars for better spacing
      },
      {
        label: "Upper Value",
        data: upperValues,
        backgroundColor: "#8ED6FF", // Light blue
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800, // Smooth transition
      easing: "easeInOutQuad",
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: "#4B5563",
          font: { size: 12 },
        },
      },
      y: {
        stacked: true,
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] sm:w-[300px] h-[200px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default StackedBarChart;
