"use client";
import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../styles/style.scss";
import Container from "./Container";
import Image from "next/image";
import SubTitle from "./SubTitle";
import Link from "next/link";
import Title from "./Title";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { consts, data } from "../consts";
import CustomButton from "./CustomButton";

export default function Impressions() {
  return (
    <div className="bg-[var(--accent)] relative" id="tours">
      <div className="pb-[100px]">
        <Container PaddingBottom={false} className="relative pb-[50px] ">
          <Title className="text-white">
            Главные впечатления
          </Title>
          <div className="absolute  bottom-0 right-[5px] w-[130px] tablet:w-[100px] h-[50px] tablet:h-[40px] flex gap-[10px]">
            <div className="swiper-prev relative bg-white/20 rounded-full !w-[50px] !h-[50px] tablet:!w-[40px] tablet:!h-[40px]  after:hidden ">
              <ArrowLeftOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
            </div>
            <div className="swiper-next relative bg-white/20 rounded-full !w-[50px] !h-[50px] tablet:!w-[40px] tablet:!h-[40px] after:hidden ">
              <ArrowRightOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
            </div>
          </div>
        </Container>
        <Swiper
          className="swiperImpressions"
          modules={[Scrollbar, Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          // slidesPerView={1}
          // loop={true}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          scrollbar={{ draggable: true }}
          // breakpoints={{
          //   1180: {
          //     slidesPerView: 1,
          //   },
          // }}
        >
          {Object.entries(data).map(([slug, pageData]) => (
            <SwiperSlide key={slug}>
              <div className="relative h-[218px] p-[10px]">
                <div className="z-[10px] absolute flex flex-wrap gap-[5px] [&>span]:bg-[var(--accent)] [&>span]:rounded-[5px] [&>span]:border-2 [&>span]:text-white [&>span]:px-[5px] [&>span]:py-[2px] [&>span]:whitespace-nowrap text-[14px] tablet:text-[12px]">
                  <span>{pageData.info_date}</span>
                  <span>{pageData.info_days}</span>
                  <span>{pageData.info_person}</span>
                </div>

                <Image
                  src={pageData.image_1}
                  fill
                  sizes="370"
                  alt={pageData.title}
                  className="object-cover rounded-t-[var(--border-radius)] bg-white -z-10"
                />
              </div>
              <div className="bg-white flex flex-col justify-between rounded-[var(--border-radius)]  p-[20px]  h-[290px] tablet:h-[270px] mt-[-10px] ">
                <Link
                  href={`/${slug}`}
                  className="text-[14px] h-[60px] tablet:h-[50px]  relative text-[var(--primary)] flex  gap-[5px] pr-[25px] [&>span]:hover:rotate-[45deg] transition-all duration-500"
                >
                  <SubTitle className="!text-[20px] tablet:!text-[16px] leading-tight pb-[10px]">
                    {pageData.title}
                  </SubTitle>

                  <ArrowRightOutlined className="[&>svg]:fill-[var(--primary)] [&>svg]:!w-[25px] rotate-[-45deg] absolute right-0 top-[6px] transition-all duration-500" />
                </Link>
                <p className="slide-blur text-[14px] tablet:text-[12px]">
                  {pageData.description}
                </p>
                <div className="flex gap-[10px] items-center">
                  <div className="text-[var(--accent)] font-semibold text-[25px]">
                    {pageData.info_price}
                  </div>
                  <div className="text-[14px] text-[#424242]/50 ">
                    / за 1 человека
                  </div>
                </div>
                <div className="flex gap-[20px] justify-between items-center">
                  <Link
                    href={`https://wa.me/${consts.hrefPhone}`}
                    target="_blank"
                    className="w-full"
                  >
                    <CustomButton
                      variant="primary"
                      className="w-full inline-block h-[50px] text-[16px] [&>svg>path]:hover:fill-[var(--button)] transition-all duration-500"
                    >
                      Забронировать
                      <svg
                        className="inline-block ml-[10px]"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-500"
                          d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z"
                          fill="white"
                        />
                      </svg>
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
