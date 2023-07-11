import Styles from "./Experiences.module.scss";
export default function Experiences() {
  const projects = [
    {
      link: "https://www.paarthkukrejadofe.eu.org",
      desc: "I made this project with Nuxt3, for the Skills section of the Duke of Edinburgh Award",
      image: "/projects/dofeweb_dark.png",
      imgalt: "DofE Website",
    },
    {
      link: "https://colab.research.google.com/drive/1rApehuk87KAJgl2RmoEk3X2eJc9l3BoW?usp=sharing",
      desc: "I made this Data Science Project with Python, for the Silicon Valley Competition by Byju's",
      image: "/projects/siliconvc.png",
      imgalt: "SVC Byju's",
    },
  ];
  return (
    <div className={Styles.main} id="projects">
      <div className={Styles.project}>
        <div className={Styles.projectTitle}>
          <span>My Experience</span>
        </div>
        <div className={Styles.projectGrid}>
          <div className={Styles.projectContent}></div>
        </div>
      </div>
    </div>
  );
}
