import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SubTitle({ children, className }: TitleProps) {
  return <h3 className={`text-[25px] laptop:text-[20px] font-bold ${className}`}>{children}</h3>;
}
