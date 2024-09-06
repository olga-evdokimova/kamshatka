import Link from "next/link";
import Container from "./components/Container";


export default function NotFound() {
  return (
    <div className="bg-[var(--primary)] h-screen">
      <Container className="h-full text-[var(--accent)] text-center ">
        <h2 className="text-9xl tablet:text-[100px] font-['unbounded'] " title="404">
          404
        </h2>
        <p title="Страница не найдена" className="text-[20px] pb-[30px]">
          Страница не найдена
        </p>
        <Link
          href="/"
          className=" border border-[var(--accent)] rounded-[var(--border-radius)] px-[20px] py-[10px] hover:bg-[#6E95E0]/30 transition-all duration-500"
        >
          Вернуться на главную
        </Link>
      </Container>
    </div>
  );
}
