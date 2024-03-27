import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";



interface newsCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  subTitle?: string;
  description?: string;
  image?: string;
  date: string;
  url: string;

}

const NewsCard: React.FC<newsCardProps> = ({
  title,
  subTitle,
  image,
  date,

  description,
  className,
  ...props
}) => {
   const baseClasses = classNames("flex flex-col w-full gap-5 md:gap-[30px]",className);
   const imageClasses = "max-h-[200px] block w-full h-full  object-cover object-top md:object-right overflow-hidden md:min-h-[439px] rounded-[20px]";
   const titleClasses = "font-bold text-lg md:text-[30px] leading-7 md:leading-[45px] text-turquoise-light text-left";
   const subTitleClasses = "font-bold text-sm leading-5 md:leading-[30px] md:text-xl text-black text-left";
   const descriptionClasses = "font-normal text-sm leading-5 md:text-base  text-black text-left";
   const dateClasses = "font-normal text-sm leading-5 text-gray md:text-base text-left";
   const textClasses = "flex flex-col w-fit gap-2.5 justify-start";

  return (
    <a {...props} className={baseClasses} href={props.href} target="_blank">
      { image && <img  className={imageClasses} src={image} alt={"картинка новости"} />}
      <div className={textClasses}>
        <h5 className={titleClasses}>{title}</h5>
        { subTitle && <p className={subTitleClasses}>{subTitle}</p>}
        {description && <p className={descriptionClasses}>{description}</p>}
        <p className={dateClasses}>{date}</p>
      </div>
    </a>
  );
};
export default NewsCard;
