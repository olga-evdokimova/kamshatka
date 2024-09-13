"use client";
import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "../styles/style.scss";
import "swiper/css/navigation";
import Container from "./Container";
import Title from "./Title";
import { comments } from "../consts";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CommentFormModal from "./CommentFormModal";
export default function Reviews() {
  return (
    <div className="bg-[var(--accent)] relative" id="comments">
      <Container PaddingBottom={false} className="relative pb-[20px] ">
        <Title className="text-white">
          Что говорят наши гости
        </Title>
        {/* <div className="absolute bottom-[10px] right-[5px] mobile:right-0 w-[130px] h-[50px] hidden tablet:flex tablet:gap-[10px]">
          <div className="swiper-button-next relative bg-white/20 rounded-full !w-[50px] !h-[50px] mobile:w-[40px] mobile:h-[40px] after:hidden ">
            <ArrowRightOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
          </div>
          <div className="swiper-button-prev relative bg-white/20 rounded-full !w-[50px] !h-[50px] mobile:w-[40px] mobile:h-[40px]  after:hidden ">
            <ArrowLeftOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
          </div>
        </div> */}
      </Container>
      <div className="pt-[50px] tablet:pt-[10px] relative max-w-[1320px] mx-auto">
        <Container PaddingTop={false}>
          <Swiper
            className="swiperReviews"
            modules={[Scrollbar, Navigation]}
            spaceBetween={20}
            slidesPerView={"auto"}
            // slidesPerView={3}
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            scrollbar={{ draggable: true }}
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col pb-[20px]">
                  <span className="font-semibold">{comment.author}</span>
                  <time className="text-[#1a1a1a]/50 font-medium text-[12px]">
                    {comment.date}
                  </time>
                </div>
                <div className="scroll mb-[auto] overflow-y-auto h-[400px] pr-[10px] pb-[50px] ">
                  {comment.content}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <div className="desktop:hidden">
          <div className="swiper-button-next translate-y-[-50px] right-0 bg-white/20 rounded-full !w-[50px] !h-[50px] after:hidden ">
            <ArrowRightOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
          </div>
          <div className="swiper-button-prev translate-y-[-50px] bg-white/20 rounded-full !w-[50px] !h-[50px] after:hidden ">
            <ArrowLeftOutlined className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [&>svg]:fill-white w-[25px] [&>svg]:w-full" />
          </div>
        </div>
        <CommentFormModal />
      </div>
    </div>
  );
}
