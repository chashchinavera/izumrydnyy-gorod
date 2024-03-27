import React from "react";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type Size = "big" | "small";
type TextAlign = "text-left" | "text-center";
type TextStyle = "font-normal" | "font-bold" | "font-normal underline";
interface typeDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  
  text?: string;
  size: Size;
  textAlign: TextAlign;
  textStyle: TextStyle;
  children?: ReactNode;
}

type DefaultTypeDivProps = {
  textAlign?: "text-center"; // textAlign теперь необязательное поле с условным значением по умолчанию
  textStyle?: "font-normal";
};

const defaultProps: DefaultTypeDivProps = {
  textAlign: "text-center", // Указание значения по умолчанию
  textStyle: "font-normal",
};

const Tab: React.FC<typeDivProps> = ({
  text,
  size,
  textAlign = defaultProps.textAlign,
  textStyle = defaultProps.textStyle,
  children,
  className,
  ...props
}) => {


  const allStyles =
    "flex flex-row items-center justify-center rounded-[40px]  lg:rounded-full w-full h-fit box-border text-sm  leading-[21px] lg:text-base bg-blue-light font-normal text-turquoise-dark";

  return (
    <div
      {...props}
      className={`${allStyles}  ${
        size === "big" ? "px-7 py-5 lg:py-7 lg:px-10" : "px-0 py-5 lg:py-5"
      } ${textAlign} ${textStyle} ${className}`}
    >
      <div>
        { text && text + " "}
        {children}
      </div>
    </div>
  );
};
export default Tab;
