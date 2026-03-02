import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/memo.css";

function Memo() {
  const [input, setInput] = useState("");

  const [search, setSearch] = useState("");

  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || [],
  );

  // Add Memo

  function addMemo() {
    if (input === "") return;

    const newMemos = [
      ...memos,

      {
        text: input,

        date: new Date().toLocaleString(),
      },
    ];

    setMemos(newMemos);

    setInput("");
  }

  // Delete Memo

  function deleteMemo(index) {
    const filtered = memos.filter((_, i) => i !== index);

    setMemos(filtered);
  }

  // Save

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  // GSAP

  useEffect(() => {
    gsap.from(".memo-card", {
      y: 50,

      opacity: 0,

      duration: 1,
    });
  }, []);

  // Search Filter

  const filteredMemos = memos.filter((memo) =>
    memo.text.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="memo-container">
      <div className="memo-card">
        <h1>Memo Notes</h1>

        <input
          placeholder="Search memo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="input-section">
          <input
            placeholder="Write memo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addMemo}>Save</button>
        </div>

        <div className="memo-list">
          {filteredMemos.map((memo, index) => (
            <div key={index} className="memo">
              <p>{memo.text}</p>

              <small>{memo.date}</small>

              <button onClick={() => deleteMemo(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Memo;
