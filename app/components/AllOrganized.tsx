import Container from "./Container";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Image from "next/image";
const cards = [
  {
    title: "Авторские маршруты",
    description: "Я сам разрабатываю маршруты для туров.",
    image: "/organized/organized-01.png",
  },
  {
    title: "Гид-инструктор",
    description:
      "Покажу вам весь колорит региона. Вы почувствуете душу этого края!",
    image: "/organized/organized-02.png",
  },
  {
    title: "Трансфер на маршруте",
    description:
      "В день вашего прилета я встречу вас в аэропорту и провожу обратно в день вылета.",
    image: "/organized/organized-03.png",
  },
  {
    title: "Питание включено",
    description:
      "Подберу вкусные блюда для вашего комфортного и приятного путешествия.",
    image: "/organized/organized-04.png",
  },
  {
    title: "Страховка",
    description: "Оформлю страховку на время путешествия",
    image: "/organized/organized-05.png",
  },
  {
    title: "А также...",
    description: "Аренда трекинговых палок в случае необходимости.",
    image: "/organized/organized-06.png",
  },
];
export default function AllOrganized() {
  return (
    <Container>
      <Title>Все организованно!</Title>
      <div className="grid grid-cols-3 gap-[20px] laptop:grid-cols-2 tablet:block pt-[50px] laptop:pt-[30px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative min-h-[200px] tablet:min-h-[180px]  p-[30px] laptop:p-[20px] shadow-3xl rounded-[var(--border-radius)] [&:last-child]:shadow-none"
          >
            <SubTitle className="text-[var(--accent)]">{card.title}</SubTitle>
            <p className="pr-[50px] pt-[10px]">{card.description}</p>
            <Image
              className="-z-10 object-contain bottom-0 max-w-full bg-white object-right rounded-[var(--border-radius)]"  
              src={card.image}
              fill
              sizes="280"
              alt={card.title}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
