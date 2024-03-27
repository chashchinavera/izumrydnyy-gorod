import React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type Size = "big" | "small";
type TextAlign = "text-left" | "text-center";
interface typeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
  size: Size;
  clicked: boolean;
  textAlign: TextAlign;
}

type DefaultTypeProps = {
  textAlign?: "text-center"; // textAlign теперь необязательное поле с условным значением по умолчанию
  clicked?: false;
};

const defaultProps: DefaultTypeProps = {
  textAlign: "text-center", // Указание значения по умолчанию
  clicked: false,
};

const ButtonTab: React.FC<typeButtonProps> = ({
  text,
  size,
  clicked = defaultProps.clicked,
  textAlign = defaultProps.textAlign,
  className,
  ...props
}) => {

  const clickedStyles = clicked
    ? "bg-turquoise-light text-white"
    : " bg-blue-light text-turquoise-dark hover:text-turquoise-dark hover:bg-blue-medium";
  const allStyles =
    "flex flex-row items-center justify-center rounded-[40px]  lg:rounded-full w-full h-fit box-border text-sm lg:text-base   font-bold ";

  return (
    <button
      {...props}
      className={`${allStyles}${clickedStyles} ${
        size === "big" ? "px-7 py-5 lg:py-7 lg:px-[50px]" : "px-0 py-5 lg:py-5 lg:px-0"
      } ${textAlign} ${className}`}
       
    >
      
        { text && text}
       
      
        <span className={`${!clicked ? "hidden" : "hidden lg:block"}`}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6L22 16L12 26"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      
    </button>
  );
};
export default ButtonTab;
