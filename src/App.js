import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Methodology from "./Components/Methodology";
import Navbars from "./Components/Navbars";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Home />
      <About />
      <Projects />
      <Methodology />
      <Contact />
    </div>
  );
}

export default App;
