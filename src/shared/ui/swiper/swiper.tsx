"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { typeSwiperProps, PicProp } from "./types";
import "./swiper.css";

const Swiper: React.FC<typeSwiperProps> = ({
  pictureArray,
  breakpoints,
  infinite,
  zoomSelected,
  page,
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);

  const [breakpoint, setBreakPoint] = useState(breakpoints[0]);
  const homeActiveIndexClass =
    "font-bold xl:text-xl text-sm text-turquoise-light pt-[15px] xl:pb-[5px] pb-[3px] xl:pl-[10px] pl-0 truncate scale-[0.9]  ";
  const homeNotActiveIndexClass =
    "font-bold xl:text-xl text-sm text-turquoise-light pt-[15px] xl:pb-[5px] pb-[3px] xl:pl-[10px] pl-0 truncate  ";
  const newsActiveIndexClass =
    "font-bold  text-sm sm:text-[30px] text-turquoise-light pt-[30px] xl:pb-[5px] pb-[3px] xl:pl-[10px] pl-0 truncate scale-[0.9]  ";
  const newsNotActiveIndexClass =
    "font-bold  text-sm sm:text-[30px] text-turquoise-light pt-[30px] xl:pb-[5px] pb-[3px] xl:pl-[10px] pl-0 truncate";
  const returnClassName = (i: number): string | undefined => {
    if (page === "home") {
      if (i === activeIndex) {
        return homeActiveIndexClass;
      } else return homeNotActiveIndexClass;
    } else {
      if (i === activeIndex) return newsActiveIndexClass;
      else return newsNotActiveIndexClass;
    }
  };
  const returnClassNameTray = (): string | undefined => {
    if (page === "home") return "tray-gap";
    else return "tray-gap tray-gap__news";
  };
  const returnClassNameDescription = (i: number): string | undefined => {
    if (page === "home")
      return i === activeIndex
        ? "font-normal xl:text-base  text-sm pt-[2px] xl:pt-[5px] xl:pb-[16px] xl:pl-[10px] pl-0  scale-[0.9]"
        : "font-normal xl:text-base  text-sm pt-[2px] xl:pt-[5px] xl:pb-[16px] xl:pl-[10px] pl-0  ";
    else return "font-bold text-sm py-[5px] pl-0";
  };
  const returnDescription = (i: number, card: PicProp) => {
    if (card.description) {
      if (page === "home") {
        if (windowWidth > 1100 && i !== activeIndex) return card.description;
        if (windowWidth < 1100 && i === activeIndex)
          return card.description.length > 30
            ? card.description.split("").slice(0, 20).join("").concat("...")
            : card.description;
        else
          return card.description.length > 50
            ? card.description.split("").slice(0, 40).join("").concat("...")
            : card.description;
      } else if (page === "news") return card.description;
      return card.description.length > 50
        ? card.description.split("").slice(0, 40).join("").concat("...")
        : card.description;
    } else return "";
  };

  const returnAdvancedDescription = (i: number, card: PicProp) => {
    if (card.advancedDescription) {
      if (page === "news") {
        if (!card.description) {
          if (windowWidth > 900)
            return card.advancedDescription.length > 170
              ? card.advancedDescription.split("").slice(0, 50).join("").concat("...")
              : card.advancedDescription;
          else return card.advancedDescription.split("").slice(0, 40).join("").concat("...");
        } else
          return card.advancedDescription.length > 40
            ? card.advancedDescription.split("").slice(0, 15).join("").concat("...")
            : card.advancedDescription;
      } else return "";
    }
  };
  const returnSliderClassName = (): string | undefined => {
    if (page === "news") return " lg:mx-[110px] mx-[40px]  border-box";
    else return "md:mx-[30px] mx-[15px]  border-box";
  };

  const returnCarouselProviderClassName = (): string | undefined => {
    if (page === "news") return "hidden md:flex flex-col w-full border-box px-[10x] lg:px-[130px] relative" ;
    else return "flex flex-col w-full " ;
  };

  const returnButtonsClassName = (): string | undefined => {
    if (page === "news")
      return " hidden xl:flex flex-row justify-between   space-x-[30px]   xl:absolute xl:inset-x-[130px] bottom-1/2";
    else return " hidden md:block  space-x-[30px]  self-center";
  };

  const handleSlideSelect = () => {
    if (activeIndex < pictureArray.length - step) setActiveIndex(activeIndex + 1);
    else if (infinite) setActiveIndex(1);
  };
  const handleslideDeSelect = () => {
    if (activeIndex > 1) setActiveIndex(activeIndex - 1);
    else if (infinite) setActiveIndex(pictureArray.length - step);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (!zoomSelected) setActiveIndex(-2);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Устанавливаем ширину окна

      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth !== 0) {
      // убираю фокус слайда при планшетном разрешении, запоминаю положение сфокусированного слайда
      if (activeIndex !== -1 && windowWidth <= 768) {
        setActive(activeIndex);
        setActiveIndex(-1);
      }

      //  возвращаем фокус на слайд, который был увеличен
      if (activeIndex === -1 && windowWidth > 768) setActiveIndex(active);
      // в зависимости от разрешения экрана (количества показываемых слайдов) выбираем шаг

      let bp = breakpoints[0];
      for (let point of breakpoints) {
        if (point.width > windowWidth) break;
        bp = point;
      }
      setBreakPoint(bp);

      setStep(bp.quantity - 1);
    }

    return;
  }, [windowWidth]);
  return (
    <CarouselProvider
      naturalSlideWidth={breakpoint.naturalSlideWidth}
      naturalSlideHeight={breakpoint.naturalSlideHeight}
      totalSlides={6}
      visibleSlides={breakpoint.quantity}
      touchEnabled={breakpoint.dragEnabled}
      step={1} // /при клике по кнопкам или перетаскивании перемещаемся на один слайд
      dragEnabled={breakpoint.dragEnabled}
      infinite={infinite}
      className={returnCarouselProviderClassName()}
    >
      <DotGroup
        showAsSelectedForCurrentSlideOnly
        className="flex justify-center items-baseline md:hidden flex-row gap-2 pb-[10px]"
      />
      <Slider
        classNameTrayWrap={"w-full  m-0"}
        classNameTray={returnClassNameTray()}
        className={returnSliderClassName()}
        horizontalPixelThreshold={2}
        id="mySlider"
      >
        {pictureArray.map((item: PicProp, index: number) => {
          return (
            <Slide
              index={index}
              key={index}
              className={" flex flex-col "}
              innerClassName={
                index === activeIndex ? "w-fit scale-x-[1.1] scale-y-[1.1]" : "w-fit "
              }
            >
              {" "}
              <div>
                <Image
                  src={item.url}
                  alt={item.altPic}
                  hasMasterSpinner={false}
                  className={`"w-full h-full grow   object-cover object-center" ${
                    page === "news" && "rounded-[20px]"
                  } `}
                />
                <p className={returnClassName(index)}>{item.name} </p>
                {item.description && (
                  <p className={returnClassNameDescription(index)}>
                    {returnDescription(index, item)}
                  </p>
                )}
                {item.advancedDescription && (
                  <p className="text-base font-normal pt-[5px] pb-[5px] ">
                    {returnAdvancedDescription(index, item)}
                  </p>
                )}
                {item.date && (
                  <p className="text-base font-normal pt-[5px] pb-[5px] ">{item.date}</p>
                )}
              </div>
            </Slide>
          );
        })}
      </Slider>

      <div className={returnButtonsClassName()}>
        <ButtonBack
          onClick={zoomSelected ? handleslideDeSelect : () => {}}
          className=" inline-block box-border p-[19px]  first-line:border-solid border-turquoise-dark rounded-[70px] border-2 self-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0005 26L10.0005 16L20.0005 6"
              stroke="#002A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonBack>
        <ButtonNext
          onClick={zoomSelected ? handleSlideSelect : () => {}}
          className=" inline-block box-border p-[19px] border-solid border-turquoise-dark rounded-[70px] border-2 self-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0005 6L22.0005 16L12.0005 26"
              stroke="#002A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
export default Swiper;
