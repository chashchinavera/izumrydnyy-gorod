import Link from "next/link";
import { MenuOurProjectsProps } from "./types";
import markerDelimiter from "@/public/images/menu-our-project/marker-delimiter.svg";
import markerAciveLink from "@/public/images/menu-our-project/marker-active-link.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Project } from "./types";
import React from "react";

const MenuOurProjects: React.FC<MenuOurProjectsProps> = ({ projectList }) => {
  const isActiveLink = (
    link: string,
    path: string | null
  ): boolean | undefined => {
    return path?.endsWith(link);
  };

  const isActiveMenu = (): boolean | undefined => {
    return currentPath?.includes("/nashi-proekti");
  };

  const isLastLink = (index: number, arr: Project[]) => {
    return index === arr.length - 1;
  };

  const currentPath: string | null = usePathname();
  return (
    isActiveMenu() && (
      <div className="leading-[150%] font-medium text-gray">
        <nav className="px-[15px] md:px-[30px] text-[14px] xl:hidden">
          <ul className="flex flex-col">
            {projectList &&
              projectList.map((project, index) => {
                return (
                  <li
                    key={index}
                    className={`flex gap-[10px] ${
                      !isLastLink(index, projectList) &&
                      "border-b-[1px] border-blue-medium pb-[10px] mb-[10px]"
                    }`}
                  >
                    {currentPath && isActiveLink(project.link, currentPath) && (
                      <Image src={markerAciveLink} alt="Маркер" />
                    )}
                    <div>
                      <Link
                        href={project.link}
                        className={`${
                          isActiveLink(project.link, currentPath) &&
                          "text-turquoise-light"
                        } hover:text-turquoise-light`}
                      >
                        {project.title}
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ul>
        </nav>

        <nav className="hidden xl:flex px-[30px] 2xl:px-[130px] text-[18px]">
          <ul className="flex justify-between w-full">
            {projectList.map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <li key={index} className="flex">
                    <Link
                      className={`${
                        isActiveLink(project.link, currentPath) &&
                        "text-turquoise-light"
                      } hover:text-turquoise-light`}
                      href={project.link}
                    >
                      {project.title}
                    </Link>
                  </li>
                  {!isLastLink(index, projectList) && (
                    <Image src={markerDelimiter} alt="Маркер разделитель" />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </div>
    )
  );
};

export default MenuOurProjects;
