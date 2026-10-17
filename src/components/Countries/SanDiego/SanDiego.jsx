import styles from "./SanDiego.module.scss";
import ClickyMedia from "../../Base/ClickyMedia";
import { useEffect, useState } from "preact/hooks";
export default function SanDiego() {
  // Resolved during the first render on both server and client, so the
  // pre-hydration markup reads as a date rather than "[current] [date]".
  const [month] = useState(() =>
    new Date().toLocaleString("default", { month: "long" }),
  );
  const [year] = useState(() =>
    new Date().toLocaleString("default", { year: "numeric" }),
  );
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/countries/SD-Video",
    });
  }, []);
  return (
    <div className={styles.main} id="san-diego">
      <div className={styles.ex}>
        <div className={styles.exGrid}>
          <div className={styles.exTitle} data-rail>
            <span>{`${month} ${year}`} - September 2026</span>
          </div>
          <div className={styles.exContent}>
            <div className={styles.exContentItem}>
              <p className={styles.exDescTitle}>San Diego</p>

              <div className={styles.currentImg}>
                <ClickyMedia
                  src="/countries/SD-Image.png"
                  alt="San Diego coastline at sunset"
                  link={{
                    to: "",
                    ariaLabel: "San Diego",
                  }}
                  hoverVid={videoObj}
                />
              </div>

              <p className={styles.currentDesc}>
                Moving to San Diego in September 2026 to study Computer Science
                at the University of California, San Diego is the start of a
                brand new chapter for me. After growing up between Singapore and
                Dubai, living on the Californian coast is a completely different
                experience. Pacific sunsets, the laid-back beach towns along the
                coast, and a campus that sits a short walk from the cliffs of La
                Jolla is a dream come true. I'm looking forward to making the
                most of the city, the people, and everything the university has
                to offer the next few years I have here in store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
