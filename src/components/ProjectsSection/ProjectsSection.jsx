import styles from "./ProjectsSection.module.scss";
import ProjectTile from "./ProjectTile";
export default function ProjectsSection() {
  const projects = [
    {
      link: "https://www.nlcsopp.org/",
      desc: "This project uses Next.js. It aims to help high school students in my school (NLCS Dubai) to find internships and opportunities that they can participate in.",
      image: "projects/nlcsopp-org",
      imgalt: "NLCS Opportunities Website",
    },
    {
      link: "https://tachyons.eu/",
      desc: "I made this project with Astro (using React and Vue), for my friend's team based in Italy that is participating in the F1 in Schools Competition.",
      image: "/projects/tachyons_w_car",
      imgalt: "Tachyons F1 Website",
    },
    {
      link: "https://dofe.paarthkukreja.com/",
      desc: "I made this project with Nuxt3, for the Skills section of the Duke of Edinburgh Award.",
      image: "/projects/dofeweb_dark",
      imgalt: "DofE Website",
    },
    {
      link: "https://colab.research.google.com/drive/1rApehuk87KAJgl2RmoEk3X2eJc9l3BoW?usp=sharing",
      desc: "I made this Data Science Project with Python, for the Silicon Valley Competition by Byju's.",
      image: "/projects/SiliconVCNew",
      imgalt: "SVC Byju's Colab Notebook",
    },
  ];
  return (
    <div className={styles.main} id="projects">
      <div className={styles.project}>
        <div className={styles.projectGrid}>
          <div className={styles.projectContent}>
            {projects.map((project, index) => {
              return <ProjectTile project={project} key={index}></ProjectTile>;
            })}
          </div>
          <div className={styles.projectTitle}>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
