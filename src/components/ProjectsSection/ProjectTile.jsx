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
      >
        <div className={Styles.projectPictureContainer}>
          <Image
            alt={project.imgalt}
            src={project.image}
            className={Styles.projectPicture}
          ></Image>
        </div>
        <div className={Styles.descriptionTextContainer}>
          <p className={Styles.descriptionText}>{project.desc}</p>
        </div>
      </a>
    </div>
  );
}
