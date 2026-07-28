import { useState, useEffect, useRef } from "preact/hooks";
import NavLink from "./Link";
import SiteLogo from "./SiteLogo";
import styles from "./Bar.module.scss";

const SECTIONS = [
  { to: "#about", display: "About Me" },
  { to: "#projects", display: "Projects" },
  { to: "#experience", display: "Experience" },
  { to: "#countries", display: "Countries" },
  { to: "#education", display: "Education" },
];

export default function Bar() {
  const [currentSection, setCurrentSection] = useState("");
  const activeRef = useRef("");

  const handleLinkClick = (clickedTo) => {
    activeRef.current = clickedTo;
    setCurrentSection(clickedTo);
  };

  useEffect(() => {
    let frame = null;

    // Measuring five sections per scroll event forces layout on every frame;
    // one read per animation frame is enough to keep the marker in step.
    const checkCurrentSection = () => {
      frame = null;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let active = "";

      for (const { to } of SECTIONS) {
        const element = document.querySelector(to);
        if (!element) continue;
        const top = element.offsetTop;
        if (
          scrollPosition >= top &&
          scrollPosition <= top + element.offsetHeight
        ) {
          active = to;
        }
      }

      if (active !== activeRef.current) {
        activeRef.current = active;
        setCurrentSection(active);
      }
    };

    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(checkCurrentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    checkCurrentSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav aria-label="Primary" className={styles.container}>
      <a className={styles.skipLink} href="#about">
        Skip to content
      </a>

      <div id="paarth-logo" className={styles.paarthLogo}>
        <SiteLogo />
      </div>

      {/*
        Links are desktop-only. On phones the bar is just the wordmark and the
        page is a single scroll, so there is no menu to open.
      */}
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinksDiv}>
          {SECTIONS.map((data) => (
            <NavLink
              key={data.to}
              className={styles.navLinks}
              to={data.to}
              forcedHover={data.to === currentSection}
              aria-current={data.to === currentSection ? "true" : undefined}
              onLinkClicked={handleLinkClick}
            >
              {data.display}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
