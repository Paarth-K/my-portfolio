import styles from "./School.module.scss";
import ClickyMedia from "../../Base/ClickyMedia";

export default function School({
  schoolName,
  hoverVidObj,
  hoverImageAlt,
  hoverImageSrc,
  htmlId,
  textObjectList,
  link = false,
}) {
  return (
    <div className={styles.main} id={htmlId}>
      <div className={styles.school}>
        <div className={styles.schoolGrid}>
          <div className={styles.schoolContent}>
            <div className={styles.schoolContentGrid}>
              <div className={styles.schoolImgContainer}>
                <ClickyMedia
                  link={link}
                  alt={hoverImageAlt}
                  src={hoverImageSrc}
                  hoverVid={hoverVidObj}
                ></ClickyMedia>
              </div>
              <div className={styles.schoolDesc}>
                {textObjectList.map((schoolData, index) => {
                  return (
                    <div key={index}>
                      <p className={styles.schoolDescTitle}>
                        {schoolData.title}
                      </p>
                      <p className={styles.schoolDescText}>{schoolData.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.schoolTitle}>
            <span>{schoolName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
