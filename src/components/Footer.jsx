import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  // GSAP animation

  useEffect(() => {
    gsap.from(".footer", {
      y: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  function subscribe() {
    if (!email) return;

    let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    subscribers.push(email);

    localStorage.setItem(
      "subscribers",

      JSON.stringify(subscribers),
    );

    alert("Subscribed Successfully!");

    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>UtilityHub</h2>

        <p>Build discipline. Track progress.</p>

        <div className="newsletter">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={subscribe}>Subscribe</button>
        </div>

        <p className="copyright">© 2026 UtilityHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
