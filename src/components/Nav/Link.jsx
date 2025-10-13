import styles from "./Link.module.scss";

export default function Link({
  to = "",
  target = "_self",
  forcedHover = false,
  onLinkClicked,
  children,
  className = "",
  ariaLabel,
  ...props
}) {
  const handleClick = () => {
    // Google Analytics tracking
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "nav_link_click",
        nav_link_click: to,
      });
    }

    // Emit link clicked event if provided
    if (onLinkClicked) {
      onLinkClicked(to);
    }
  };

  return (
    <a
      href={to}
      target={target}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      <div
        className={`${styles.navLinkContainer} ${forcedHover ? styles.forcedHoverContainer : ""}`}
      >
        <div
          className={`${styles.navLink} ${forcedHover ? styles.forcedHover : ""}`}
        >
          {children}
        </div>
      </div>
    </a>
  );
}
