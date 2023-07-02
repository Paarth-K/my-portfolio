import Styles from "./ProjectsSection.module.scss";

export default function ProjectsSection() {
  return (
    <div className={Styles.main}>
      <div className={Styles.project} id="about">
        <div className={Styles.projectGrid}>
          <div className={Styles.projectContent}>
            <h1>Test</h1>
          </div>
          <div className={Styles.projectTitle}>
            <span>Some Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
