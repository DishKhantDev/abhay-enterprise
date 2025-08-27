"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 right-10 2xl:right-20 text-[25px] cursor-pointer
            bg-orange-500 px-4 py-1 text-white rounded-full shadow-lg z-50
            transition-all duration-200 ease-in-out 
            ${clicked ? "blink-pulse" : ""}`}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
