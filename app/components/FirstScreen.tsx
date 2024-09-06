"use client";
import Container from "../components/Container";
import PageList from "./PageList";
// import Image from "next/image";
import { Image } from "antd";
import { consts, data } from "../consts";

export default function FirstScreen() {
  return (
    <div className="bg-[var(--primary)]">
      <Container>
        <h1 className="font-['unbounded'] text-[45px] tablet:text-[25px] uppercase text-white mb-[20px]">
          Индивидуальные Джип-туры
          <span className="text-[var(--accent)] block">на Камчатке</span>
        </h1>
        <PageList data={data} className="mb-[20px] tablet:gap-[8px]" />
        <div className="flex gap-[20px] h-[400px] laptop:h-[340px] w-full">
          <div className="relative w-[37%] rounded-[var(--border-radius)] overflow-hidden">
            <Image.PreviewGroup
              items={[
                "/vachkazhets/vachkazhets-03.jpg",
                "/vachkazhets/vachkazhets-01.jpg",
                "/vachkazhets/vachkazhets-02.png",
                "/ekstruziya-verblyud/ekstruziya-verblyud-01.jpg",
                "/khalatyrskiy-plyazh/khalatyrskiy-plyazh-01.png",
                "/khalatyrskiy-plyazh/khalatyrskiy-plyazh-02.png",
                "/khalatyrskiy-plyazh/khalatyrskiy-plyazh-03.png",
                "/mys-mayachny/mys-mayachny-01.png",
                "/mys-mayachny/mys-mayachny-02.png",
                "/mys-mayachny/mys-mayachny-03.png",
                "/vilyuchinskiy/vilyuchinskiy-01.jpg",
                "/vilyuchinskiy/vilyuchinskiy-03.jpg",
                "/vilyuchinskiy/vilyuchinskiy-02.webp",
              ]}
            >
              <Image
                width="100%"
                height="100%"
                src="/vachkazhets/vachkazhets-03.jpg"
                className="object-cover bg-[var(--accent)]"
                alt="Фото Камчатки"
              />
            </Image.PreviewGroup>
            {/* <Image
              src="/vachkazhets/vachkazhets-03.jpg"
              fill
              placeholder={`data:image/${consts.blur}`}
              sizes="380"
              alt="Фото Камчатки"
              loading="eager"
              className=" object-cover hover:scale-105 transition-all duration-500"
            /> */}
          </div>
          <div className="relative w-[63%] rounded-[var(--border-radius)] overflow-hidden">
            <Image.PreviewGroup
              items={[
                "/vulkan-gorely.jpg",
                "/vodopad-spokoiny+malaya-dolina-geyzerov/malaya-dolina-geyzerov-01.jpg",
                "/vodopad-spokoiny+malaya-dolina-geyzerov/malaya-dolina-geyzerov-02.jpg",
                "/vodopad-spokoiny+malaya-dolina-geyzerov/vodopad-spokoiny-03.jpg",
                "/vulkan-avachinskiy/vulkan-avachinskiy-01.jpg",
                "/vulkan-avachinskiy/vulkan-avachinskiy-02.jpg",
                "/vulkan-avachinskiy/vulkan-avachinskiy-03.jpg",
                "/vulkan-avachinskiy/vulkan-avachinskiy-04.jpg",
                "/vulkan-avachinskiy/vulkan-avachinskiy-05.jpg",
                "/vulkan-gorely/vulkan-gorely-01.jpg",
                "/vulkan-gorely/vulkan-gorely-03.jpg",
                "/vulkan-gorely/vulkan-gorely-02.png",
                "/vulkan-gorely/vulkan-gorely-04.png",
                "/vulkan-gorely/vulkan-gorely-06.png",
                "/vulkan-gorely/vulkan-gorely-07.png",
              ]}
            >
              <Image
                width="100%"
                height="100%"
                src="/vulkan-gorely.jpg"
                className="object-cover bg-[var(--accent)]"
                alt="Фото Камчатки"
              />
            </Image.PreviewGroup>
            {/* <Image
              src="/vulkan-gorely.jpg"
              fill
              placeholder={`data:image/${consts.blur}`}
              sizes="780"
              alt="Фото Камчатки"
              loading="eager"
              className=" object-cover hover:scale-105 transition-all duration-500"
            /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
