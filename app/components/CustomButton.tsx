import { Button } from "antd";
type CustomButtonProps = {
  children: React.ReactNode;
  variant: string;
  className?: string;
  [x: string]: any;
};
export default function CustomButton ({ children, variant, className, ...props }: CustomButtonProps) {
 
  let buttonClass = "";
  if (variant === "primary") {
    buttonClass =
      "h-[40px] px-[20px] text-[14px] !bg-[var(--button)] text-white !border-2 !border-[var(--button)] !rounded-[var(--border-radius)] hover:!bg-transparent hover:!text-[var(--button)] !hover:border-[var(--button)]";
  } else if (variant === "secondary") {
    buttonClass =
      "h-[42px] px-[20px] !text-[16px] !bg-[transparent] text-[var(--accent)] !border-2 !border-[var(--accent)] !rounded-[var(--border-radius)] hover:!bg-[var(--accent)] hover:!text-white !hover:border-[var(--button)]";
  } 

  return (
    <Button className={`${buttonClass} ${className || ""}`} {...props}>
      {children}
    </Button>
  );
};


