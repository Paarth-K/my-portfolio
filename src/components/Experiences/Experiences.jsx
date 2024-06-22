import styles from "./Experiences.module.scss";
import ClickyMedia from "../Base/ClickyMedia.jsx";
import { useEffect, useState } from "preact/hooks";
export default function Experiences() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/experience/TH_Hover_vid_e4ih61",
      transformations:
        "c_crop,g_west,h_710,w_710,x_470,y_40,q_auto,f_auto:video",
    });
  }, []);
  return (
    <div className={styles.main} id="experience">
      <div className={styles.ex}>
        <div className={styles.exGrid}>
          <div className={styles.exTitle}>
            <span>My Experience</span>
          </div>
          <div className={styles.exContent}>
            <div className={styles.exContentItem}>
              <p className={styles.exDescTitle}>What I'm currently up to</p>

              <div className={styles.currentImg}>
                <ClickyMedia
                  src="/experience/thinkinghutswtext"
                  alt="Thinking huts logo"
                  link={{
                    to: "https://www.thinkinghuts.org/",
                    ariaLabel: "Thinking huts website",
                  }}
                  hoverVid={videoObj}
                />
              </div>

              <p className={styles.currentDesc}>
                I'm an intern at Thinking Huts! Which is a non-profit
                organization in the US that 3D prints schools. My job is to help
                integrate a CRM (HubSpot) into our workflow and see how it can
                help us better market and communicate with our donors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
