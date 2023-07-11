import Styles from "./ProjectTile.module.scss";
import Image from "../Base/Image";
export default function ProjectTile({ project }) {
  return (
    <div className={Styles.projectTile}>
      <a
        className={Styles.projectLink}
        href={project.link}
        target="_blank"
        rel="noopener"
        aria-label={project.desc}
      >
        <div className={Styles.projectPictureContainer}>
          <Image
            alt={project.imgalt}
            src={project.image}
            className={Styles.projectPicture}
            draggable="false"
          ></Image>
        </div>
        <div className={Styles.descriptionTextContainer}>
          <p className={Styles.descriptionText}>{project.desc}</p>
        </div>
      </a>
    </div>
  );
}
