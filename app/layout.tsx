
import "../app/styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Manrope, Unbounded} from "next/font/google";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Индивидуальные джип-туры на Камчатке",
  description:
    "Экскурсии и Джип-туры на Камчатке - отличная возможность окунуться в уникальную природу Камчатки под руководством опытного гида Сергея Рудковского. Однодневные джип-туры — это идеальный выбор для тех, кто хочет за короткое время ощутить всю силу природы полуострова, подняться на вулканы или посетить горячие источники.",
};

const manrope = Manrope({
  weight: ["500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
});
const unbounded = Unbounded({
  weight: "500",
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  
  return (
    <html lang="ru" className={manrope.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
