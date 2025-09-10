import { PwC, WiseTechGlobal } from "../constants";
import "./../styles/MainPanel/work-experience.css";

const Experience = () => {
  return (
    <div className="flex-column work-experience-container border-padding">
      <div className="nav-panel-header h1">Work Experience</div>
      <Exp experience={WiseTechGlobal} />
      <Exp experience={PwC} />
    </div>
  );
};

const Exp = ({ experience }) => {
  return (
    <div className="exp-container">
      <Header name={experience.name} position={experience.position} />
      <div className="points-container">
        {experience.points.map((p, idx) => (
          <Point key={idx} text={p} />
        ))}
      </div>
    </div>
  );
};

const Header = ({ name, position }) => {
  return (
    <div className="header-container" onClick={toggleExperience}>
      <div className="h2">
        <span>{name}</span>
      </div>
      <div className="h3">
        <span>{position}</span>
      </div>
    </div>
  );
};

const Point = ({ text }) => {
  return <div className="point">{text}</div>;
};

const toggleExperience = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("show");
};

export default Experience;
