import React from "react";
import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from "react";

type Size = "big" | "small";
type TextAlign = "text-left" | "text-center";
type TextStyle = "font-bold underline" | "font-bold" | "font-normal underline";
interface typeAnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text?: string;
  size: Size; 
  textAlign: TextAlign;
  textStyle: TextStyle;
  children?: ReactNode;
}

type DefaultTypeProps = {
  textAlign?: "text-center"; // textAlign теперь необязательное поле с условным значением по умолчанию
  textStyle?: "font-bold";
};

const defaultProps: DefaultTypeProps = {
  textAlign: "text-center", // Указание значения по умолчанию
  textStyle: "font-bold"
};

const AnchorTab: React.FC<typeAnchorProps> = ({
  
  text,
  size,
  textAlign = defaultProps.textAlign,
  textStyle =defaultProps.textStyle,
  children,
  className,
  ...props
}) => {

  const allStyles =
    "flex flex-row items-center justify-center rounded-[40px]  lg:rounded-full w-full h-fit box-border text-sm lg:text-base hover:bg-blue-medium bg-blue-light text-turquoise-dark";

  return (
    <a
      {...props}
      className={`${allStyles} ${
        size === "big" ? "px-7 py-5 lg:py-7 lg:px-10" : "px-0 py-5 lg:py-5 lg:px-0"
      } ${textAlign} ${className} ${textStyle}`}
      href={props.href }
    >
      <div>
        { text && text + " "}
        {children}
      </div>

     
    </a>
  );
};
export default AnchorTab;
