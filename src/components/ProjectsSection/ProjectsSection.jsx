import Styles from "./ProjectsSection.module.scss";
import ProjectTile from "./ProjectTile";
export default function ProjectsSection() {
  const projects = [
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "test",
      image: "/projects/dofeweb_light.png",
    },
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "test",
      image: "/projects/dofeweb_light.png",
    },
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "test",
      image: "/projects/dofeweb_light.png",
    },
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "test",
      image: "/projects/dofeweb_light.png",
    },
  ];
  return (
    <div className={Styles.main} id="projects">
      <div className={Styles.project}>
        <div className={Styles.projectGrid}>
          <div className={Styles.projectContent}>
            {projects.map((project, index) => {
              return <ProjectTile project={project} key={index}></ProjectTile>;
            })}
          </div>
          <div className={Styles.projectTitle}>
            <span>Some Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
