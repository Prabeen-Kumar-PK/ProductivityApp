import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/home.css";

function Home() {
  const [time, setTime] = useState(new Date());

  const [weather, setWeather] = useState(null);

  const city = "Sambalpur";

  // TIME

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // WEATHER

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd3be11e274881597cc293477ace7b94&units=metric`,
    )
      .then((res) => res.json())

      .then((data) => {
        setWeather(data);
      });
  }, []);

  // GSAP Animation

  useEffect(() => {
    gsap.from(".hero-card", {
      y: 50,

      opacity: 0,

      duration: 1.5,
    });
  }, []);

  // Dynamic Background

  const getBackground = () => {
    if (!weather) return "default";

    const main = weather.weather[0].main;

    if (main === "Clear") return "clear";

    if (main === "Clouds") return "clouds";

    if (main === "Rain") return "rain";

    return "default";
  };

  return (
    <div className={`hero ${getBackground()}`}>
      <div className="hero-card">
        <h1>Utility Hub</h1>

        <h2>{time.toLocaleTimeString()}</h2>

        <p>{time.toDateString()}</p>

        {weather && (
          <>
            <h3>{weather.main.temp}°C</h3>

            <p>{weather.weather[0].main}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
