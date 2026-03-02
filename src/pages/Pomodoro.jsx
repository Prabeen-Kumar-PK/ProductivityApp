import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import "../styles/pomodoro.css";

function Pomodoro() {
  const [seconds, setSeconds] = useState(1500);

  const [isRunning, setIsRunning] = useState(false);

  const circleRef = useRef(null);

  const radius = 90;

  const circumference = 2 * Math.PI * radius;

  // TIMER

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(timer);

            return 0;
          }

          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  // GSAP ENTRY

  useEffect(() => {
    gsap.from(".pomodoro-card", {
      y: 50,

      opacity: 0,

      duration: 1,
    });
  }, []);

  // CIRCLE ANIMATION

  useEffect(() => {
    const progress = seconds / 1500;

    const offset = circumference - progress * circumference;

    circleRef.current.style.strokeDashoffset = offset;
  }, [seconds]);

  function formatTime() {
    const min = Math.floor(seconds / 60);

    const sec = seconds % 60;

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  return (
    <div className="pomodoro-container">
      <div className="pomodoro-card">
        <h1>Pomodoro Timer</h1>

        <svg width="220" height="220">
          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="gray"
            strokeWidth="10"
            fill="none"
          />

          <circle
            ref={circleRef}
            cx="110"
            cy="110"
            r={radius}
            stroke="cyan"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>

        <h2>{formatTime()}</h2>

        <div className="buttons">
          <button onClick={() => setIsRunning(true)}>Start</button>

          <button onClick={() => setIsRunning(false)}>Pause</button>

          <button
            onClick={() => {
              setSeconds(1500);

              setIsRunning(false);

              // Track session

              let sessions = localStorage.getItem("pomodoro");

              sessions = sessions ? parseInt(sessions) : 0;

              localStorage.setItem("pomodoro", sessions + 1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
