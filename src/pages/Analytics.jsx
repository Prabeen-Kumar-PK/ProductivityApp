import { useState, useEffect } from "react";

import { gsap } from "gsap";

import "../styles/analytics.css";

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    const memos = JSON.parse(localStorage.getItem("memos")) || [];

    const pomodoro = parseInt(localStorage.getItem("pomodoro")) || 0;

    const completed = todos.filter((todo) => todo.completed).length;

    const total = todos.length;

    const completionRate = total ? Math.round((completed / total) * 100) : 0;

    const score = completionRate + pomodoro * 5 + memos.length * 2;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData({
      total,

      completed,

      completionRate,

      memos: memos.length,

      pomodoro,

      score,
    });

    // GSAP animation

    gsap.from(".analytics-card", {
      y: 50,

      opacity: 0,

      duration: 1,
    });
  }, []);

  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <h1>Analytics Dashboard</h1>

        <p>Total Todos: {data.total}</p>

        <p>Completed: {data.completed}</p>

        <p>Completion Rate: {data.completionRate}%</p>

        <p>Memos: {data.memos}</p>

        <p>Pomodoro Sessions: {data.pomodoro}</p>

        <h2>Productivity Score: {data.score}</h2>

        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${data.completionRate}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
