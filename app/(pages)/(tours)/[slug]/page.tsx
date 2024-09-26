// app/(pages)/(tours)/[slug]/page.tsx
"use client";
import React, { useMemo } from "react";
import About from "../../../components/About";
import AllOrganized from "../../../components/AllOrganized";
import Reservation from "../../../components/Reservation";
import BookTour from "../../../components/BookTour";
import BackButton from "../../../components/BackButton";
import FirstBlock from "../../../components/tours-id/FirstBlock";
import MoreBlock from "../../../components/tours-id/MoreBlock";
import ProgramBlock from "../../../components/tours-id/ProgramBlock";
import { data } from "../../../consts"; 
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Reviews from "../../../components/Reviews";

export default function PageSlug() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const pageData = data[slug];

    if (!pageData) {
        notFound();
    }

    // Memoize the metadata object
    const metadata = useMemo(
      () => ({
        title: pageData.title,
        description: `${
          pageData.description
        } ${"Ищете незабываемые экскурсии на Камчатке, наши туры на Камчатку предоставят вам возможность увидеть эти природные чудеса. Не упустите шанс испытать адреналин в джип-туре по Камчатке."}`,
      }),
      [pageData]
    );

    React.useEffect(() => {
        if (metadata) {
            document.title = metadata.title;
            document
                .querySelector('meta[name="description"]')
                .setAttribute("content", metadata.description);
        }
    }, [metadata]);

    return (
      <>
        <BackButton />
        {/* Первый экран ============================= */}
        <FirstBlock />
        {/* Подробнее о месте ============================= */}
        <MoreBlock />
        {/* Программа тура ============================= */}
        <ProgramBlock />
        {/* Все организованно!============================= */}
        <AllOrganized />
        {/* Обо мне ============================ */}
        <About />
        {/* Что говорят наши гости */}
        <Reviews />
        {/* Как забронировать место? ===========================*/}
        <Reservation />
        {/* Забронируй тур ========================= */}
        <BookTour />
      </>
    );
}

