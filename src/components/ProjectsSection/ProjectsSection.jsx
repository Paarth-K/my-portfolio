import Styles from "./ProjectsSection.module.scss";
import ProjectTile from "./ProjectTile";
export default function ProjectsSection() {
  const projects = [
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "I made project this with Nuxt3, for the Skills section of the Duke of Edinburgh Award",
      image: "/projects/dofeweb_dark.png",
    },
    {
      link: "https://colab.research.google.com/drive/1rApehuk87KAJgl2RmoEk3X2eJc9l3BoW?usp=sharing",
      desc: "I made project this with Python, for a Data Science Competition by Byju's",
      image: "/projects/siliconvc.png",
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
            <span>My projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
