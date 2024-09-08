"use client";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import { consts, data } from "../consts";
import PageList from "./PageList";
import SubTitle from "./SubTitle";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function About() {
  return (
    <Container id="about">
      <Title>
        <span className="text-[var(--accent)]">Сергей Рудковский</span> —
        провезу вас по самым красивым местам Камчатки на своем джипе!
      </Title>
      <div
        className="mt-[30px] rounded-[var(--border-radius)] flex justify-between  shadow-3xl 
     mobile:flex-col"
      >
        <div className="py-[10px] flex flex-col w-[60%] mobile:w-full">
          <p className="">Федерация спортивного туризма россии</p>
          <SubTitle className="text-[var(--accent)] pb-[8px] mb-auto ">
            Инструктор-проводник
          </SubTitle>
          <Link
            target="_blank"
            href="https://knd.gov.ru/license?registryType=ATTIncructorProvodnik&id=6683a3ced2b513840f64a94c"
            className=""
          >
            Регистрационный номер{" "}
            <span className="text-[var(--accent)] text-[20px] pl-[10px] relative group">
              2439
              <ArrowRightOutlined className="[&>svg]:fill-[var(--accent)]  rotate-[-45deg] absolute right-[-30px] top-[4px] group-hover:rotate-[45deg] transition-all duration-500" />
            </span>
          </Link>
        </div>
        <Image
          className="py-[10px] pb-[10px] object-cover "
          src="/qr-code.png"
          width={130}
          height={130}
          alt="qr-code"
        />
      </div>
      <div className="grid grid-cols-11 grid-rows-[210px] laptop:block gap-[20px] laptop:gap-0 h-[500px]   mt-[50px] tablet:mt-[20px] tablet:h-[300px]">
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
