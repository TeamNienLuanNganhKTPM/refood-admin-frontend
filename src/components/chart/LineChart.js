/** @format */

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ revenue, labels, max }) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      x: {
        type: "linear",
        display: true,
        position: "bottom",
        title: {
          display: true,
          text: "Ngày",
          align: "end",
          font: {
            size: 16,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        max: max,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        backgroundColor: "#1DC071",
        borderColor: "#1DC071",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: revenue,
        xAxisId: "x",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
