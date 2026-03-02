import { Link } from "react-router-dom";
import "../styles/navbar.css";

import { useState, useEffect } from "react";

import { gsap } from "gsap";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".navbar", {
      y: -80,

      opacity: 0,

      duration: 1,
    });
  }, []);

  return (
    <nav className="navbar">
      <h2 className="logo">UtilityHub</h2>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/todo">Todo</Link>
        </li>

        <li>
          <Link to="/pomodoro">Pomodoro</Link>
        </li>

        <li>
          <Link to="/memo">Memo</Link>
        </li>

        <li>
          <Link to="/calculator">Calculator</Link>
        </li>

        <li>
          <Link to="/bmi">BMI</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
