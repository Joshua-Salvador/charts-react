import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      datasets: [
        {
          label: "Favorite Colors",
          data: [15, 25, 30],
          backgroundColor: [
            `rgba(255, 100, 85, 0.5)`,
            `rgba(25, 255, 85, 0.5)`,
            `rgba(5, 100, 255, 0.5)`,
          ],
        },
      ],

      labels: [`Red`, `Green`, `Blue`],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Pie data={chartData} options={{ borderColor: "000" }} />
    </div>
  );
}

export default PieChart;
