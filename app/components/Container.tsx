import React, { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  PaddingTop?: boolean;
  PaddingBottom?: boolean;
}

export default function Container({
  children,
  className,
  PaddingTop = true,
  PaddingBottom = true,
  ...props
}: ContainerProps): JSX.Element {
  const PaddingTopClass = PaddingTop ? "tablet:pt-[30px] laptop:pt-[50px] pt-[100px]" : "";
  const PaddingBottomClass = PaddingBottom ? "tablet:pb-[30px] laptop:pb-[50px] pb-[100px]" : "";
  return (
    <div
      {...props}
      className={`max-w-[1180px] mx-auto  px-[15px] overflow-hidden ${PaddingTopClass} ${className} ${PaddingBottomClass}`}
    >
      {children}
    </div>
  );
}
