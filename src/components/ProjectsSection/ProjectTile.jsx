import styles from "./ProjectTile.module.scss";
import Image from "../Base/Image";
export default function ProjectTile({ project }) {
  return (
    <div className={styles.projectTile}>
      <a
        className={styles.projectLink}
        href={project.link}
        target={project.linkIsBlank ? "_self" : "_blank"}
        rel="noopener"
        aria-label={project.imgalt}
      >
        <div className={styles.projectPictureContainer}>
          <Image
            alt={project.imgalt}
            src={project.image}
            className={styles.projectPicture}
            transformations={"f_auto:image,q_auto,w_1000"}
            draggable={false}
          ></Image>
        </div>
        <div className={styles.descriptionTextContainer}>
          {project.isWIP ? (
            <p className={styles.descriptionWIP}>Work In Progress</p>
          ) : (
            ""
          )}
          <p className={styles.descriptionText}>{project.desc}</p>
        </div>
      </a>
    </div>
  );
}
