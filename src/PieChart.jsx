import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from './axios'
import './Chart.css'
import './PieChart.css'


const PieChart = () => {
  const [redCount, setRedCount] = useState();
  const [greenCount, setGreenCount] = useState();
  const [blueCount, setBlueCount] = useState();

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/piechart');

      setRedCount(req.data[0].voteCount)
      setGreenCount(req.data[1].voteCount)
      setBlueCount(req.data[2].voteCount)

    }
    fetchData()
  }, [clickCount]);


  const countHandler = (color) => {
    setClickCount(clickCount + 1)
    if (color === 'red') {
      async function updateRedCount() {
        await axios.put('/piechart/Red');
      }
      updateRedCount()
    } else if (color === 'green') {
      async function updateGreenCount() {
        await axios.put('/piechart/Green');
      }
      updateGreenCount()
    } else if (color ==='blue') {
      async function updateBlueCount() {
        await axios.put('/piechart/Blue');
      }
      updateBlueCount()
    }
  }
  const chartData = {
    datasets: [
      {
        label: "Favorite Colors",
        data: [redCount, greenCount, blueCount],
        backgroundColor: [
          `rgba(255, 100, 85, 0.5)`,
          `rgba(25, 255, 85, 0.5)`,
          `rgba(5, 100, 255, 0.5)`,
        ],
        borderWidth: 5,
      },
    ],

    labels: [`Red`, `Green`, `Blue`],
  };

  return (
    <div className='chart'>
      <h2 className='title'>Favorite RGB Color</h2>
      <Pie data={chartData} options={{maintainAspectRatio: false}}/>
      <div className="buttons">
        <button className='button red' onClick={() => countHandler('red')}>red</button>
        <button className='button green' onClick={() => countHandler('green')}>green</button>
        <button className='button blue' onClick={() => countHandler('blue')}>blue</button>
      </div>
      
    </div>
  );
};

export default PieChart;
