import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from './axios'

import './Chart.css'
import './BarChart.css'

function BarChart() {

  const [lebronVotes, setLebronVotes] = useState();
  const [curryVotes, setCurryVotes] = useState();
  const [giannisVotes, setGiannisVotes] = useState();
  const [lukaVotes, setLukaVotes] = useState();
  const [hardenVotes, setHardenVotes] = useState();

  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/barchart')

      setLebronVotes(req.data[0].voteCount)
      setCurryVotes(req.data[2].voteCount)
      setGiannisVotes(req.data[1].voteCount)
      setLukaVotes(req.data[3].voteCount)
      setHardenVotes(req.data[4].voteCount)
    }
    fetchData()
  }, [clickCount])

  const mvpCountHandler = (player) => {
    setClickCount(clickCount + 1)
    if (player === 'lebron') {
      async function setLebronVoteCount(){
        await axios.put('/barchart/LeBronJames')
      }
      setLebronVoteCount()
    } else if (player === 'curry') {
      async function setCurryVoteCount(){
        await axios.put('/barchart/StephenCurry')
      }
      setCurryVoteCount()
    } else if (player === 'giannis'){
      async function setGiannisVoteCount(){
        await axios.put('/barchart/GiannisAntetokounmpo')
      }
      setGiannisVoteCount()
    } else if (player === 'luka') {
      async function setLukaVoteCount(){
        await axios.put('/barchart/LukaDoncic')
      }
      setLukaVoteCount()
    } else if (player === 'harden') {
      async function setHardenVoteCount(){
        await axios.put('/barchart/JamesHarden')
      }
      setHardenVoteCount()
    }
  }

  const chartData = {
    labels: ['LeBron James', 'Stephen Curry', 'Giannis Antetokounmpo', 'Luka Doncic', 'James Harden'],
    datasets: [
      {
        label: 'NBA MVP Votes',
        data: [lebronVotes, curryVotes, giannisVotes, lukaVotes, hardenVotes],
        backgroundColor: [
          `rgba(130, 0, 162, 0.6)`,
          `rgba(251, 255, 40, 0.45)`,
          `rgba(0, 137, 48, 0.45)`,
          `rgba(0, 116, 192, 0.35)`,
          `rgba(192, 0, 20, 0.35)`,
        ],
        
      }
    ],

  };

  return (
    <div className='chart'>
      <h2 className="title">NBA 2020-2021 MVP Votes</h2>
      <Bar data={chartData} options={ {
        maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }}/>
    <div className="buttons">
      <button className="button lebron" onClick={() => mvpCountHandler('lebron')}>LeBron James</button>
      <button className="button curry" onClick={() => mvpCountHandler('curry')}>Stephen Curry</button>
      <button className="button giannis" onClick={() => mvpCountHandler('giannis')}>Giannis Antetokounmpo</button>
      <button className="button luka" onClick={() => mvpCountHandler('luka')}>Luka Doncic</button>
      <button className="button harden" onClick={() => mvpCountHandler('harden')}>James Harden</button>
    </div>
    </div>
  )
}

export default BarChart
