"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "./Container";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.target;

      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const targetId = target.hash.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.history.replaceState(null, "", target.hash);
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <Container PaddingTop={false} PaddingBottom={false}>
      <div
        onClick={handleClick}
        className="flex items-center cursor-pointer text-white/70 text-[14px] absolute"
      >
        <ArrowLeftOutlined className="pr-[10px]" />
        Назад
      </div>
    </Container>
  );
}

