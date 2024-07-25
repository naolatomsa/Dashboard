import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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
import { Typography } from "@material-tailwind/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import expandMore from "./assets/smallIcons/expandMore.svg";

import ArrowDown from "./assets/smallIcons/ArrowDown.svg";

import ArrowUp from "./assets/smallIcons/ArrowUp.svg";

const initialData = {
  labels: [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2024",
    "Feb, 2024",
    "Mar, 2024",
  ],
  datasets: [
    {
      label: "Systolic",
      backgroundColor: "#E66FD2",
      borderColor: "#E66FD2",
      tension: 0.4,
      data: [120, 115, 160, 110, 150, 160],
    },
    {
      label: "Diastolic",
      data: [110, 65, 110, 90, 70, 75],
      backgroundColor: "#8C6FE6",
      borderColor: "#8C6FE6",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      //   text: "Blood Pressure (Last 6 months)",
    },
  },
  scales: {
    y: {
      min: 60,
      max: 180,
      grid: {
        display: true,
        drawTicks: true, // Ensure ticks are drawn
        drawBorder: false,
      },
    },

    x: {
      grid: {
        display: false,
      },
    },
  },
};

const BloodPressureChart = () => {
  const [data, setData] = useState(initialData);

  const toggleDataset = (index) => {
    const datasets = data.datasets.map((dataset, i) => {
      if (i === index) {
        dataset.hidden = !dataset.hidden;
      }
      return dataset;
    });
    setData({ ...data, datasets });
  };

  return (
    <div className="flex justify-between gap-1">
      <div className="flex-1">
        <div className="flex justify-between mr-10">
          <Typography className="font-bold text-blue-gray-900">
            Blood Pressure
          </Typography>
          <div className="flex gap-2 justify-center items-center">
            <Typography> last 6 months</Typography>
            <img src={expandMore} />
          </div>
        </div>
        <Line data={data} options={options} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="grid gap-1">
          <div className="cursor-pointer" onClick={() => toggleDataset(0)}>
            <span className="inline-block w-3 h-3 bg-[#E66FD2] rounded-full mr-1"></span>
            <span className="font-bold text-blue-gray-900">Systolic</span>
          </div>
          <Typography className="font-bold text-blue-gray-900 text-xl">
            160
          </Typography>

          <div className="flex gap-2 justify-center items-center">
            <img src={ArrowUp} />
            <Typography> Higher than Average</Typography>
          </div>
        </div>
        <div className="border-b-2 border-gray-300"></div>
        <div className="grid gap-1">
          <div className="cursor-pointer" onClick={() => toggleDataset(1)}>
            <span className="inline-block w-3 h-3 bg-[#8C6FE6] rounded-full mr-1"></span>
            <span className="font-bold text-blue-gray-900">Diastolic</span>
          </div>

          <Typography className="font-bold text-blue-gray-900 text-xl">
            78
          </Typography>
          <div className="flex gap-2 justify-center items-center">
            <img src={ArrowDown} />
            <Typography>Lower than Average</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
