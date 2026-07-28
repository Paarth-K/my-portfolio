import { useEffect, useState } from "preact/hooks";
import styles from "./ClickyMedia.module.scss";
import Image from "./Image.jsx";
import Video from "./Video.jsx";

// The media sits flat while the page is moving and lifts off its shadow once
// the reader settles. Previously this ran a 550ms interval per instance that
// compared two pieces of state the effect's closure could never see, so it
// never cleaned up and re-rendered every card on every scroll frame.
const SETTLE_MS = 400;

export default function ClickyMedia({
  src,
  alt,
  link = { to: false, ariaLabel: false, target: "_blank" },
  hoverVid = { src: false, transformations: false },
  ImgTransformations = "f_auto:image,q_auto,w_1500",
  loading = "lazy",
  ...other
}) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let timer = window.setTimeout(() => setSettled(true), SETTLE_MS);

    const handleScroll = () => {
      setSettled(false);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setSettled(true), SETTLE_MS);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hoverVidElement = hoverVid.src ? (
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
  ) : null;

  const media = (
    <>
      <Image
        className={styles.clickImg}
        src={src}
        alt={alt}
        loading={loading}
        transformations={ImgTransformations}
        {...other}
      ></Image>
      {hoverVidElement}
      <div className={styles.clickImgShadow}></div>
    </>
  );

  const containerClass = `${styles.clickImgContainer} ${
    settled ? styles.clickImgContainerhover : ""
  }`;

  if (link.to) {
    return (
      <a
        href={link.to}
        target={link.target ? link.target : "_blank"}
        rel="noopener"
        aria-label={link.ariaLabel || alt}
        className={containerClass}
      >
        {media}
      </a>
    );
  }

  return <div className={containerClass}>{media}</div>;
}
