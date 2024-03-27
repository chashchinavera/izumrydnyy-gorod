import Image from "next/image";
import Button from "../Button/Button";
import { SupportCardsProps } from "./types";

const SupportCards: React.FC<SupportCardsProps> = ({ cardsInfoList }) => {
  return (
    <div className="flex flex-col gap-[30px] mb-[80px] xl:mb-[140px] xl:grid xl:grid-cols-2">
      {cardsInfoList.map((card, index) => {
        return (
          <>
            <article
              key={card.id}
              className="bg-blue-light w-full rounded-[20px] px-[15px] py-[20px] block md:hidden"
            >
              <div className="flex flex-col gap-[20px]">
                <h2 className="text-[18px] leading-[150%] font-bold text-turquoise-light">
                  {card.title}
                </h2>
                <p className="text-[14px] leading-[150%] font-normal">
                  {card.description}
                </p>
                {card.boldText && (
                  <p className="text-[14px] leading-[150%] font-bold">
                    {card.boldText}
                  </p>
                )}
                <Image src={card.image} alt={card.alt} className="w-full" />
                <div className="flex flex-col gap-[10px]">
                  <div className="w-full bg-white rounded-full h-2.5 ">
                    <div
                      className="bg-turquoise-light h-2.5 rounded-full"
                      style={{
                        width: `${
                          ((card.donationGoal - card.collected) /
                            card.donationGoal) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="text-[14px] leading-[150%] font-normal">
                      {`До цели: ${card.donationGoal}`}
                    </p>
                    <p className="text-[18px] leading-[150%] font-bold text-turquoise-light">
                      {`${card.collected} ₽`}
                    </p>
                  </div>
                </div>
                <Button
                  className="justify-center text-[14px] leading-[150%] font-bold text-red bg-white"
                  variant="regular-1"
                  withArrow={true}
                  arrowColor="primary"
                  sizeArrow="primary"
                >
                  Поддержать
                </Button>
              </div>
            </article>

            <article
              key={card.id + 1}
              className="bg-blue-light w-full rounded-[20px] px-[40px] py-[40px] hidden md:block xl:hidden"
            >
              <div className="flex flex-col gap-[30px] mb-[30px]">
                <h2 className="text-[30px] leading-[150%] font-bold text-turquoise-light">
                  {card.title}
                </h2>
                <p className="text-[16px] leading-[150%] font-normal">
                  {card.description}
                </p>
                {card.boldText && (
                  <p className="text-[20px] leading-[150%] font-bold">
                    {card.boldText}
                  </p>
                )}
              </div>

              <Image
                className="w-full h-[312px] mb-[30px]"
                src={card.image}
                alt={card.alt}
              />

              <div className="w-full bg-white rounded-full h-2.5 mb-[10px]">
                <div
                  className="bg-turquoise-light h-2.5 rounded-full"
                  style={{
                    width: `${
                      ((card.donationGoal - card.collected) /
                        card.donationGoal) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-[16px] leading-[150%] font-normal mb-[5px]">
                {`До цели: ${card.donationGoal}`}
              </p>
              <div className="flex justify-between">
                <p className="text-[30px] leading-[150%] font-bold text-turquoise-light">
                  {`${card.collected} ₽`}
                </p>
                <Button
                  className="justify-center text-[14px] leading-[150%] font-bold text-red bg-white"
                  variant="regular-1"
                  withArrow={true}
                  arrowColor="primary"
                  sizeArrow="primary"
                >
                  Поддержать
                </Button>
              </div>
            </article>

            <article
              key={card.id + 3}
              className={`${
                index === 0 ? "col-span-2" : "col-span-1"
              } bg-blue-light w-full rounded-[20px] px-[40px] py-[40px] hidden xl:block`}
            >
              <div
                className={`${
                  index === 0 ? "flex justify-between" : "flex flex-col"
                }`}
              >
                <div
                  className={`${
                    index === 0
                      ? "w-[48.42%] flex flex-col gap-[30px]"
                      : "w-full"
                  }`}
                >
                  <h2
                    className={`text-[30px] leading-[150%] font-bold text-turquoise-light ${
                      index === 0 ? "" : "mb-[10px]"
                    }`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`text-[16px] leading-[150%] font-norma ${
                      index === 0 ? "" : "mb-[30px]"
                    }`}
                  >
                    {card.description}
                  </p>
                  {card.boldText && (
                    <p className="text-[20px] leading-[150%] font-bold">
                      {card.boldText}
                    </p>
                  )}
                </div>

                <div className={`${index === 0 ? "w-[48.42%]" : "w-full"}`}>
                  <Image
                    className="w-full h-[312px] mb-[30px]"
                    src={card.image}
                    alt={card.alt}
                  />
                  <div className="w-full bg-white rounded-full h-2.5 mb-[10px]">
                    <div
                      className="bg-turquoise-light h-2.5 rounded-full"
                      style={{
                        width: `${
                          ((card.donationGoal - card.collected) /
                            card.donationGoal) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>

                  <p className="text-[16px] leading-[150%] font-normal mb-[5px]">
                    {`До цели: ${card.donationGoal}`}
                  </p>

                  <div className="flex justify-between">
                    <p className="text-[30px] leading-[150%] font-bold text-turquoise-light">
                      {`${card.collected} ₽`}
                    </p>
                    <Button
                      className="justify-center text-[20px] leading-[150%] font-bold text-red bg-white"
                      variant="regular-1"
                      withArrow={true}
                      arrowColor="primary"
                      sizeArrow="primary"
                    >
                      Поддержать
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </>
        );
      })}
    </div>
  );
};

export default SupportCards;
