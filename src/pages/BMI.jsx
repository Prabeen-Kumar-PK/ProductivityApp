import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/bmi.css";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  // GSAP animation

  useEffect(() => {
    gsap.from(".bmi-card", {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  function calculateBMI() {
    if (!height || !weight) return;

    const heightInMeter = height / 100;

    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);

    setBmi(bmiValue);

    // Status

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  }

  return (
    <div className="bmi-container">
      <div className="bmi-card">
        <h1>BMI Calculator</h1>

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate</button>

        {bmi && (
          <div className="result">
            <h2>BMI: {bmi}</h2>

            <p>Status: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMI;
