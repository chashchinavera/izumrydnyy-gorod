"use client";
import Image from "next/image";
import menuIcon from "../../../../public/icons/menuIcon.png";
import closeBurgerMenuButton from "../../../../public/icons/closeBurgerMenuButton.png";
import logo3 from "../../../../public/images/logo/logo3.svg";
import { useState } from "react";
import SocialNetsList from "../socialnets-list/social-netsList";
import Link from "next/link";

interface BurgerMenuProps {
  isIndexPage: boolean;
  menuLinksArr: {
    title: string;
    link: string;
  }[];
  socialLinks: {
    imageUrl: string;
    name: string;
    link: string;
  }[];
  isHomePage: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isIndexPage,
  menuLinksArr,
  socialLinks,
  isHomePage,
}) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className="flex justify-end z-[1]">
      <button
        className={`xl:hidden w-[54px] self-end ${
          isHomePage && "md:mr-[15px]"
        } xl:hidden hover:opacity-80`}
        onClick={toggleBurgerMenu}
      >
        <Image
          src={menuIcon}
          alt="Иконка бургерного меню"
          className="h-[23px] md:h-[26px]"
        />
      </button>

      <div
        className={`${
          isBurgerMenuOpen ? "fixed" : "hidden"
        } w-full h-full top-0 left-0  bg-black opacity-50 xl:hidden`}
        onClick={toggleBurgerMenu}
      ></div>

      <div
        className={`${
          isBurgerMenuOpen
            ? "transition-opacity duration-300 ease-in-out	opacity-100"
            : "opacity-0 pointer-events-none	"
        } flex flex-col bg-white w-[81.87%] fixed top-0 right-0 px-[50px] pt-[50px] pb-[30px] items-end gap-[30px] xl:hidden md:w-[48.05%] md:py-[30px] md:pl-[50px] md:pr-[40px]`}
      >
        <button onClick={toggleBurgerMenu}>
          <Image
            src={closeBurgerMenuButton}
            alt="Иконка кнопки закрытия меню"
          />
        </button>
        <Link href="/" onClick={toggleBurgerMenu}>
          <Image src={logo3} alt="Логотип сайта" className="w-[154px]"></Image>
        </Link>
        {menuLinksArr.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className="flex-col h-full ml-auto text-end gap-[30px] leading-[21px] font-medium text-[14px] items-rigth md:leading-[24px] md:text-[16px] hover:text-turquoise-light"
              onClick={toggleBurgerMenu}
            >
              {item.title}
            </Link>
          );
        })}

        <SocialNetsList buttonList={socialLinks} />
      </div>
    </div>
  );
};

export default BurgerMenu;
