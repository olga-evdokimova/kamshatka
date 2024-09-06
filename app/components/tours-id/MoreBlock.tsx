"use client";
import Container from "../Container";
import Title from "../Title";
import { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { data } from "../../consts";
import { usePathname } from "next/navigation";
export default function MoreAboutPage() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const pageData = data[slug];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Title>Подробнее о месте</Title>
      <div
        className={`relative  ${expanded ? "" : "h-[300px] overflow-hidden"}`}
      >
        <div className="text-block grid grid-cols-2 gap-x-[50px]  pt-[30px] relative tablet:grid-cols-1 ">
          <div className="[&>p]:mb-[20px]">
            <p>{pageData.content1}</p>
            <p>{pageData.content2}</p>
            <p>{pageData.content3}</p>
          </div>
          <div className="[&>p]:mb-[20px]">
            <p>{pageData.content4}</p>
            <p>{pageData.content5}</p>
          </div>
        </div>
        <div
          className={`absolute bottom-0 w-full ${
            expanded ? "" : "h-[50%]"
          } bg-gradient-to-t from-white to-transparent`}
        ></div>
      </div>

      <button
        onClick={handleExpandClick}
        className="w-full flex justify-between items-center p-[20px] bg-[#F3F7FF] text-[var(--accent)]
        [&>span>svg]:fill-[var(--accent)]"
      >
        Читать больше
        {expanded ? <MinusOutlined /> : <PlusOutlined />}
      </button>
    </Container>
  );
}
