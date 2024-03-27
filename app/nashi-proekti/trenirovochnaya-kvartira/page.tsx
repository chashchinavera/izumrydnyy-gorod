
import React from "react";
import Tab from "@/src/shared/ui/Tab/Tab";
import Image from "next/image";
import Pic from "@/public/images/trenirovochnaya-kvartira-page/Volonterstvo_img.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Волонтерство для всех",
};
const Page: React.FC = () => {
 
  return (
    <main className="flex flex-col items-center py-[60px]   2xl:py-[80px] px-[15px]">
      <h1 className="2xl:text-[40px] text-turquoise-light font-bold text-[22px] leading-8 md:leading-[60px]">Тренировочная квартира</h1>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(400px,_820px)]  md:grid-rows-[fit-content,_664px] 2xl:grid-rows-1 gap-y-[40px] 2xl:grid-cols-[minmax(200px,820px),_820px] md:gap-x-[40px] 2xl:max-w-[1660px] min-[1900px]:w-[1660px] pt-[30px] pb-[30px] 2xl:pt-[40px] 2xl:pb-[80px]">
        <article className="flex flex-col gap-y-[20px] items-stretch max-w-full ">

          <p className="text-sm md:text-base leading-[21px]">
            Тренировочная квартира (ТК) открылась 7 сентября 2020 года в арендуемой нашей
            организацией квартире в Ясенево.
          </p>
          <Tab
            className="2xl:px-[50px] px-[30px] "
            size="small"
            textAlign="text-left"
            textStyle="font-bold"
            text="Это — площадка подготовки к самостоятельной жизни для молодых людей с ментальными особенностями и психическими расстройствами. "
          />
          <div className="space-y-2.5 md:space-y-5">
          <p className="text-sm md:text-base leading-[21px]">
            Для проживания предоставляются 2 комнаты с необходимой мебелью (комната для проживания
            участников смены и тренерская). Квартира оснащена всеми необходимыми мебелью, техникой
            и инвентарём для обучения навыкам самостоятельной жизни. В частности, распоряжении
            проживающих: стиральная машина, электрическая плита с духовкой, МВ-печь, холодильник,
            посудомоечная машина, утюг, гладильная доска, пылесос. Квартира работает в режиме
            5-днёвки (выходные ребята проводят дома), каждая смена обычно длится 2–3 месяца.
          </p>
          <p className="text-sm md:text-base leading-[21px]">
            Смена — это 2 человека — соседи по комнате, которых сопровождает социальный тренер.
            Для каждого участника проекта составляется индивидуальный реабилитационный маршрут,
            определяются приоритетные задачи, в процессе и по итогам участия в проекте оценивается
            динамика. У нас есть традиция новоселий (обычно в конце 2-й недели жизни в ТК)
            и выпускных (по окончании смены) с приглашением родителей или кураторов ребят,
            угощениями, приготовленными участниками проекта, обсуждением текущих успехов
            и трудностей.
          </p>
          </div>
         
          <Tab
            className="2xl:px-[50px] px-[30px] "
            size="small"
            textStyle="font-bold"
            textAlign="text-left"
            text="Каждая смена в ТК уникальна: со своей атмосферой и распорядком дня, вечерними чтениями вслух, игрой в шахматы или совместным просмотром мультфильмов, дружбой и выяснениями отношений. Такая настоящая жизнь."
          />
        </article>
        <Image
          src={Pic}
          alt="картинка на странице тренировочная квартира"
          className="w-full hidden md:block"
          width={820}
          height={664}
        />
      </div>
      <iframe
      
        className="md:rounded-[20px]  rounded-none border-0  w-[345px] h-[194px] md:w-[517px] md:h-[291px] 2xl:w-[942px] 2xl:h-[492px]"
        src="https://dzen.ru/embed/vvX_Eprzcogc?from_block=partner&from=zen&mute=0&autoplay=0&tv=0"
        allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default Page;
