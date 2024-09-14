
import "../app/styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Manrope, Unbounded} from "next/font/google";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";


export const metadata = {
  title: "Индивидуальные джип-туры на Камчатке",
  description:
    "Индивидуальные джип-туры на Камчатке - отличная возможность окунуться в уникальную природу Камчатки под руководством опытного гида Сергея Рудковского. Проведите незабываемое время, исследуя самые красивые места Камчатки на джипе! Гарантированно яркие впечатления и увлекательные приключения.",
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
      </body>
    </html>
  );
}
