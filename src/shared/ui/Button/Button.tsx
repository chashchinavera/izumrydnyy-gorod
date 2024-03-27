import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "regular-1"
    | "regular-2"
    | "primary-1"
    | "primary-2"
    | "secondary-1"
    | "secondary-2";
  arrowColor?: "default" | "primary" | "secondary";
  sizeArrow?: "primary" | "secondary";
  withArrow: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "regular-1",
  arrowColor = "default",
  sizeArrow,
  withArrow = false,
  className,
  children,
  ...rest
}) => {
  const arrowColorClasses =
    arrowColor === "default"
      ? "fill-white"
      : arrowColor === "primary"
      ? "fill-red"
      : arrowColor === "secondary"
      ? "fill-turquoise-light"
      : "";

  const baseClasses =
    "flex px-[30px] py-[10px] rounded-[1000px] hover:opacity-80";

  const variantButtonClasses = {
    "regular-1": "border-2 border-solid gap-5",
    "regular-2": "border-2 border-solid gap-8",
    "primary-1": "bg-red gap-5",
    "primary-2": "bg-turquoise-light gap-5",
    "secondary-1": "bg-blue-dark1 py-5 px-0 justify-center",
    "secondary-2": "bg-turquoise-dark py-5 px-0 justify-center",
  };

  const buttonClasses = classNames(
    baseClasses,
    variantButtonClasses[variant],
    className,
    arrowColorClasses
  );

  const arrowClasses = classNames("self-center", arrowColorClasses);

  const variantSizeArrow =
    sizeArrow === "primary" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        className={arrowClasses}
      >
        <path
          d="M23.7071 8.20711C24.0976 7.81658 24.0976 7.18342 23.7071 6.79289L17.3431 0.428932C16.9526 0.0384078 16.3195 0.0384078 15.9289 0.428932C15.5384 0.819457 15.5384 1.45262 15.9289 1.84315L21.5858 7.5L15.9289 13.1569C15.5384 13.5474 15.5384 14.1805 15.9289 14.5711C16.3195 14.9616 16.9526 14.9616 17.3431 14.5711L23.7071 8.70711ZM0 8.5H23V6.5H0V8.5Z"
          fill="none"
          className={arrowClasses}
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="16"
        viewBox="0 0 41 16"
        fill="none"
        className={arrowClasses}
      >
        <path
          d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
          fill="none"
          className={arrowClasses}
        />
      </svg>
    );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
      {withArrow && variantSizeArrow}
    </button>
  );
};

export default Button;
