import { useEffect, useState } from "preact/hooks";
import styles from "./ClickyMedia.module.scss";
import Image from "./Image.jsx";
import Video from "./Video.jsx";
export default function ClickyMedia({
  src,
  alt,
  link = { to: false, ariaLabel: false, target: "_blank" },
  hoverVid = { src: false, transformations: false },
  ImgTransformations = "f_auto:image,q_auto,w_1500",
  ...other
}) {
  const [scrolling, setScrolling] = useState(true);
  const [scrollPos, setScrollPos] = useState(false);
  const [pastScrollPos, setPastScrollPos] = useState(null);
  useEffect(() => {
    const scrollInt = setInterval(async () => {
      if (scrollPos != pastScrollPos) {
        setScrolling(false);
      } else {
        setPastScrollPos(scrollPos);
      }
    }, 500);
    window.addEventListener("scroll", async (event) => {
      setScrolling(true);
      setScrollPos(window.scrollY);
    });
    // setTimeout(() => {
    //   setScrolling(false);
    // }, 1000);
  }, []);

  let hoverVidElement;
  if (hoverVid.src) {
    hoverVidElement = (
      <div className={`${styles.clickVid} ${styles.clickImg}`}>
        <Video
          playsInline
          loop
          autoPlay
          muted
          src={hoverVid.src}
          transformations={hoverVid.transformations}
        ></Video>
      </div>
    );
  } else {
    hoverVidElement = null;
  }
  if (link.to) {
    if (!link.ariaLabel) {
      return (
        <div>
          <h2>Aria Label Missing!</h2>
        </div>
      );
    } else {
      return (
        <a
          href={link.to}
          target={link.target ? link.target : "_blank"}
          className={`${styles.clickImgContainer} ${
            !scrolling ? styles.clickImgContainerhover : ""
          }`}
        >
          <Image
            className={styles.clickImg}
            src={src}
            alt={alt}
            transformations={ImgTransformations}
            {...other}
          ></Image>

          {hoverVidElement}

          <div className={styles.clickImgShadow}></div>
        </a>
      );
    }
  } else {
    return (
      <div
        className={`${styles.clickImgContainer} ${
          !scrolling ? styles.clickImgContainerhover : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          className={styles.clickImg}
          transformations={ImgTransformations}
          {...other}
        ></Image>
        {hoverVidElement}
        <div className={styles.clickImgShadow}></div>
      </div>
    );
  }
}
