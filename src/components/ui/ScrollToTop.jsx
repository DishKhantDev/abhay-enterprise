"use client";
import { useState } from "react";

export default function ScrollToTopButton() {
  const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClicked(true);
    setTimeout(() => setClicked(false), 1200); // Reset after animation
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 2xl:right-20 text-[25px] cursor-pointer
        bg-orange-500 px-4 py-1 text-white rounded-full shadow-lg z-50
        transition-all duration-100 ease-in-out 
        ${clicked ? "blink-pulse" : ""}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
