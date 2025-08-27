import { Project } from "../constants";
import "./../styles/MainPanel/projects.css";

const Projects = () => {
  return (
    <div className="pro-container flex-column border-padding">
      <div className="nav-panel-header h1" style={{ alignSelf: "flex-start" }}>
        Projects
      </div>
      {Project.map(({ imgSrc, content, title }, idx) => {
        return (
          <ProjectItem
            key={idx}
            imgSrc={imgSrc}
            content={content}
            title={title}
          />
        );
      })}
    </div>
  );
};

const ProjectItem = ({ imgSrc, content, title }) => {
  return (
    <div className="pro-item-container">
      <div className="pro-img-container">
        <img className="pro-img" src={imgSrc} />
      </div>
      <ProjectDesc title={title} content={content} />
    </div>
  );
};

const ProjectDesc = ({ title, content }) => {
  return (
    <div className="pro-desc-container">
      <div className="h2">{title}</div>
      <div className="text-content">{content}</div>
    </div>
  );
};

export default Projects;
