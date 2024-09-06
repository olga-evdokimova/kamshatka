import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const pathname = usePathname();

  return (
    <Link href={pathname === "/" ? "" : "/"} className={` ${className}`}>
      <Image
        src="/logo.png"
        alt="Логотип"
        width={80}
        height={80}
        sizes="80"
        priority={true}
        className="w-[80px] h-auto "
      />
    </Link>
  );
}
