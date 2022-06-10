import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Portfolio from "./Screens/Portfolio";
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-portfolio/" exact element={<Home />} />
        <Route path="react-portfolio/about" element={<About />} />
        <Route path="react-portfolio/portfolio" element={<Portfolio />} />
        <Route
          path="react-portfolio/portfolio/:project"
          element={<ProjectContainer />}
        />
      </Routes>
    </div>
  );
}

export default App;
