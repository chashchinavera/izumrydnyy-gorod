import React from "react";
import { MainMenuDesktopProps } from "@/src/shared/ui/main-menu-desktop/types";
import Link from "next/link";

const MainMenuDesktop: React.FC<MainMenuDesktopProps> = ({
  linksList,
  currentPath,
}) => {
  return (
    <>
      <div
        className={`w-full hidden xl:flex ${
          currentPath === "/" ? "justify-between" : "justify-around"
        } items-center gap-2`}
      >
        {linksList.map((item, index) => {
          if (item.children) {
            return (
              <div
                key={index}
                className="relative cursor-pointer group hover:bg-blue-light rounded-t-[10px]"
              >
                <div
                  className={`p-[10px] text-[18px] leading-[150%] font-medium${
                    currentPath !== "/" &&
                    !!item.children.find((i) => i.link.startsWith(currentPath!))
                      ? " text-turquoise-dark underline underline-offset-2"
                      : ""
                  }`}
                >
                  {item.title}
                </div>
                <div className="hidden absolute w-max group-hover:flex flex-col z-30 bg-blue-light gap-[30px] py-[30px] px-[15px] rounded-tr-[10px] rounded-b-[10px] text-nowrap">
                  {item.children.map((subItem, subIndex) => {
                    return (
                      <Link
                        key={index.toString() + subIndex.toString()}
                        href={subItem.link}
                        className="hover:text-turquoise-light"
                      >
                        {subItem.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <Link
                key={index}
                href={item.link}
                className={`hover:text-turquoise-light p-[10px] text-[18px] leading-[150%] font-medium${
                  currentPath === item.link
                    ? " text-turquoise-dark underline underline-offset-2"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            );
          }
        })}
      </div>
      {/*<div
      className={classNames(
        "flex justify-between leading-[27px] text-[18px] font-medium items-center",
        className
      )}
    >
      {linksList.map((item) => {
        if (item.title === "Наши проекты") {
          return (
            <div key={item.link} onMouseLeave={offProjectsMenu}>
                <button
                  className={`${
                    isProjectsMenuActive ? "bg-blue-light" : ""
                  } hover:bg-blue-light hover:text-turquoise-light px-[15px] h-[50px] rounded-t-[10px] relative`}
                  onMouseEnter={onProjectsMenu}
                >
                  {item.title}
                </button>
              <div
                className={`${
                  isProjectsMenuActive ? "flex" : "hidden"
                } flex-col px-[15px] py-[30px] gap-[30px] bg-blue-light rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] absolute`}
              >
                {projectsArr.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      key={item.link}
                      className="text-[16px] leading-[24px] fornt-normal hover:text-turquoise-light"
                      onClick={offProjectsMenu}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        } else {
          return (
            <Link
              className="hover:text-turquoise-light"
              target="_blank"
              rel="noreferrer"
              href={item.link}
              key={item.link}
            >
              {item.title}
            </Link>
          );
        }
      })}
    </div>*/}
    </>
  );
};

export default MainMenuDesktop;
