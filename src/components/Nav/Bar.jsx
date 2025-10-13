import { useState, useEffect } from "preact/hooks";
import NavLink from "./Link";
import SiteLogo from "./SiteLogo";
import styles from "./Bar.module.scss";

export default function Bar() {
  const [navLinkData, setNavLinkData] = useState([
    {
      to: "#about",
      display: "About Me",
      forcedHover: false,
    },
    {
      to: "#projects",
      display: "Projects",
      forcedHover: false,
    },
    {
      to: "#experience",
      display: "Experience",
      forcedHover: false,
    },
    {
      to: "#countries",
      display: "Countries",
      forcedHover: false,
    },
    {
      to: "#education",
      display: "Education",
      forcedHover: false,
    },
  ]);

  const [showBar, setShowBar] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const handleLinkClick = (clickedTo) => {
    console.log("Clicked link with to:", clickedTo);
    setNavLinkData((prevData) =>
      prevData.map((link) => ({
        ...link,
        forcedHover: link.to === clickedTo,
      }))
    );
  };

  const checkCurrentSection = () => {
    const sections = [
      "#about",
      "#projects",
      "#experience",
      "#countries",
      "#education",
    ];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let activeSection = "";

    sections.forEach((sectionId) => {
      const element = document.querySelector(sectionId);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          activeSection = sectionId;
        }
      }
    });

    if (activeSection !== currentSection) {
      setCurrentSection(activeSection);
      setNavLinkData((prevData) =>
        prevData.map((link) => ({
          ...link,
          forcedHover: link.to === activeSection,
        }))
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkCurrentSection();
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial section on mount
    setTimeout(() => checkCurrentSection(), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div
      className={`${styles.container} ${showBar ? styles.extendedContainer : ""}`}
    >
      <div id="paarth-logo" className={styles.paarthLogo}>
        {!showBar && <SiteLogo />}
      </div>
      <div className={styles.navLinksContainer}>
        <div
          className={`${styles.navLinksDiv} ${showBar ? styles.hidden : styles.visible}`}
        >
          {navLinkData.map((data, index) => (
            <NavLink
              key={index}
              className={styles.navLinks}
              to={data.to}
              forcedHover={data.forcedHover}
              onLinkClicked={handleLinkClick}
            >
              {data.display}
            </NavLink>
          ))}
        </div>
        <div
          onClick={() => setShowBar(!showBar)}
          className={!showBar ? styles.floatright : ""}
        >
          {!showBar ? (
            <svg
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#0b181e"
                strokeLinecap="round"
                strokeWidth="1.7"
                d="M20 7H4m16 5H4m16 5H4"
              />
            </svg>
          ) : (
            <svg
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0b181e"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
