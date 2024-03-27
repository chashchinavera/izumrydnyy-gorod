import React from "react";
import Swiper from "../src/shared/ui/swiper/swiper";
import {
  picArray,
  breakpoints,
  newsBreakpoints,
  picArrayNews,
} from "@/src/app/configs/swiper-config";
import mainImage from "../public/images/main-page/main-page-image.png";
import aboutUsImage from "../public/images/main-page/about-us-image.png";
import aboutUsImageTablet from "../public/images/main-page/about-us-image-tablet.png";
import aboutUsImageDesktop from "../public/images/main-page/about-us-image-desktop.png";
import Image from "next/image";
import Button from "@/src/shared/ui/Button/Button";
import SupportCards from "@/src/shared/ui/support-cards/support-cards";
import { cardInfoList } from "@/src/app/configs/supprot-cards.config";
import humanSmall from "../public/images/main-page/human-small.png";
import humanMiddle from "../public/images/main-page/human-middle.png";
import humanBig from "../public/images/main-page/human-big.png";
import OurProjects from "@/src/shared/ui/our-projects/OurProjects";
import projectList from "@/src/app/configs/menu-our-project.config";
import PartnerList from "@/src/shared/ui/partner-list/partner-list";
import { partnersData } from "@/src/app/configs/partners.config";

const Page: React.FC = () => {
  return (
    <>
      {/* //////////MOBILE///////// */}
      <section className="flex md:hidden flex-col">
        <section className="px-[15px] mb-[80px]">
          <div className="flex flex-col gap-[40px]">
            <p className="font-bold text-[14px] leading-[150%]">
              региональная благотворительная общественная организация инвалидов.
            </p>
            <Image
              className="w-full"
              src={mainImage}
              alt="Картинка гавного меню"
            />
            <Button
              className="w-full text-white text-[18px] leading-[150%] font-bold"
              variant="secondary-1"
              withArrow={false}
            >
              Поддержать
            </Button>
          </div>
        </section>
        <section className="px-[15px] mb-[80px]">
          <div className="flex flex-col gap-[30px] mb-[40px]">
            <h1 className="text-[22px] leading-[150%] font-bold text-center text-turquoise-light">
              О нас
            </h1>
            <div className="flex flex-col gap-[10px] text-[14px] leading-[150%] font-normal">
              <p>
                Основная цель работы Центра — психосоциальная реабилитация
                подростков и взрослых с ментальными особенностями, содействие
                освоению ими полноценных ролей в семье, получению образования,
                трудоустройству и интеграции в общество.
              </p>
              <p className="font-bold">
                Для этого реализуются проекты трудовой, волонтёрской, досуговой
                занятости, сопровождаемого проживания, работают группы
                поддержки.
              </p>
              <p>
                Важным аспектом психосоциальной реабилитации участников проектов
                является постепенное делегирование им ответственности за помощь
                себе и другим. Участники проектов при желании и возможности
                становятся членами команды — социальными тренерами, тренерами
                мастерских, координаторами направлений.
              </p>
            </div>
          </div>
          <Image className="w-full" src={aboutUsImage} alt="Картинка 'О нас'" />
        </section>

        <section className="px-[15px] mb-[80px]">
          <OurProjects projectList={projectList} />
        </section>

        <section className="mb-[80px] px-[15px]">
          <h2 className="mb-[30px] text-[22px] leading-[150%] font-bold text-center text-turquoise-light">
            Команда
          </h2>
          <Swiper
            pictureArray={picArray}
            breakpoints={breakpoints}
            infinite={true}
            zoomSelected={false}
            page={"home"}
          />
        </section>
        <section>
          <div className="px-[15px]">
            <h3 className="mb-[30px] text-[22px] leading-[150%] font-bold text-center text-turquoise-light">
              Поддержать
            </h3>
            <SupportCards cardsInfoList={cardInfoList} />
          </div>
        </section>

        <section className="mb-[80px] px-[15px]">
          <PartnerList partnerList={partnersData} />
        </section>
      </section>
      {/* //////////TABLET///////// */}
      <section className="hidden md:flex xl:hidden flex-col">
        <section className="px-[30px] mb-[100px]">
          <div className="flex flex-col gap-[30px] mb-[100px]">
            <p className="font-bold text-[30px] leading-[150%]">
              региональная благотворительная общественная организация инвалидов.
            </p>
            <Button
              className="w-full py-[20px] text-white text-[18px] leading-[150%] font-bold"
              variant="secondary-1"
              withArrow={false}
            >
              Поддержать
            </Button>
          </div>

          <Image
            className="w-full"
            src={mainImage}
            alt="Картинка гавного меню"
          />
        </section>
        <section className="px-[30px] mb-[100px]">
          <div className="flex flex-col gap-[40px] mb-[40px]">
            <h1 className="text-[40px] leading-[150%] font-bold text-turquoise-light">
              О нас
            </h1>
            <div className="flex flex-col gap-[20px] text-[16px] leading-[150%] font-normal">
              <p>
                Основная цель работы Центра — психосоциальная реабилитация
                подростков и взрослых с ментальными особенностями, содействие
                освоению ими полноценных ролей в семье, получению образования,
                трудоустройству и интеграции в общество.
              </p>
              <p className="font-bold text-[20px]">
                Для этого реализуются проекты трудовой, волонтёрской, досуговой
                занятости, сопровождаемого проживания, работают группы
                поддержки.
              </p>
              <p>
                Важным аспектом психосоциальной реабилитации участников проектов
                является постепенное делегирование им ответственности за помощь
                себе и другим. Участники проектов при желании и возможности
                становятся членами команды — социальными тренерами, тренерами
                мастерских, координаторами направлений.
              </p>
            </div>
          </div>
          <Image src={aboutUsImageTablet} alt="Картинка 'О нас'" />
        </section>

        <section className="px-[30px] mb-[100px]">
          <OurProjects projectList={projectList} />
        </section>

        <section className="mb-[100px]">
          <h2 className="mb-[60px] px-[30px] text-[40px] leading-[150%] font-bold text-center text-turquoise-light">
            Команда
          </h2>
          <Swiper
            pictureArray={picArray}
            breakpoints={breakpoints}
            infinite={true}
            zoomSelected={false}
            page={"home"}
          />
        </section>

        <section>
          <div className="px-[30px]">
            <h3 className="mb-[60px] text-[40px] leading-[150%] font-bold text-center text-turquoise-light">
              Поддержать
            </h3>
            <SupportCards cardsInfoList={cardInfoList} />
          </div>
        </section>
      </section>
      {/* //////////DESKTOP///////// */}
      <section className="hidden xl:flex flex-col">
        <section className="px-[130px] mb-[100px] mt-[140px]">
          <div className="flex gap-[30px] mb-[100px]">
            <Button
              className="w-full h-[90px] py-[20px] text-white text-[30px] leading-[150%] font-bold"
              variant="secondary-1"
              withArrow={false}
            >
              Поддержать
            </Button>
            <p className="font-bold text-[30px] leading-[150%]">
              региональная благотворительная общественная организация инвалидов.
            </p>
          </div>
        </section>

        <section className="flex flex-col px-[130px] mb-[140px]">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                className="w-[207px] h-[302px] mt-[256px] ml-[42px]"
                src={humanSmall}
                alt=""
              ></Image>
              <Image
                className="w-[229px] h-[335px] mt-[33px]"
                src={humanMiddle}
                alt=""
              ></Image>
              <Image
                className="w-[366px] mt-[33px] ml-[-15px]"
                src={humanBig}
                alt=""
              ></Image>
            </div>

            <div className="w-[49.4%]">
              <h1 className="text-[40px] leading-[150%] font-bold text-turquoise-light mb-[60px]">
                О нас
              </h1>
              <div className="flex flex-col gap-[20px] text-[16px] leading-[150%] font-normal">
                <p>
                  Основная цель работы Центра — психосоциальная реабилитация
                  подростков и взрослых с ментальными особенностями, содействие
                  освоению ими полноценных ролей в семье, получению образования,
                  трудоустройству и интеграции в общество.
                </p>
                <p className="font-bold text-[20px]">
                  Для этого реализуются проекты трудовой, волонтёрской,
                  досуговой занятости, сопровождаемого проживания, работают
                  группы поддержки.
                </p>
                <p>
                  Важным аспектом психосоциальной реабилитации участников
                  проектов является постепенное делегирование им ответственности
                  за помощь себе и другим. Участники проектов при желании
                  и возможности становятся членами команды — социальными
                  тренерами, тренерами мастерских, координаторами направлений.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="w-full"
            src={aboutUsImageDesktop}
            alt="Картинка 'О нас'"
          />
        </section>

        <section className="px-[130px] mb-[140px]">
          <OurProjects projectList={projectList} />
        </section>

        <section className="mb-[140px]">
          <h2 className="mb-[60px] text-[40px] leading-[150%] font-bold text-center text-turquoise-light">
            Команда
          </h2>
          <Swiper
            pictureArray={picArray}
            breakpoints={breakpoints}
            infinite={true}
            zoomSelected={false}
            page={"home"}
          />
        </section>

        <section>
          <div className="px-[130px]">
            <h3 className="mb-[60px] text-[40px] leading-[150%] font-bold text-center text-turquoise-light">
              Поддержать
            </h3>
            <SupportCards cardsInfoList={cardInfoList} />
          </div>
        </section>

        <section className="mb-[140px] px-[130px]">
          <PartnerList partnerList={partnersData} />
        </section>
      </section>
    </>
  );
};

export default Page;
