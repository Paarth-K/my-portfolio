import Styles from "./LandingPageCursor.module.scss";
import Image from "../Base/Image";
import { useEffect, useState } from "preact/hooks";
export default function LandingPageCursor() {
  const [mousePos, setMousePos] = useState([]);
  const mouseModifX = 1;
  const mouseModifY = 1;
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      if (window.innerWidth > 630) {
        setMousePos([event.clientX, event.clientY]);
      }
    });
  }, []);

  return (
    <div>
      <Image
        draggable="false"
        src="/home/React-icon.png"
        alt="React Icon"
        style={{
          transform: `translateX(${
            mouseModifX * Math.sqrt(mousePos[0])
          }px) translateY(${mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.react}
      ></Image>

      <Image
        draggable="false"
        src="/home/Vue-icon.png"
        alt="Vue Icon"
        style={{
          transform: `translateX(${
            -mouseModifX * Math.sqrt(mousePos[0])
          }px) translateY(${-mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.vue}
      ></Image>
      <Image
        draggable="false"
        src="/home/Astro-icon.png"
        alt="Astro Icon"
        style={{
          transform: `translateX(${
            mouseModifX * -Math.sqrt(mousePos[1])
          }px) translateY(${mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.astro}
      ></Image>
      <a href="#dubai">
        <Image
          draggable="false"
          src="/home/UAE-flag.png"
          alt="United Arab Emirates Flag"
          style={{
            transform: `translateX(${
              mouseModifX * -Math.sqrt(mousePos[0])
            }px) translateY(${mouseModifY * Math.sqrt(mousePos[0])}px)`,
          }}
          className={Styles.uae}
        ></Image>
      </a>
      <a href="#singapore">
        <Image
          draggable="false"
          src="/home/SG-flag.png"
          alt="Singapore Flag"
          style={{
            transform: `translateX(${
              mouseModifX * -Math.sqrt(mousePos[1])
            }px) translateY(${mouseModifY * Math.sqrt(mousePos[1])}px)`,
          }}
          className={Styles.sg}
        ></Image>
      </a>
    </div>
  );
}
