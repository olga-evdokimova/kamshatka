
import Link from "next/link";
import { data } from "../consts";
type PageListProps = {
  className?: string;
  data: { [key: string]: any };
};

export default function PageList({ className }: PageListProps) {
  
    const pagesArray = Object.entries(data).map(([slug, { title }]) => ({
      slug,
      title,
    }));
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {pagesArray.map((page) => (
        <Link
          key={page.slug}
          href={`/${page.slug}`}
          className="text-white inline-flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-500 rounded-[var(--border-radius)] px-3 py-1 tablet:text-[12px]"
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
