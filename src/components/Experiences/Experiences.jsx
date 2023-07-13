import Styles from "./Experiences.module.scss";
import ClickyMedia from "../Base/ClickyMedia.jsx";
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
              <p className={Styles.exDescTitle}>What I'm currently up to</p>

              <div className={Styles.currentImg}>
                <ClickyMedia
                  src="/experience/thinkinghutswtext.png"
                  alt="Thinking huts logo"
                  link={{
                    to: "https://www.thinkinghuts.org/",
                    ariaLabel: "Thinking huts website",
                  }}
                  hoverVid={{
                    src: "/experience/TH_Hover_vid_e4ih61.mov",
                    transformations:
                      "br_1500k,c_crop,g_west,h_710,vc_h264,w_710,x_470,y_40",
                  }}
                />
              </div>

              <p className={Styles.currentDesc}>
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
