import React from "react";
import Image from "next/image";
import LogoPic from "../../images/logo/site-logo.svg";
import LogoTelegram from "../../../../public/icons/telegram-logo.svg";
import LogoVk from "../../../../public/icons/vk-logo.svg";
import classNames from "classnames";
import Link from "next/link";
export interface LinkObject {
  title: string;
  url?: string;
}

export interface LinkObjectWithName extends LinkObject {
  name?: LinkObject[];
}

export type typeLinkArray = LinkObjectWithName[];

let hardCodeLinksArray: typeLinkArray = [
  {
    title: "Наши проекты",
    url: "/projects",
    name: [
      {
        title: "Волонтерство для всех",
        url: "volunteering",
      },
      {
        title: "Трудовая реабилитация",
        url: "rehab",
      },
      {
        title: "Выездные программы",
        url: "visiting",
      },
      {
        title: "Курьеры для своих",
        url: "couriers",
      },
      {
        title: "Школа сопровождаемого проживания",
        url: "school",
      },
      {
        title: "Товары мастерских на озоне",
        url: "products",
      }
    ]
  },
  {
    title: "Социальное обслуживание",
    url: "/social-service",
    name: [
      {
        title: "Перечень социальных услуг и тарифы",
        url: "social-list",
      },
      {
        title: "Правила внутреннего распорядка",
        url: "rules",
      },
      {
        title: "Информация о количестве мест",
        url: "seats-number",
      },
      {
        title: "Порядок предоставления социальных услуг в полустационарной форме",
        url: "procedure",
      }
    ]
  },
  {
    title: "Новости",
    url: "/news",
  },
  {
    title: "Документы",
    url: "documents",
    name: [
      {
        title: "Устав организации",
        url: "regulation",
      },
      {
        title: "Свидетельство о постановке на учёт в налоговой",
        url: "certificate-tax-service",
      },
      {
        title: "Свидетельство о регистрации НКО",
        url: "certificate-registration",
      },
      {
        title: "Благотворительная программа",
        url: "charity-programm",
      },
      {
        title: "Благотворительная программа «Помощь в период эпидемии Covid-2019»",
        url: "charity-covid",
      },
      {
        title: "Отчеты",
        url: "reports",
      },
      {
        title: "Предписания надзорных органов",
        url: "regulations",
      },
    ],
  },
  {
    title: "Контакты",
    url: "/contacts",
  },
  {
    title: "Поддержать",
    url: "support",
  },
];

export interface typeFooterProp {
  linkList?: typeLinkArray;
  className?: string;
}

const Footer: React.FC<typeFooterProp> = ({ className }) => {
  if (!className) className = "";
  const baseClassesMobile = "w-full flex flex-col space-y-[20px] pt-[30px] items-center justify-center bg-blue-light rounded-tr-[30px] rounded-tl-[30px]"
  const baseClassesTablet = "md:space-y-[30px] md:pt-[60px] pt-[30px] justify-center md:rounded-tr-[60px] md:rounded-tl-[60px]"
  const baseClassesPC = " 2xl:px-[130px] lg:px-[60px] min-[1900px]:flex-row min-[1900px]:space-y-0 2xl:justify-stretch"
  const baseClasses = `${baseClassesMobile} ${baseClassesTablet} ${baseClassesPC}`
  const baseClassesEsxternalMobile="w-full flex flex-col items-stretch bg-blue-light rounded-tr-[30px] rounded-tl-[30px] space-y-[20px] pb-[30px] "
  const baseClassesEsxternalTablet="md:rounded-tr-[60px] md:rounded-tl-[60px] md:space-y-[30px]"
  const baseClassesEsxternal =classNames(baseClassesEsxternalMobile, baseClassesEsxternalTablet,className);
  const gridContainerClassesMobile = "w-fit  grid grid-cols-1 grid-rows-7 content-start  gap-y-5 justify-start items-start"
  const gridContainerClassesTablet= "md:grid-cols-2 md:gap-x-14 md:gap-y-[60px]"
  const gridContainerClassesPC="2xl:pl-[56px] 2xl:grid-rows-1 2xl:grid-cols-[repeat(6,_max-content)] 2xl:gap-y-0 2xl:gap-x-[56px] 2xl:w-full 2xl:items-start  "
  const gridContainerClasses= `${gridContainerClassesMobile} ${gridContainerClassesTablet} ${gridContainerClassesPC}`
  return (
    <div className={baseClassesEsxternal}>
      <div className={baseClasses}>
        <Link className="min-[1900px]:self-start  shrink-0 " href="/">
          <Image
            src={LogoPic}
            alt="логотип сайта"
            width={244}
            height={64}
            className="w-[197px] h-[52px] md:w-[244px] md:h-[64px]  "
          />
        </Link>
        <div className={gridContainerClasses}>
          {hardCodeLinksArray.map((item: LinkObjectWithName, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col md:gap-y-3 md:items-start 2xl:items-start justify-start md:pl-[15px] 2xl:pl-0  "
              >
                <Link
                  href={item.url || "#"}
                  className={
                    "md:text-lg text-sm  leading-[21px] md:leading-[25px] 2xl:leading-[25px]  font-medium text-left  "
                  }
                  target="_blank"
                >
                  {item.title}
                </Link>
                <div className="flex flex-col gap-x-1 justify-start items-start ">
                  {item.name &&
                    item.name.map((link: LinkObject, i: number) => (
                      <Link
                        key={i}
                        href={`${item.url}/${link.url}`}
                        className=" hidden  md:block 2xl:block text-base  font-normal max-w-[262px] w-full md:w-[262px]  md:leading-[28px] 2xl:leading-[27px] "
                        target="_blank"
                      >
                        {link.title}
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-x-[10px] 2xl:flex self-center ">
        <Link className=" 2xl:block" href="#">
          <Image src={LogoTelegram} alt="логотип Телеграм" />
        </Link>
        <Link className=" block  2xl:block" href="#">
          <Image src={LogoVk} alt="логотип вКонтакте" />
        </Link>
      </div>
      <p className=" 2xl:block text-xs leading-[18px] self-center">
        Изумрудный город 2015 - 2023
      </p>
    </div>
  );
};
export default Footer;
