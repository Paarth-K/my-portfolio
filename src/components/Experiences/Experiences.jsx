import Styles from "./Experiences.module.scss";
import ClickyImage from "../Base/ClickyImage.jsx";
export default function Experiences() {
  return (
    <div className={Styles.main} id="experience">
      <div className={Styles.ex}>
        <div className={Styles.exGrid}>
          <div className={Styles.exTitle}>
            <span>My Experience</span>
          </div>
          <div className={Styles.exContent}>
            <div className={Styles.exContentItem}>
              <p className={Styles.exDescTitle}>What I'm upto currently</p>

              <div className={Styles.currentImg}>
                <ClickyImage
                  src="/experience/thinkinghuts.png"
                  alt="Thinking huts logo"
                  link={{
                    to: "https://www.thinkinghuts.org/",
                    ariaLabel: "Thinking huts website",
                  }}
                />
              </div>

              <p className={Styles.currentDesc}>
                I am currently an Intern for Thinking Huts. I'm working on
                integrating a CRM (HubSpot) into the organisation's workflow and
                exploring the potential applications of it to ease marketing and
                communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
