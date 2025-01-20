import styles from "./Dubai.module.scss";
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
        "c_crop,g_west,h_1800,w_1800,x_900,y_-35,q_auto,f_auto:video",
    });
  }, []);
  return (
    <div className={styles.main} id="dubai">
      <div className={styles.ex}>
        <div className={styles.exGrid}>
          <div className={styles.exTitle}>
            <span>{`${month} ${year}`} - August 2023</span>
          </div>
          <div className={styles.exContent}>
            <div className={styles.exContentItem}>
              <p className={styles.exDescTitle}>Dubai</p>

              <div className={styles.currentImg}>
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

              <p className={styles.currentDesc}>
                Moving to Dubai from Singapore has been one of the toughest yet
                best experiences in my life. Living in a city that is so
                diverse, so modern, and just as safe as Singapore has been an
                amazing experience. Dubai is a city that has a lot to offer,
                from the world's tallest building, the Burj Khalifa, to the
                world's largest mall, the Dubai Mall. The city is also home to
                some of the best restaurants, hotels, and shopping centres in
                the world. The people in Dubai are also very friendly and
                welcoming, which has made my transition to the city much easier.
                I'm very happy to be living in Dubai and I'm excited to see what
                the future holds for me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
