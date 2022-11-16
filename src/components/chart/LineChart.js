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
import { useEffect } from "react";
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

const LineChart = ({ labels, max, titleX }) => {
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
          text: titleX,
          align: "end",
          font: {
            size: 16,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        max: max,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  const data = {
    labels: labels?.map((item) => item.KEY),
    datasets: [
      {
        label: "Doanh thu",
        backgroundColor: "#1DC071",
        borderColor: "#1DC071",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: labels?.map((item) => item.AMOUNT),
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
