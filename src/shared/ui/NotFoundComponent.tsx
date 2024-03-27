/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import arrowWhite from '@/src/shared/images/404Page/ArrowWhite.png';
import arrowBlue from '@/src/shared/images/404Page/ArrowBlue.png';
import human52 from '@/src/shared/images/404Page/Human52.png';

export interface INotFoundProps {
  title: string;
  description: string;
  linkMain: {
    url: string;
    title: string;
  };
  linkHelp: {
    url: string;
    title: string;
  };
}

const NotFoundComponent: FC<INotFoundProps> = ({ title, description, linkMain, linkHelp }) => {
  return (
    <section className='flex flex-col items-center relative w-full pb-[50px] sm:px-[10px] xl:flex-row xl:static xl:justify-center xl:pb-[0]'>
      <div className='flex flex-col items-center justify-center xl:translate-x-[50px]'>
        <span
          className='font-montserrat text-[120px] not-italic leading-[200px] select-none text-blue-medium -translate-x-[30px] 
          sm:text-[250px] sm:leading-[250px] sm:-translate-x-[50px]
          xl:text-[300px] xl:leading-[300px] xl:-translate-x-[0] xl:font-extrabold
          2xl:text-[400px] 2xl:leading-[400px] 2xl:-translate-y-[30px]
          '>
          404
        </span>
        <div className='flex flex-col px-[20px] z-[1] xl:flex-row 2xl:gap-x-[60px] 2xl:px-[0]'>
          <div className='mt-[30px] xl:max-w-[350px] 2xl:max-w-[450px]'>
            <h2
              className='text-turquoise-light font-montserrat font-bold not-italic text-[18px] leading-[27px] 
              sm:text-[24px] sm:leading-[36px]
              2xl:text-[40px] 2xl:leading-[60px]
              '>
              {title}
            </h2>
            <span
              className='font-montserrat font-bold not-italic text-[16px] leading-[24px] 
              sm:text-[21px] sm:leading-[32px] 
              lg:block lg:max-w-[500px]
              2xl:text-[20px] 2xl:leading-[30px]
              '>
              {description}
            </span>
          </div>
          <div className='flex flex-col gap-[20px] mt-[35px] xl:w-[360px]'>
            <Link href={linkHelp.url}>
              <button className='flex w-full bg-turquoise-light h-[50px] items-center font-bold rounded-[1000px] px-[20px] justify-between sm:px-[30px]'>
                <span className='font-montserrat text-[16px] leading-[24px] text-white xl:text-[20px] xl:leading-[30px]'>
                  {linkHelp.title}
                </span>
                <Image
                  src={arrowWhite}
                  alt='404'
                  width={41}
                  height={16}
                />
              </button>
            </Link>
            <Link href={linkMain.url}>
              <button className='flex w-full h-[50px] border-2 border-turquoise-light items-center font-bold rounded-[1000px] px-[20px] justify-between sm:px-[30px]'>
                <span className='font-montserrat text-[16px] leading-[24px] text-turquoise-light xl:text-[20px] xl:leading-[30px]'>
                  {linkMain.title}
                </span>
                <Image
                  src={arrowBlue}
                  alt='404'
                  width={41}
                  height={16}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className='absolute max-w-[100px] translate-x-[100px] translate-y-[30px]
          sm:max-w-[200px] sm:translate-x-[200px] sm:translate-y-[0]
          xl:static xl:max-w-[540px] xl:translate-y-[0] xl:translate-x-[0]
          '
        src={human52}
        alt='ЧеловечекNotFound'
        width={540}
        height={737}
      />
    </section>
  );
};

export default NotFoundComponent;
