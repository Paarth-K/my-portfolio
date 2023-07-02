import Styles from "./LandingPageCursor.module.scss";
import Image from "../Base/Image";
import { useState } from "react";
export default function LandingPageCursor() {
  const [mousePos, setMousePos] = useState([]);
  const mouseModifX = 1;
  const mouseModifY = 1;
  addEventListener("mousemove", (event) => {
    setMousePos([event.clientX, event.clientY]);
  });
  return (
    <div>
      <Image
        src="/home/React-icon.png"
        style={{
          transform: `translateX(${
            mouseModifX * Math.sqrt(mousePos[0])
          }px) translateY(${mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.react}
      ></Image>

      <Image
        src="/home/Vue-icon.png"
        style={{
          transform: `translateX(${
            -mouseModifX * Math.sqrt(mousePos[0])
          }px) translateY(${-mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.vue}
      ></Image>
      <Image
        src="/home/Astro-icon.png"
        style={{
          transform: `translateX(${
            mouseModifX * -Math.sqrt(mousePos[0])
          }px) translateY(${mouseModifY * Math.sqrt(mousePos[1])}px)`,
        }}
        className={Styles.astro}
      ></Image>
    </div>
  );
}
