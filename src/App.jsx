// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Pomodoro from "./pages/Pomodoro";
import Memo from "./pages/Memo";
import Calculator from "./pages/Calculator";
import BMI from "./pages/BMI";
import Analytics from "./pages/Analytics";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/bmi" element={<BMI />} />
        <Route path="/analytics" element={<Analytics/>} />

       
        
        
      </Routes>

    <Footer/>
    </>
  );
}

export default App;
