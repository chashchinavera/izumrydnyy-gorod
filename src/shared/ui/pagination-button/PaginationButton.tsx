import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';


interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    children: ReactNode;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
    isActive,
    className,
    children = 1,
    ...rest
}) => {

    const BaseClasses = 'w-[40px] h-[40px] rounded-[10px] lg:w-[57px] lg:h-[57px] lg:rounded-[20px]';

    const IsActiveButtonClasses =
        isActive === true
            ? 'bg-turquoise-light hover:cursor-default text-white'
            : 'bg-white border-[1px] border-black hover:bg-blue-light lg:bg-white lg:border-[1px] lg:border-black lg:hover:bg-blue-light';

    const PaginationButtonClasses = classNames(
        'self-center',
        BaseClasses,
        IsActiveButtonClasses,
        className
    );

    return (
        <button className={PaginationButtonClasses} {...rest}>
            {children}
        </button>
    );
};

export default PaginationButton;