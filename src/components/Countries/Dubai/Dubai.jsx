import Styles from "./Dubai.module.scss";
import ClickyMedia from "../../Base/ClickyMedia";
import { useEffect, useState } from "preact/hooks";
export default function Dubai() {
  const [month, setMonth] = useState("[current]");
  const [year, setYear] = useState("[date]");
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    const date = new Date();
    setYear(date.toLocaleString("default", { year: "numeric" }));
    setMonth(date.toLocaleString("default", { month: "long" }));
    setVideoObj({
      src: "/countries/Dubai-Video",
      transformations:
        "c_crop,g_west,h_1800,w_1800,x_900,y_-35,q_auto:best,f_auto:video",
    });
  }, []);
  return (
    <div className={Styles.main} id="dubai">
      <div className={Styles.ex}>
        <div className={Styles.exGrid}>
          <div className={Styles.exTitle}>
            <span>{`${month} ${year}`} - August 2023</span>
          </div>
          <div className={Styles.exContent}>
            <div className={Styles.exContentItem}>
              <p className={Styles.exDescTitle}>Dubai</p>

              <div className={Styles.currentImg}>
                <ClickyMedia
                  src="/countries/Dubai-Image"
                  alt="Dubai Burj Khalifa"
                  link={{
                    to: "",
                    ariaLabel: "Dubai",
                  }}
                  hoverVid={videoObj}
                />
              </div>

              <p className={Styles.currentDesc}>
                I've just recently moved to Dubai from Singapore. And I
                absolutely love the place! I have joined a new school (NLCS
                Dubai) and made a few new friends. I've explored some malls and
                the Burj Khalifa, but there's still much more to see. I can't
                wait to start this new chapter in my life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
