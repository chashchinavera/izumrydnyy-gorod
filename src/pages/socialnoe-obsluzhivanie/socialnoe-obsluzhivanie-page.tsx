"use client";

import React, { useEffect, useRef, useState } from "react";
import ButtonTab from "@/src/shared/ui/button-tab/ButtonTab";
import PdfViewer from "@/src/shared/PDFViewer/PdfViewer";
import { buttonsInfo } from "@/src/app/configs/socialnoe-obsluzhivanie-page-config";

const SocialnoeObsluzhivaniePage: React.FC = () => {
  // Меняем title страницы при заходе (через useEffect тк это клиентский компонент)
  useEffect(() => {
    document.title = "Социальное обслуживание";
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

  // Стейт состояний кнопок
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
        Социальное обслуживание
      </h1>
      <div className="xl:flex xl:gap-[40px]">
        <div className="xl:w-[40.72%]">
          <p className="text-[14px] xl:text-[16px] font-normal leading-[21px] xl:leading-[24px] mb-[30px] xl:mb-[40px]">
            Социально-трудовые услуги оказываются в помещении инклюзивных
            мастерских, предоставленном организации в безвозмездное пользование
            на 3 года Департаментом труда и социальной защиты города Москвы,
            расположенном по адресу: г. Москва, ул. Енисейская, д. 10, отдельный
            вход со стороны ул. Енисейская, слева от арки. График работы
            мастерских — по будням с 12.30 до 18.00.
          </p>
          <div className="flex flex-col gap-5 mb-[20px]">
            {buttonsInfo.map((item, index) => {
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

export default SocialnoeObsluzhivaniePage;
