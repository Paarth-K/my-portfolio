import styles from "./LandingPageCursor.module.scss";
import Image from "../Base/Image";
import { useEffect, useRef } from "preact/hooks";

// Each mark drifts against the pointer on its own axis mix, so the cluster
// never moves as one plane. `negateX`/`negateY` flip a direction and `swapXY`
// feeds the vertical reading into the horizontal offset.
const MARKS = [
  {
    key: "react",
    href: "#projects",
    src: "/home/React-icon",
    alt: "React Icon",
    negateX: false,
    negateY: false,
    swapXY: false,
  },
  {
    key: "vue",
    href: "#projects",
    src: "/home/Vue-icon",
    alt: "Vue Icon",
    negateX: true,
    negateY: true,
    swapXY: false,
  },
  {
    key: "astro",
    href: "#projects",
    src: "/home/Astro-icon",
    alt: "Astro Icon",
    negateX: false,
    negateY: true,
    swapXY: true,
  },
  {
    key: "uae",
    href: "#dubai",
    src: "/home/UAE-flag",
    alt: "United Arab Emirates Flag",
    negateX: true,
    negateY: false,
    swapXY: false,
  },
  {
    key: "sg",
    href: "#singapore",
    src: "/home/SG-flag",
    alt: "Singapore Flag",
    negateX: false,
    negateY: false,
    swapXY: true,
  },
  {
    key: "india",
    href: null,
    src: "/home/INDIA-flag",
    alt: "India Flag",
    negateX: true,
    negateY: false,
    swapXY: false,
  },
  {
    key: "nlcs",
    href: "#nlcs",
    src: "/home/NLCS-Logo",
    alt: "North London Collegiate School Dubai Logo",
    negateX: false,
    negateY: false,
    swapXY: true,
  },
  {
    key: "nas",
    href: "#dcis",
    src: "/home/NAS-Logo",
    alt: "Nord Anglia Education Singapore School Logo",
    negateX: false,
    negateY: false,
    swapXY: true,
  },
];

const IMAGE_TRANSFORMATIONS = "f_auto:image,q_auto,w_250";
const EASE = 0.08; // lower is smoother and lazier
const PARALLAX_MIN_WIDTH = 630;

export default function LandingPageCursor() {
  const containerRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    // One node per mark, in source order.
    const nodes = Array.from(
      containerRef.current?.querySelectorAll("img") || [],
    );
    const random = (min, max) => Math.random() * (max - min) + min;
    const modifiers = MARKS.map(() => [random(1, 2.1), random(1, 2.1)]);

    const target = [0, 0];
    const current = [0, 0];
    let live = window.innerWidth > PARALLAX_MIN_WIDTH;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Transforms are written straight to the nodes. Holding the pointer in
    // component state re-rendered all eight images on every frame.
    function paint() {
      current[0] += (target[0] - current[0]) * EASE;
      current[1] += (target[1] - current[1]) * EASE;

      for (let i = 0; i < MARKS.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        const { negateX, negateY, swapXY } = MARKS[i];
        const [modX, modY] = modifiers[i];
        const sourceX = swapXY ? current[1] : current[0];
        const sourceY = swapXY ? current[0] : current[1];

        const x = (negateX ? -1 : 1) * modX * Math.sqrt(Math.max(sourceX, 0));
        const y = (negateY ? -1 : 1) * modY * Math.sqrt(Math.max(sourceY, 0));

        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(paint);
    }

    const handleMouseMove = (event) => {
      if (!live) return;
      target[0] = event.clientX;
      target[1] = event.clientY;
    };

    const handleResize = () => {
      live = window.innerWidth > PARALLAX_MIN_WIDTH;
      if (!live) {
        target[0] = 0;
        target[1] = 0;
      }
    };

    if (!reduceMotion) {
      rafId.current = requestAnimationFrame(paint);
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {MARKS.map((mark) => {
        const image = (
          <Image
            draggable={false}
            src={mark.src}
            alt={mark.alt}
            loading="eager"
            transformations={IMAGE_TRANSFORMATIONS}
            className={`${styles.movecursor} ${styles[mark.key]}`}
          />
        );

        return mark.href ? (
          <a key={mark.key} className={styles.markLink} href={mark.href}>
            {image}
          </a>
        ) : (
          <span key={mark.key}>{image}</span>
        );
      })}
    </div>
  );
}
