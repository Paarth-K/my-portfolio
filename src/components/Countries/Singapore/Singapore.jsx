import styles from "./Singapore.module.scss";
import ClickyMedia from "../../Base/ClickyMedia";
import { useEffect, useState } from "preact/hooks";
export default function Singapore() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/countries/Singapore-Video",
      transformations:
        "c_crop,g_west,h_2000,w_2000,x_870,y_10,q_auto,f_auto:video",
    });
  }, []);
  return (
    <div className={styles.main} id="singapore">
      <div className={styles.ex}>
        <div className={styles.exGrid}>
          <div className={styles.exTitle}>
            <span>August 2023 - 2013</span>
          </div>
          <div className={styles.exContent}>
            <div className={styles.exContentItem}>
              <p className={styles.exDescTitle}>Singapore</p>

              <div className={styles.currentImg}>
                <ClickyMedia
                  src="/countries/Singapore-Image"
                  alt="Singapore Jewel Indoor Waterfall"
                  link={{
                    to: "",
                    ariaLabel: "Singapore",
                  }}
                  hoverVid={videoObj}
                />
              </div>

              <p className={styles.currentDesc}>
                Having lived over 10 years in Singapore, it has become a huge
                part of my life. I have so many fond memories, so many friends,
                and so much more I've left behind. Living on a tiny island 50km
                by 27km with all sorts of attractions, from UNESCO World
                Heritage sites like the Botanic Gardens to the World's largest
                Indoor Waterfalls in Airports, F1 Events on common roads,
                Gardens by the Bay, and Marina Bay Sands is an entirely
                different and unique experience of Singapore. The blend of an
                extremely modern city with centuries-old beautiful traditions
                like the Lunar New Year, and its cultural diversity celebrating
                Indian, Western, and Asian traditions alike was a different
                experience entirely. It was a great city and a beautiful
                country, it will always hold a special place in my heart, and I
                hope I get another chance to live there again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
