import Styles from "./MainContent.module.scss";
import Image from "../Base/Image";

export default function MainContent(props) {
  return (
    <div className={Styles.main}>
      <div className={Styles.about} id="about">
        <div className={Styles.aboutGrid}>
          <p className={Styles.aboutTitle}>A bit about me</p>
          <div className={Styles.aboutContent}>
            <div className={Styles.aboutContentGrid}>
              <div className={Styles.meDesc}>
                <p className={Styles.meDescTitle}>Who</p>
              </div>
              <div className={Styles.meImgContainer}>
                <Image src="/home/me_pic.png" className={Styles.meImg}></Image>
                <div className={Styles.meImgShadow}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
