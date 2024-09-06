import Image from "next/image";
import ContactForm from "./ContactForm";
import Container from "./Container";
import Title from "./Title";
import React from "react";
import { consts } from "../consts";
import SubTitle from "./SubTitle";
import Link from "next/link";
export default function BookTour() {
  return (
    <div className="relative" id="reservation">
      <Image
        src="/booktour.png"
        alt="book-tour"
        fill
        sizes="1000"
        placeholder={`data:image/${consts.blur}`}
        className="-z-10 object-cover"
      />
      <Container>
        <Title className="text-white">
          Забронируй тур — организуй себе путешествие!
        </Title>
        <p className="text-white pt-[20px] text-[16px]">
       Помогу вам с бронированием тура. Пожалуйста,
          заполните форму ниже, и я свяжусь с вами в кратчайшие сроки.
          <br />
          Также вы можете написать мне в&nbsp;
          <Link
            href={`https://wa.me/${consts.hrefPhone}`}
            target="_blank"
            className="inline-flex items-center relative pr-[30px] pl-[5px] text-white whitespace-nowrap border border-white rounded-[var(--border-radius)] h-[30px]"
          >
            WhatsApp
            <Image
              src="/whatsapp_button.png"
              alt="whatsapp"
              width={20}
              height={20}
              sizes="20"
              priority={true}
              className="absolute right-[5px] "
            />
          </Link>
        </p>
        <p className="text-white w-[40%] laptop:w-full pt-[10px] text-[14px]">
          *Обратите внимание, что во время путешествий я могу оказаться вне зоны
          действия сети, но не переживайте — я обязательно отвечу вам, как
          только появится возможность.
        </p>
        <div className="max-w-[480px] border border-white backdrop-blur-[21.90px] rounded-[var(--border-radius)] p-[20px] tablet:p-[10px] mt-[30px]">
          <SubTitle className="text-white text-center">
            Заполните форму заявки
          </SubTitle>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
