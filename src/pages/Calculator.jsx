import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  // GSAP Animation

  useEffect(() => {
    gsap.from(".calc-card", {
      y: 50,

      opacity: 0,

      duration: 1,
    });
  }, []);

  // Handle Click

  function handleClick(value) {
    setInput(input + value);
  }

  // Clear

  function clear() {
    setInput("");
  }

  // Calculate

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="calc-container">
      <div className="calc-card">
        <h1>Calculator</h1>

        <input className="display" value={input} readOnly />

        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>

          <button onClick={() => handleClick("8")}>8</button>

          <button onClick={() => handleClick("9")}>9</button>

          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>

          <button onClick={() => handleClick("5")}>5</button>

          <button onClick={() => handleClick("6")}>6</button>

          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>

          <button onClick={() => handleClick("2")}>2</button>

          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>

          <button onClick={clear}>C</button>

          <button onClick={calculate}>=</button>

          <button onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
