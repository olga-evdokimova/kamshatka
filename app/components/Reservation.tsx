import Container from "./Container";
import SubTitle from "./SubTitle";
import Title from "./Title";
const cards = [
  {
    title: "Оставляете заявку",
    description:
      "Заполните форму обратной связи на сайте, выбрав понравившийся тур или напишите мне в WhatsApp.",
  },
  {
    title: "Обсуждаем детали",
    description:
      "Я свяжусь с вами в удобное для вас время, чтобы обсудить все детали тура.",
  },
  {
    title: "Договор и предоплата",
    description:
      "Заключаем договор, включающий в себя страховку и вы вносите часть стоимости. Оставшуюся часть вносите уже по прибытии на Камчатку.",
  },
];
export default function Reservation() {
  return (
    <Container>
      <Title>Как забронировать место?</Title>
      <div className="grid grid-cols-3 tablet:grid-cols-1 gap-[20px] pt-[50px]">
        {cards.map((card, index) => (
          <div key={index} className="p-[30px] tablet:p-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[var(--accent)] relative">
              <SubTitle className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {index + 1}
              </SubTitle>
            </div>
            <SubTitle className="text-[var(--accent)] pt-[20px] pb-[10px]">{card.title}</SubTitle>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
