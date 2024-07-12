import styles from "./Experience.module.scss";
import ClickyMedia from "../../Base/ClickyMedia";

export default function Experience({
  experienceName,
  hoverVidObj,
  hoverImageAlt,
  hoverImageSrc,
  htmlId,
  textObjectList,
  top = 50,
  link = false,
}) {
  return (
    <div className={styles.main} id={htmlId}>
      <div className={styles.experience}>
        <div className={styles.experienceGrid}>
          <div className={styles.experienceContent}>
            <div className={styles.experienceContentGrid}>
              <div className={styles.experienceImgContainer}>
                <ClickyMedia
                  link={link}
                  alt={hoverImageAlt}
                  src={hoverImageSrc}
                  hoverVid={hoverVidObj}
                ></ClickyMedia>
              </div>
              <div className={styles.experienceDesc}>
                {textObjectList.map((experienceData, index) => {
                  return (
                    <div key={index}>
                      <p className={styles.experienceDescTitle}>
                        {experienceData.title}
                      </p>
                      <p className={styles.experienceDescText}>
                        {experienceData.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.experienceTitle} style={{ top: `${top}%` }}>
            <span>{experienceName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
