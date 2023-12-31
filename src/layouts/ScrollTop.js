import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;
    const sticky = document.getElementById("scrollUp");
    if (sticky) {
      if (offset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  return (
    <a
      id="scrollUp"
      href="#top"
      style={{
        position: "fixed",
        zIndex: 2147483647,
        backgroundColor: "#7000FF",
        display: scrollTop ? "block" : "none",
      }}
    >
      <i className="fas fa-arrow-up" />
    </a>
  );
};

export default ScrollTop;
