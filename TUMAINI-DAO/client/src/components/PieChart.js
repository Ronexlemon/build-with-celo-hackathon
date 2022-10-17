import React from "react";
import Chart from "chart.js/auto";
import {Doughnut } from "react-chartjs-2";
const labels = ["Approvals", "Decline", "Undecided"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
    ],

      data: [15, 7, 5],
    },
  ],
};
const PieChart = () => {
  return (
    <div className="max-w-[350px] w-[100%]">
      <Doughnut data={data} className="max-w-[350px] w-[100%]" />
    </div>
  );
};
export default PieChart;