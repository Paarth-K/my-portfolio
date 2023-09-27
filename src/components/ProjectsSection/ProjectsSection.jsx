import Styles from "./ProjectsSection.module.scss";
import ProjectTile from "./ProjectTile";
export default function ProjectsSection() {
  const projects = [
    {
      link: "https://internshipfinder.vercel.app",
      desc: "This project is being made with a few of my friends and uses Next.js. It aims to help high school students find internships.",
      image: "projects/internshipfinder_hdwip_preview.png",
      imgalt: "Internship Finder Website",
      isWIP: true,
    },
    {
      link: "https://dofe.paarthkukreja.com",
      desc: "I made this project with Nuxt3, for the Skills section of the Duke of Edinburgh Award.",
      image: "/projects/dofeweb_dark.png",
      imgalt: "DofE Website",
    },
    {
      link: "https://colab.research.google.com/drive/1rApehuk87KAJgl2RmoEk3X2eJc9l3BoW?usp=sharing",
      desc: "I made this Data Science Project with Python, for the Silicon Valley Competition by Byju's.",
      image: "/projects/SiliconVCNew.png",
      imgalt: "SVC Byju's",
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
