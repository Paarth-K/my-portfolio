import styles from "./LandingPageCursor.module.scss";
import Image from "../Base/Image";
import { useEffect, useState, useRef } from "preact/hooks";

export default function LandingPageCursor() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [smoothMousePos, setSmoothMousePos] = useState([0, 0]);
  const [mouseModifX, setMouseModifX] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [mouseModifY, setMouseModifY] = useState([1, 1, 1, 1, 1, 1, 1]);
  const rafId = useRef();
  const targetPos = useRef([0, 0]);
  const currentPos = useRef([0, 0]);

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

    // Smooth easing function - adjust this value to control smoothness
    const easeAmount = 0.08; // Lower = smoother/slower, Higher = more responsive

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function animate() {
      // Smoothly interpolate between current and target positions
      currentPos.current[0] = lerp(
        currentPos.current[0],
        targetPos.current[0],
        easeAmount
      );
      currentPos.current[1] = lerp(
        currentPos.current[1],
        targetPos.current[1],
        easeAmount
      );

      if (window.innerWidth > 630) {
        setSmoothMousePos([currentPos.current[0], currentPos.current[1]]);
      }

      // Continue animation
      rafId.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      // Update target position immediately
      targetPos.current = [event.clientX, event.clientY];
      setMousePos([event.clientX, event.clientY]);
    }

    // Start the animation loop
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Optimized transform calculator for hardware acceleration
  const getTransform = (
    mouseX,
    mouseY,
    modifX,
    modifY,
    index,
    negateX = false,
    negateY = false,
    swapXY = false
  ) => {
    const x = mouseX || 0;
    const y = mouseY || 0;

    let transformX, transformY;

    if (swapXY) {
      transformX = (negateX ? -1 : 1) * modifX * Math.sqrt(y);
      transformY = (negateY ? -1 : 1) * modifY * Math.sqrt(x);
    } else {
      transformX = (negateX ? -1 : 1) * modifX * Math.sqrt(x);
      transformY = (negateY ? -1 : 1) * modifY * Math.sqrt(y);
    }

    // Use translate3d for hardware acceleration
    return `translate3d(${transformX}px, ${transformY}px, 0)`;
  };

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
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[0],
              mouseModifY[0],
              0
            ),
          }}
          className={`${styles.movecursor} ${styles.react}`}
        ></Image>
      </a>
      <a href="#projects">
        <Image
          draggable={false}
          src="/home/Vue-icon"
          alt="Vue Icon"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[1],
              mouseModifY[1],
              1,
              true,
              true
            ),
          }}
          className={`${styles.movecursor} ${styles.vue}`}
        ></Image>
      </a>
      <a href="#projects">
        <Image
          draggable={false}
          src="/home/Astro-icon"
          alt="Astro Icon"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[2],
              mouseModifY[2],
              2,
              false,
              true,
              true
            ),
          }}
          className={`${styles.movecursor} ${styles.astro}`}
        ></Image>
      </a>
      <a href="#dubai">
        <Image
          draggable={false}
          src="/home/UAE-flag"
          alt="United Arab Emirates Flag"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[3],
              mouseModifY[3],
              3,
              true,
              false
            ),
          }}
          className={`${styles.movecursor} ${styles.uae}`}
        ></Image>
      </a>
      <a href="#singapore">
        <Image
          draggable={false}
          src="/home/SG-flag"
          alt="Singapore Flag"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[4],
              mouseModifY[4],
              4,
              false,
              false,
              true
            ),
          }}
          className={`${styles.movecursor} ${styles.sg}`}
        ></Image>
      </a>
      {/* <a href="#india"> */}
      <Image
        draggable={false}
        src="/home/INDIA-flag"
        alt="India Flag"
        transformations={imageTransformations}
        style={{
          transform: getTransform(
            smoothMousePos[0],
            smoothMousePos[1],
            mouseModifX[4],
            mouseModifY[4],
            4,
            true,
            false
          ),
        }}
        className={`${styles.movecursor} ${styles.india}`}
      ></Image>
      {/* </a> */}
      <a href="#nlcs">
        <Image
          draggable={false}
          src="/home/NLCS-Logo"
          alt="North London Collegiate School Dubai Logo"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[5],
              mouseModifY[5],
              5,
              false,
              false,
              true
            ),
          }}
          className={`${styles.movecursor} ${styles.nlcs}`}
        ></Image>
      </a>
      <a href="#dcis">
        <Image
          draggable={false}
          src="/home/NAS-Logo"
          alt="Nord Anglia Education Singapore School Logo"
          transformations={imageTransformations}
          style={{
            transform: getTransform(
              smoothMousePos[0],
              smoothMousePos[1],
              mouseModifX[6],
              mouseModifY[6],
              6,
              false,
              false,
              true
            ),
          }}
          className={`${styles.movecursor} ${styles.nas}`}
        ></Image>
      </a>
    </div>
  );
}
