import Container from "../Container";
import Title from "../Title";
import { Image } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { consts, data } from "../../consts";
import { usePathname } from "next/navigation";
export default function FirstBlock() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); 
  const pageData = data[slug];
  return (
    <div className="bg-[var(--accent)]">
      <Container>
        <div className="flex justify-between tablet:flex-col">
          <div className="w-[60%] tablet:w-full pr-[20px]">
            <Title className="text-white pb-[50px]">Программа тура</Title>
            <div>
              <ul className="text-white">
                <li className="flex items-center pb-[60px] ml-[30px] border-dashed border-l-[1px] ">
                  <div
                    className=" relative bg-[var(--button)] rounded-[50%] w-[50px] h-[50px] top-[-10px]
                      before:w-[20px] before:h-[20px] 
                  before:bg-white before:rounded-[50%] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%]  translate-x-[-25px]
                      "
                  ></div>
                  <p className=" tablet:ml-0 w-[350px] mobile:w-[220px]">
                    {pageData.program1}
                  </p>
                </li>

                <li className="flex items-center pb-[80px] tablet:pb-[50px] ml-[30px] border-dashed border-l-[1px]">
                  <div
                    className=" bg-[var(--accent)] rounded-[50%] w-[20px] h-[20px] border-[1px] border-white translate-x-[-25px] ml-[15px] 
                      "
                  ></div>
                  <p className="ml-[15px] tablet:ml-0 w-[350px] mobile:w-[220px]">
                    {pageData.program2}
                  </p>
                </li>
                {pageData.program3 && (
                  <li className="flex items-center pb-[80px] tablet:pb-[50px] ml-[30px] border-dashed border-l-[1px]">
                    <div
                      className=" bg-[var(--accent)] rounded-[50%] w-[20px] h-[20px] border-[1px] border-white translate-x-[-25px] ml-[15px] 
                      "
                    ></div>
                    <p className="ml-[15px] tablet:ml-0 w-[350px] mobile:w-[220px]">
                      {pageData.program3}
                    </p>
                  </li>
                )}

                {pageData.program4 && (
                  <li className="flex items-center pb-[80px] tablet:pb-[50px] ml-[30px] border-dashed border-l-[1px]">
                    <div
                      className=" bg-[var(--accent)] rounded-[50%] w-[20px] h-[20px]  border-[1px] border-white translate-x-[-25px] ml-[15px] 
                      "
                    ></div>
                    <p className="ml-[15px] tablet:ml-0 w-[350px] mobile:w-[220px]">
                      {pageData.program4}
                    </p>
                  </li>
                )}

                {pageData.program5 && (
                  <li className="flex items-center pb-[80px] tablet:pb-[50px] ml-[30px] border-dashed border-l-[1px]">
                    <div
                      className=" bg-[var(--accent)] rounded-[50%] w-[20px] h-[20px]  border-[1px] border-white translate-x-[-25px] ml-[15px] 
                      "
                    ></div>
                    <p className="ml-[15px] tablet:ml-0 w-[350px] mobile:w-[220px]">
                      {pageData.program5}
                    </p>
                  </li>
                )}

                <li className="flex items-center pb-[50px] ml-[30px] ">
                  <div
                    className=" relative bg-white rounded-[50%] w-[50px] h-[50px]  before:w-[20px] before:h-[20px] 
                  before:bg-[var(--accent)] before:rounded-[50%] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%]  translate-x-[-25px]
                      "
                  ></div>
                  <p className=" tablet:ml-0 w-[350px] mobile:w-[220px]">
                    {pageData.program6}
                  </p>
                </li>

                <li className="flex items-center pb-[80px] tablet:pb-[50px] pl-[30px]">
                  <div
                    className=" bg-[var(--accent)] rounded-[50%] w-[20px] h-[20px]   border-[1px] border-white translate-x-[-25px] ml-[15px] mr-[18px]
                      "
                  ></div>
                  <p className=" tablet:ml-0 w-[350px] mobile:w-[220px]">
                    {pageData.program7}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[40%] tablet:w-full h-auto">
            <div className="relative h-[43%] tablet:h-[400px] mb-[20px]  rounded-[var(--border-radius)] overflow-hidden">
              {/* <Image
                src={pageData.image_3}
                alt={pageData.title}
                fill
                placeholder={`data:image/${consts.blur}`}
                sizes="480"
                className="object-cover object-top hover:scale-105 transition-all duration-500"
              /> */}
              <Image
                width="100%"
                height="100%"
                src={pageData.image_3}
                className="object-cover bg-[var(--accent)]"
                alt={pageData.title}
              />
            </div>
            <div className="relative h-[53%] tablet:h-[400px]  rounded-[var(--border-radius)] overflow-hidden">
              {/* <Image
                src={pageData.image_4}
                alt={pageData.title}
                fill
                placeholder={`data:image/${consts.blur}`}
                sizes="480"
                className="object-cover object-top  hover:scale-105 transition-all duration-500"
              /> */}
              <Image
                width="100%"
                height="100%"
                src={pageData.image_4}
                className="object-cover bg-[var(--accent)]"
                alt={pageData.title}
              />
            </div>
          </div>
        </div>
        {/* Информация по туру ======================================== */}
        <div className="flex laptop:flex-col gap-[20px] justify-between text-white mt-[20px]">
          <div className="w-[70%] laptop:w-full [&>div]:flex mobile:[&>div]:flex-col [&>div]:justify-between mobile:[&>div]:justify-center [&>div]:items-center mobile:[&>div]:items-start rounded-[var(--border-radius)] bg-white/10 p-[30px] laptop:p-[15px] [&>div]:h-[70px] [&>div]:border-b-[1px] [&>div]:border-white/20 [&>div:last-child]:border-0">
            <div>
              <p>Период проведения: </p>
              <span>{pageData.info_date}</span>
            </div>

            <div>
              <p>Продолжительность: </p>
              <span>{pageData.info_days}</span>
            </div>

            <div>
              <p>Кол-во туристов в группе:</p>
              <span>{pageData.info_person}</span>
            </div>

            <div>
              <p>Стоимость экскурсии: </p>
              <span>
                {data[slug].info_price}
                <span>&nbsp;&nbsp;с 1-го чел.</span>
              </span>
            </div>
          </div>
          <div className="bg-[#ED7171] rounded-[var(--border-radius)] p-[30px] laptop:p-[15px] w-[30%] laptop:w-full">
            <ExclamationCircleFilled className="text-[40px]" />
            <h6 className="font-bold text-[25px] pb-[20px] pt-[40px]">
              Важно знать! 
            </h6>
            <p>
              Если погодные условия имеют неблагоприятный характер для
              проведения тура, то возможны изменение запланированного маршрута,
              в том числе, дня и время выезда.
            </p>
          </div>
        </div>
        {/* С собой необходимо иметь ============================ */}
        <div className="bg-white rounded-[var(--border-radius)] p-[30px] laptop:p-[15px] mt-[20px]">
          <h6 className="font-bold text-[25px] laptop:text-[20px] pb-[30px] laptop:pb-[10px]">
            С собой необходимо иметь
          </h6>
          <ul className="flex gap-[10px] tablet:flex-col tablet:text-[12px] laptop:gap-0 flex-wrap text-[var(--accent)] [&>li]:px-[10px] [&>li]:py-[5px] [&>li]:shadow-3xl [&>li]:rounded-[var(--border-radius)]">
            <li>влагонепроницаемая куртка</li>
            <li>штаны для трекинга</li>
            <li>треккинговая обувь (желательно влагонепроницаемые)</li>
            <li>солнцезащитные очки</li>
            <li>перчатки х/б</li>
            <li>головной убор</li>
            <li>небольшой рюкзак для личных вещей</li>
            <li>защитный крем от загара</li>
            <li>репеллент (средства защиты от кровососущих насекомых)</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}