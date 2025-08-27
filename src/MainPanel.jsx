import Experience from "./MainPanel/Experience";
import Navbar from "./MainPanel/Navbar";
import "./styles/MainPanel/main-panel.css";
import Projects from "./MainPanel/Projects";
import About from "./MainPanel/About";

const MainPanel = () => {
  return (
    <div className="main-panel-container flex-column">
      {/* <Navbar currentPage={state.page} setPage={setState} /> */}
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default MainPanel;
