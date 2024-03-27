"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../images/logo/site-logo.svg";
import SocialNetsList from "@/src/shared/ui/socialnets-list/social-netsList";
import { socialLinks } from "@/src/app/configs/social-nets.config";
import MainMenuDesktop from "@/src/shared/ui/main-menu-desktop/main-menu-desktop";
import { menuLinksArr } from "@/src/app/configs/header-menu.config";
import BurgerMenu from "@/src/shared/ui/burger-menu/burger-menu";
import MenuOurProjects from "../menu-our-projects/menu-our-projects";
import projectList from "@/src/app/configs/menu-our-project.config";

interface HeaderProps {
  isIndexPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isIndexPage }) => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <>
      <div
        className={
          "px-[15px] mx-auto items-center mt-[30px] mb-[40px] md:px-[30px] xl:mt-[40px] 2xl:px-[130px] xl:mb-[40px] flex gap-5 md:gap-2.5 xl:gap-10" +
          (isHomePage ? " flex-col" : "")
        }
      >
        <Link href="/" className="block">
          <Image
            src={Logo}
            alt="logo"
            className={`${
              isHomePage && "w-[345px] md:w-[708px] xl:w-[1660px]"
            } ${!isHomePage && "w-[264px] md:w-[186px] xl:w-[187px]"}`}
          />
        </Link>
        <div
          className={
            "flex-grow w-full flex gap-5" +
            (!isHomePage ? " self-center" : " items-center")
          }
        >
          <div className="flex flex-grow justify-end w-full">
            <MainMenuDesktop linksList={menuLinksArr} currentPath={pathname} />
            <BurgerMenu
              isIndexPage={isIndexPage}
              menuLinksArr={menuLinksArr}
              socialLinks={socialLinks}
              isHomePage={isHomePage}
            />
          </div>
          <div className="hidden xl:block">
            <SocialNetsList buttonList={socialLinks} />
          </div>
        </div>
      </div>
      <MenuOurProjects projectList={projectList} />

      {/*<div
      className={`flex ${
        isIndexPage ? "flex-row" : "flex-col"
      } px-[15px] mt-[30px] w-full justify-between xl:mt-10 md:px-[30px] 2xl:px-[130px]`}
    >
      {!isIndexPage && (
        <Link href={"/"}>
          <Image
            src={siteLogo}
            alt="logo"
            className="m-auto mb-5 md:mb-2.5 xl:mb-10 xl:m-auto"
          />
        </Link>
      )}
      {isIndexPage && (
        <Link href="/">
          <Image
            src={logo3}
            alt="logo"
            className="w-[264px] xl:w-[187px]"
          />
        </Link>
      )}

      <BurgerMenu
        isIndexPage={isIndexPage}
        menuLinksArr={menuLinksArr}
        socialLinks={socialLinks}
      />

      <div
        className={`hidden justify-between ${
          isIndexPage && "xl:w-[83.86%]"
        } xl:flex`}
      >
        <MainMenuDesktop linksList={menuLinksArr} className="w-[85.84%]" />
        <SocialnetsList buttonList={socialLinks} />
      </div>
    </div>*/}
    </>
  );
};

export default Header;
