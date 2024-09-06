import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import { consts, data } from "../consts";
import PageList from "./PageList";

export default function About() {

  return (
    <Container id="about">
      <Title>
        <span className="text-[var(--accent)]">Сергей Рудковский</span> —
        провезу вас по самым красивым местам Камчатки на своем джипе!
      </Title>
      <div className="grid grid-cols-11 grid-rows-[210px] laptop:block gap-[20px] laptop:gap-0 h-[500px]   mt-[50px] tablet:h-[300px]">
        <div className="relative row-span-5 col-span-3 laptop:hidden h-[500px] ">
          <video
            src="/vachkazhets/vachkazhets-02.mp4"
            poster="/vachkazhets/vachkazhets-02.webp"
            controls
            loop
            muted
            preload="none"
            className="rounded-[var(--border-radius)] object-cover overflow-hidden w-full h-full "
          ></video>
        </div>

        <div className="relative row-span-5 col-span-4 h-full rounded-[var(--border-radius)] overflow-hidden ">
          <Image
            className="  object-cover object-center hover:scale-105 transition-all duration-500"
            src="/about-01.png"
            fill
            sizes="380"
            alt=""
            placeholder={`data:image/${consts.blur}`}
          />
        </div>
        <div className="relative overflow-hidden row-span-1 col-span-4 bg-[var(--accent)] rounded-[var(--border-radius)] laptop:hidden p-[20px] h-[210px] ">
          <Image
            className=" laptop:rounded-b-none object-cover object-center hover:scale-105 transition-all duration-500"
            src="/vulkan-gorely/vulkan-gorely-05.jpg"
            fill
            sizes="380"
            alt=""
            placeholder={`data:image/${consts.blur}`}
          />
        </div>

        <div className="relative row-span-4 col-span-4 laptop:hidden rounded-[var(--border-radius)] overflow-hidden">
          <video
            src="/vachkazhets/vachkazhets-04.mp4"
            poster="/vachkazhets/vachkazhets-04.webp"
            loop
            controls
            muted
            preload="none"
            className="rounded-[var(--border-radius)] object-cover overflow-hidden w-full h-full "
          ></video>
        </div>
      </div>
      <div className="">
        <PageList
          data={data}
          className="tablet:gap-[8px] mb-[30px] [&>li>a]:bg-[var(--accent)] hover:[&>li>a]:bg-[#6E95E0]/20 hover:[&>li>a]:text-[var(--accent)] mt-[20px] transition-all duration-500"
        />
      </div>
    </Container>
  );
}
