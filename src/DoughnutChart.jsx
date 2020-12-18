import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import axios from './axios'

import './Chart.css'
import './DoughnutChart.css'


function DoughnutChart() {

  const [krispyKreme, setKrispyKreme] = useState();
  const [dunkinDonuts, setDunkinDonuts] = useState();
  const [jco, setJco] = useState();
  const [misterDonut, setMisterDonut] = useState();

  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('/doughnutchart')

      setKrispyKreme(req.data[0].voteCount)
      setDunkinDonuts(req.data[1].voteCount)
      setJco(req.data[2].voteCount)
      setMisterDonut(req.data[3].voteCount)
    }
    fetchData()
  }, [clickCount]);

  const donutShareHandler = (donut) => {
    setClickCount(clickCount + 1)
    if (donut === 'krispy kreme') {
      async function setKrispyKremeShare(){
        await axios.put('/doughnutchart/KrispyKreme')
      }
      setKrispyKremeShare()
    } else if (donut === 'dunkin donuts') {
      async function setDunkinDonutsShare(){
        await axios.put('/doughnutchart/DunkinDonuts')
      }
      setDunkinDonutsShare()
    } else if (donut === 'jco') {
      async function setJCOShare(){
        await axios.put('/doughnutchart/JCO')
      }
      setJCOShare()
    } else if (donut === 'mister donut') {
      async function setMisterDonutShare(){
        await axios.put('/doughnutchart/MisterDonut')
      }
      setMisterDonutShare()
    }
  }

  const chartData = {
    labels: ['Krispy Kreme', 'Dunkin Donuts', 'JCO', 'Mister Donuts'],
    datasets: [
      {
        label: 'Doughnut Stores Market Share in Doughnut Chart',
        data: [krispyKreme, dunkinDonuts, jco, misterDonut],
        backgroundColor:[
          '#ff4d4d',
          '#9d61cf',
          '#fff94a',
          '#87fff9'
        ]
      }
    ],
  }
  return (
    <div className='chart'>
      <h2 className="title">Market Share of Donut Stors in a Doughnut Chart</h2>
      <Doughnut data={chartData}  options={{maintainAspectRatio: false}}/>
      <div className="buttons">
        <button className="button krispyKreme" onClick={() => donutShareHandler('krispy kreme')}>Krispy Kreme</button>
        <button className="button dunkinDonuts" onClick={() => donutShareHandler('dunkin donuts')} >Dunkin Donuts</button>
        <button className="button jco" onClick={() => donutShareHandler('jco')} >JCO</button>
        <button className="button misterDonut" onClick={() => donutShareHandler('mister donut')} >Mister Donut</button>
      </div>
    </div>
  )
}

export default DoughnutChart
