"use client";
import Link from "next/link";
import React from "react";
import { consts, links } from "../consts";
import Container from "./Container";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
export default function Footer() {
  const currentDate = new Date();
   const pathname = usePathname();
   const isHomePage = pathname === "/";
  return (
    <footer className="bg-[var(--primary)] text-white">
      <Container
        PaddingTop={false}
        PaddingBottom={false}
        className="pt-[30px] pb-[50px] laptop:pb-[30px]"
      >
        <div className="grid  grid-cols-4 laptop:grid-rows-4 laptop:grid-cols-1">
          <div className="col-span-1 row-span-2 laptop:row-span-1 laptop:mx-auto ">
            <Logo className="[&>img]:w-[150px] [&>img]:h-auto pb-[10px] " />
            <div className="text-white/50 text-[14px] whitespace-nowrap laptop:hidden">
              <div className="pb-[10px]">2024г | Все права защищены</div>
              <Link
                href="/privacy-policy"
                className="hover:text-white/80 transition-all duration-500"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <nav className="col-span-2 row-span-2 flex flex-col  ml-[60px] laptop:ml-0">
            <h6 className="text-[25px] laptop:text-[20px] font-semibold laptop:mb-[20px] mt-auto laptop:mt-[40px] mb-[20px]">
              Меню
            </h6>
            <div className="grid grid-cols-2 laptop:grid-cols-1 ">
              {links.map(
                (link, index) =>
                  (link.id !== "tours" || isHomePage) && (
                    <Link
                      href={`#${link.id}`}
                      key={index}
                      className="text-white/70 py-[10px] hover:text-[var(--accent)] transition-all duration-500"
                    >
                      {link.title}
                    </Link>
                  )
              )}
            </div>
          </nav>
          <div className=" col-span-1 row-span-2 laptop:row-span-1 flex flex-col justify-between laptop:justify-end">
            <h6 className="text-[25px] laptop:text-[20px] font-semibold laptop:my-[20px] mt-auto mb-[20px]">
              Контакты
            </h6>
            <div className="">
              <Link
                href="tel:+79999999999"
                className="text-[#DED847] text-[25px] mb-[5px] whitespace-nowrap block"
              >{`${consts.phone}`}</Link>
              <Link
                href="mailto:mail@mail.com"
                className="text-white/50 block mb-[10px] hover:text-white/80 transition-all duration-500"
              >
                {`${consts.email}`}
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white/50 text-[14px] whitespace-nowrap hidden laptop:block">
          <div className="pb-[40px] pt-[20px]">
            {currentDate.getFullYear()}г | Все права защищены
          </div>
          <Link
            href="/privacy-policy"
            className="block text-center text-white/50  hover:text-white/80 transition-all duration-500"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </Container>
    </footer>
  );
}
