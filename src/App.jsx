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
import PageWrapper from "./components/PageWrapper";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/todo"
          element={
            <PageWrapper>
              <Todo />
            </PageWrapper>
          }
        />

        <Route
          path="/pomodoro"
          element={
            <PageWrapper>
              <Pomodoro />
            </PageWrapper>
          }
        />

        <Route
          path="/memo"
          element={
            <PageWrapper>
              <Memo />
            </PageWrapper>
          }
        />

        <Route
          path="/calculator"
          element={
            <PageWrapper>
              <Calculator />
            </PageWrapper>
          }
        />

        <Route
          path="/bmi"
          element={
            <PageWrapper>
              <BMI />
            </PageWrapper>
          }
        />

        <Route
          path="/analytics"
          element={
            <PageWrapper>
              <Analytics />
            </PageWrapper>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
