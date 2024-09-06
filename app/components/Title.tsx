import { ReactNode } from "react";
type TitleProps = {
  children: ReactNode;
  className?: string;
};
export default function Title({ children, className }: TitleProps) {
  return (
    <h2 className={`text-[30px] laptop:text-[20px] uppercase font-['unbounded'] ${className}`}>
      {children}
    </h2>
  );
}