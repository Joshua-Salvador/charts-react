import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "./axios";
import "./Chart.css";
import "./LineChart.css";

function LineChart() {
  const [poodle, setPoodle] = useState();
  const [borderCollie, setBorderCollie] = useState();
  const [rottweiler, setRottweiler] = useState();
  const [chihuahua, setChihuahua] = useState();
  const [aspin, setAspin] = useState();

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/linechart");

      setPoodle(req.data[0].voteCount);
      setBorderCollie(req.data[1].voteCount);
      setRottweiler(req.data[2].voteCount);
      setChihuahua(req.data[3].voteCount);
      setAspin(req.data[4].voteCount);
    }
    fetchData();
  }, [clickCount]);

  const dogCountHandler = (breed) => {
    setClickCount(clickCount + 1);
    if (breed === "poodle") {
      async function setPoodleVote() {
        await axios.put("/linechart/Poodle");
      }
      setPoodleVote();
    } else if (breed === "border collie") {
      async function setBorderCollieVote() {
        await axios.put("./linechart/BorderCollie");
      }
      setBorderCollieVote();
    } else if (breed === "rottweiler") {
      async function setRottweilerVote() {
        await axios.put("/linechart/Rottweiler");
      }
      setRottweilerVote();
    } else if (breed === "chihuahua") {
      async function setChihuahuaVote() {
        await axios.put("/linechart/Chihuahua");
      }
      setChihuahuaVote();
    } else if (breed === "aspin") {
      async function setAspinVote() {
        await axios.put("/linechart/Aspin");
      }
      setAspinVote();
    }
  };

  const chartData = {
    labels: ["Poodle", "Border Collie", "Rottweiler", "Chihuahua", "Aspin"],
    datasets: [
      {
        label: "Popular Dog Breeds",
        data: [poodle, borderCollie, rottweiler, chihuahua, aspin],
        backgroundColor: "rgba(20, 60, 175, 0.1)",
        showLine: true,
      },
    ],
    maintainAspectRatio: false,
  };
  return (
    <div className="chart">
      <h2 className="title">Popular Dog Breeds</h2>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
      <div className="buttons">
        <button className="button" onClick={() => dogCountHandler("poodle")}>
          Poodle
        </button>
        <button
          className="button"
          onClick={() => dogCountHandler("border collie")}
        >
          Border Collie
        </button>
        <button
          className="button"
          onClick={() => dogCountHandler("rottweiler")}
        >
          Rottweiler
        </button>
        <button className="button" onClick={() => dogCountHandler("chihuahua")}>
          Chihuahua
        </button>
        <button className="button" onClick={() => dogCountHandler("aspin")}>
          Aspin
        </button>
      </div>
    </div>
  );
}

export default LineChart;
