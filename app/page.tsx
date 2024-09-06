import About from "./components/About";
import AllOrganized from "./components/AllOrganized";
import BookTour from "./components/BookTour";
import FirstScreen from "./components/FirstScreen";
import Impressions from "./components/Impressions";
import Reservation from "./components/Reservation";
import Reviews from "./components/Reviews";

export default async function Home() {
  
  return (
    <>
      <FirstScreen />
      {/* Все организованно! */}
      <AllOrganized />
      {/* Главные впечатления */}
      <Impressions />
      <About />
      {/* Что говорят наши гости */}
      <Reviews/>
      {/* Как забронировать место? */}
      <Reservation />
      {/* Забронируй тур */}
      <BookTour />
    </>
  );
}
