"use client"

import ButtonTab from "@/src/shared/ui/button-tab/ButtonTab";
import { useEffect, useRef, useState } from "react";
import { buttonsInfo } from "@/src/app/configs/documenti.config";
import PdfViewer from "@/src/shared/PDFViewer/PdfViewer";
import Link from "next/link";

const DocumentiPage: React.FC = () => {
  // Меняем title страницы при заходе (через useEffect тк это клиентский компонент)
  useEffect(() => {
    document.title = "Документы";
  }, []);

  // Создаем предварительный стейт для кнопок
  const buttonStatesArr: boolean[] = [];

  // Наполняем предварительный стейт значениями в зависимости от количества записей в конфиге
  buttonsInfo.forEach((item, index) => {
    if (index === 0) {
      buttonStatesArr.push(true);
    } else {
      buttonStatesArr.push(false);
    }
  });
  // Инициализируем стейт состояний кнопок
  const [buttonStates, setButtonStates] = useState<boolean[]>(buttonStatesArr);

  // Создаем ссылку на DOM-элемент куда будем скролить юзера (к PDFViewer)
  const pdfViewerRef = useRef<HTMLDivElement>(null);

  /** Функция скрола к PDFViewer  */
  const scrollToPdfViewer = () => {
    setTimeout(() => {
      if (pdfViewerRef.current) {
        pdfViewerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  /** Функция для создания измененного стейта состояний кнопок
   * @param {number} index - Индекс кнопки, которую нужно сдлеать активной
   * @returns {boolean[]} - Новый массив состояний кнопок
   */
  const createNewButtonStates = (index: number) => {
    return buttonStates.map((item, indexItem) =>
      indexItem === index ? true : false
    );
  };

  /** Функция обработчик нажатия на кнопку. Обновляет стейт состояний кнопок и скролит пользователя к окну просмотра PDF-файла
   * @param {number} index - Индекс кнопки
   * @returns {void}
   */
  const handleClickButton = (index: number) => {
    setButtonStates(createNewButtonStates(index));
    scrollToPdfViewer();
  };

  return (
    <div className="px-[15px] xl:px-[130px] py-[60px] xl:py-[80px]">
      <h1 className="text-turquoise-light text-[22px] xl:text-[40px] font-bold leading-[33px] xl:leading-[60px] mb-[30px] xl:mb-[80px] text-center">
        Документы
      </h1>
      <div className="xl:flex xl:gap-[40px]">
        <div className="xl:w-[40.72%]">
          <div className="flex flex-col gap-5 mb-[20px]">
            {buttonsInfo.map((item, index) => {
              if (item.title === "Отчёты") {
                return (
                  <Link key={index} href={"documenti/otcheti"}>
                    <ButtonTab
                      className="font-medium xl:text-[18px] xl:leading-[27px]"
                      text={buttonsInfo[index].title}
                      size="big"
                      textAlign="text-left"
                      clicked={buttonStates[index]}
                    />
                  </Link>
                );
              } else {
                return (
                  <ButtonTab
                    key={index}
                    className="font-medium xl:text-[18px] xl:leading-[27px]"
                    text={buttonsInfo[index].title}
                    size="big"
                    textAlign="text-left"
                    clicked={buttonStates[index]}
                    onClick={() => handleClickButton(index)}
                  />
                );
              }
            })}
          </div>
        </div>
        {buttonStates.map((item, index) => {
          return (
            item === true && (
              <div ref={pdfViewerRef} className="xl:w-[56.87%]" key={index}>
                <PdfViewer buttonsInfo={buttonsInfo} index={index} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default DocumentiPage
