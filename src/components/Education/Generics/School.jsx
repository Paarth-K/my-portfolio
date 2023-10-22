import Styles from "./School.module.scss";
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
    <div className={Styles.main} id={htmlId}>
      <div className={Styles.school}>
        <div className={Styles.schoolGrid}>
          <div className={Styles.schoolContent}>
            <div className={Styles.schoolContentGrid}>
              <div className={Styles.schoolImgContainer}>
                <ClickyMedia
                  link={link}
                  alt={hoverImageAlt}
                  src={hoverImageSrc}
                  hoverVid={hoverVidObj}
                ></ClickyMedia>
              </div>
              <div className={Styles.schoolDesc}>
                {textObjectList.map((schoolData, index) => {
                  return (
                    <div key={index}>
                      <p className={Styles.schoolDescTitle}>
                        {schoolData.title}
                      </p>
                      <p className={Styles.schoolDescText}>{schoolData.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={Styles.schoolTitle}>
            <span>{schoolName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
