import { useState, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/todo.css";

function Todo() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  // Add Todo

  function addTodo() {
    if (input === "") return;
    const newTodos = [
      ...todos,

      {
        text: input,
        completed: false,
      },
    ];

    setTodos(newTodos);
    setInput("");
  }

  // Toggle Complete

  function toggleTodo(index) {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  }

  // Delete

  function deleteTodo(index) {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  }

  // Save to localStorage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // GSAP Animation

  useEffect(() => {
    gsap.from(".todo-card", {
      y: 50,

      opacity: 0,

      duration: 1,
    });
  }, []);

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1>Todo List</h1>

        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task"
            required
            className="page_todo_input"
          />

          <button className="page_todo_button" onClick={addTodo}>Add</button>
        </div>
      </div>

      <div className="todo-card">
        <ul>
          {todos.map((todo, index) => (
            <li  key={index} className= "todo_list_item" >
              <span onClick={() => toggleTodo(index)}>{todo.text}</span>

              <button className="page_todo_button" onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
