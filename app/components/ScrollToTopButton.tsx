"use client";
import { useState, useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[15px] right-[15px] z-50 
        "
        >
          <ArrowLeftOutlined className="flex justify-center bg-white/30 w-[50px] h-[50px] rounded-full border  border-[var(--accent)]  [&>svg]:fill-[#6E95E0] [&>svg]:!w-[25px] [&>svg]:rotate-[90deg]" />
        </button>
      )}
    </>
  );
}
