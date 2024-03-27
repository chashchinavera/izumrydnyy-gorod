import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface SwipeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
  children?: ReactNode;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ 
  direction,
  className,
  children,
  ...rest 
}) => {
  const buttonClasses = classNames(
    'bg-white w-[70px] h-[70px] rounded-full hover:bg-blue-light border-[1px]',
    className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
      {direction === 'left' 
        ? <svg 
            className='m-auto'
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M20 26L10 16L20 6"
              stroke="#002A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        : <svg 
            className='m-auto'
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 6L22 16L12 26"
              stroke="#002A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      }
    </button>
  );
};

export default SwipeButton;