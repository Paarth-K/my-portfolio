import Styles from "./LandingPageCursor.module.scss";
import Image from "../Base/Image";
import { useEffect, useState } from "preact/hooks";
export default function LandingPageCursor() {
  const [mousePos, setMousePos] = useState([]);
  const [mouseModifX, setMouseModifX] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [mouseModifY, setMouseModifY] = useState([1, 1, 1, 1, 1, 1, 1]);
  useEffect(() => {
    function randomNumFromInterval(min, max) {
      // min and max included
      return (Math.random() * (max - min) + min).toFixed(4);
    }
    const tempModX = [];
    const tempModY = [];
    const min = 1;
    const max = 2.1;
    const iter = 7;
    while (tempModX.length != iter && tempModY.length != iter) {
      tempModX.push(randomNumFromInterval(min, max));
      tempModY.push(randomNumFromInterval(min, max));
    }
    if (tempModX.length == iter && tempModY.length == iter) {
      setMouseModifX(tempModX);
      setMouseModifY(tempModY);
    }
    window.addEventListener("mousemove", (event) => {
      updateMouse(event);
    });
    async function updateMouse(event) {
      if (window.innerWidth > 630) {
        setMousePos([event.clientX, event.clientY]);
      }
    }
  }, []);
  const imageTransformations = "f_auto:image,q_auto,w_250";
  return (
    <div>
      <a href="#projects">
        <Image
          draggable={false}
          src="/home/React-icon"
          alt="React Icon"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[0] * Math.sqrt(mousePos[0])
            }px) translateY(${mouseModifY[0] * Math.sqrt(mousePos[1])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.react}`}
        ></Image>
      </a>
      <a href="#projects">
        <Image
          draggable={false}
          src="/home/Vue-icon"
          alt="Vue Icon"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              -mouseModifX[1] * Math.sqrt(mousePos[0])
            }px) translateY(${-mouseModifY[1] * Math.sqrt(mousePos[1])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.vue}`}
        ></Image>
      </a>
      <a href="#projects">
        <Image
          draggable={false}
          src="/home/Astro-icon"
          alt="Astro Icon"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[2] * -Math.sqrt(mousePos[1])
            }px) translateY(${mouseModifY[2] * -Math.sqrt(mousePos[0])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.astro}`}
        ></Image>
      </a>
      <a href="#dubai">
        <Image
          draggable={false}
          src="/home/UAE-flag"
          alt="United Arab Emirates Flag"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[3] * -Math.sqrt(mousePos[0])
            }px) translateY(${mouseModifY[3] * Math.sqrt(mousePos[0])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.uae}`}
        ></Image>
      </a>
      <a href="#singapore">
        <Image
          draggable={false}
          src="/home/SG-flag"
          alt="Singapore Flag"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[4] * -Math.sqrt(mousePos[1])
            }px) translateY(${mouseModifY[4] * Math.sqrt(mousePos[1])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.sg}`}
        ></Image>
      </a>
      {/* <a href="#india"> */}
      <Image
        draggable={false}
        src="/home/INDIA-flag"
        alt="India Flag"
        transformations={imageTransformations}
        style={{
          transform: `translateX(${
            mouseModifX[4] * -Math.sqrt(mousePos[0])
          }px) translateY(${mouseModifY[4] * Math.sqrt(mousePos[1])}px)`,
        }}
        className={`${Styles.movecursor} ${Styles.india}`}
      ></Image>
      {/* </a> */}
      <a href="#nlcs">
        <Image
          draggable={false}
          src="/home/NLCS-Logo"
          alt="North London Collegiate School Dubai Logo"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[5] * Math.sqrt(mousePos[1])
            }px) translateY(${mouseModifY[5] * Math.sqrt(mousePos[0])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.nlcs}`}
        ></Image>
      </a>
      <a href="#dcis">
        <Image
          draggable={false}
          src="/home/NAS-Logo"
          alt="Nord Anglia Education Singapore School Logo"
          transformations={imageTransformations}
          style={{
            transform: `translateX(${
              mouseModifX[6] * -Math.sqrt(mousePos[1])
            }px) translateY(${mouseModifY[6] * Math.sqrt(mousePos[1])}px)`,
          }}
          className={`${Styles.movecursor} ${Styles.nas}`}
        ></Image>
      </a>
    </div>
  );
}
