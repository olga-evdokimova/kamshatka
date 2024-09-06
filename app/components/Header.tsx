"use client";
import "../styles/style.scss";
import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";
import React, { useState } from "react";
import { ConfigProvider, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { consts, links } from "../consts";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--primary)] ">
      <Container
        PaddingTop={false}
        PaddingBottom={false}
        className="flex justify-between h-[100px] laptop:h-[90px] items-center"
      >
        <Logo />
        <Nav />
        <NavBurger />
        <div className="flex items-center gap-[10px] laptop:ml-auto  mr-[50px]">
          <Link
            href={`tel:${consts.hrefPhone}`}
            className="text-white h-[40px] flex items-center pl-[40px]  laptop:text-[14px] relative border rounded-[--border-radius] border-[var(--accent)] hover:bg-[#6E95E0]/30 transition-all duration-500"
          >
            <Image
              src="/phone.png"
              alt="phone"
              width={20}
              height={20}
              priority={true}
              className="absolute left-[10px]  "
            />
            <span className="tablet:hidden pr-[8px]"> {`${consts.phone}`}</span>
          </Link>
          <Link
            target="_blank"
            href={`https://wa.me/${consts.hrefPhone}`}
            className=" border rounded-[--border-radius] border-[var(--accent)] w-[40px] h-[40px] relative hover:bg-[#6E95E0]/30 transition-all duration-500"
          >
            <Image
              src="/whatsapp.png"
              alt="whatsapp"
              width={20}
              height={20}
              sizes="20"
              priority={true}
              className="absolute left-[50%]  top-[50%] translate-y-[-50%] translate-x-[-50%]"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
}
const Nav = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <nav className=" flex justify-center gap-[50px] desktop:gap-[30px] text-white mr-auto ml-[30px] laptop:hidden">
      {links.map(
        (link, index) =>
          (link.id !== "tours" || isHomePage) && (
            <ul key={index} className="">
              <li>
              <Link
                href={`#${link.id}`}
                className="hover:text-[var(--accent)] transition-all duration-500"
              >
                {link.title}
                </Link>
                </li>
            </ul>
          )
      )}
    </nav>
  );
};
const NavBurger = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "var(--primary)",
          lineWidth: 0,
          paddingLG: 0,
          motionDurationMid: "1.8s",
          motionDurationSlow: ".8s",
        },
        components: {
          Drawer: {},
        },
      }}
    >
      <div
        className="hidden laptop:block absolute top-[30px] right-[15px]"
        onClick={showDrawer}
      >
        <SvgIcon />
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        height={"100vh"}
        width={"320px"}
        placement="right"
      >
        <div className="hidden  laptop:flex flex-col items-end gap-[30px] text-[20px] max-w-[1470px] mx-auto px-[25px] tablet:px-[25px]  pt-[100px] relative ">
          <CloseOutlined
            className="text-[40px] text-white
            absolute top-[23px]  right-[15px] z-50"
            onClick={onClose}
          />
          {links.map(
            (link, index) =>
              (link.id !== "tours" || isHomePage) && (
                <div
                  key={index}
                  className="text-white hover:text-[var(--accent)] transition-all duration-500"
                >
                  <Link onClick={onClose} href={`#${link.id}`}>
                    {link.title}
                  </Link>
                </div>
              )
          )}
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

// Иконка бургера
const SvgIcon = () => {
  return (
    <svg
      width="37"
      height="26"
      viewBox="0 0 37 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="37" height="2" rx="1" fill="white" />
      <rect x="7" y="12" width="30" height="2" rx="1" fill="white" />
      <rect x="17" y="24" width="20" height="2" rx="1" fill="white" />
    </svg>
  );
};
