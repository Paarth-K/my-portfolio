import Styles from "./ClickyMedia.module.scss";
import Image from "./Image.jsx";
import Video from "./Video.jsx";
export default function ClickyMedia({
  src,
  alt,
  link = { to: false, ariaLabel: false, target: "_blank" },
  hoverVid = { src: false, transformations: false },
  ...other
}) {
  let hoverVidElement;
  if (hoverVid.src) {
    hoverVidElement = (
      <div className={`${Styles.clickVid} ${Styles.clickImg}`}>
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
          className={Styles.clickImgContainer}
        >
          <Image
            className={Styles.clickImg}
            src={src}
            alt={alt}
            {...other}
          ></Image>

          {hoverVidElement}

          <div className={Styles.clickImgShadow}></div>
        </a>
      );
    }
  } else {
    return (
      <div className={Styles.clickImgContainer}>
        <Image
          src={src}
          alt={alt}
          className={Styles.clickImg}
          {...other}
        ></Image>
        {hoverVidElement}
        <div className={Styles.clickImgShadow}></div>
      </div>
    );
  }
}
