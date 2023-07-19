// dependencies
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Pages from "./pages/Pages.jsx";
import Chords from "./pages/Chords.jsx";
import Intervals from "./pages/Intervals.jsx";
import Notes from "./pages/Notes.jsx";
import Progressions from "./pages/Progressions.jsx";

// css
import "./css/App.css";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route element={<Pages />} path="/" exact />
        <Route element={<Chords />} path="/Acordes" />
        <Route element={<Intervals />} path="/Intervalos" />
        <Route element={<Notes />} path="Notas" />
        <Route element={<Progressions />} path="Progressoes" />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
