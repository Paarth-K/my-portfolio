import Styles from "./ClickyImage.module.scss";
import Image from "../Base/Image.jsx";
export default function ClickyImage({
  src,
  alt,
  link = { to: false, ariaLabel: false, target: "_blank" },
  ...other
}) {
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
            src={src}
            alt={alt}
            className={Styles.clickImg}
            {...other}
          ></Image>

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

        <div className={Styles.clickImgShadow}></div>
      </div>
    );
  }
}
