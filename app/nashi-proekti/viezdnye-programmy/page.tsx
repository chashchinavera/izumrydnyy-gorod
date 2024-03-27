import React from 'react'
import Link from 'next/link';
import { viezdnyeProgrammyInfo } from '../../../src/app/configs/viezdnye-programmy.config'
import ButtonTab from '@/src/shared/ui/button-tab/ButtonTab';

const Page: React.FC = () => {
  return (
    <section className='my-[80px]'>
      <h1 className='text-turquoise-light mb-[40px] xl:text-[40px] text-[22px] text-center font-bold'>
        Выездные программы
      </h1>
      <div className="flex flex-col m-auto w-[800px] gap-[20px]">
        {viezdnyeProgrammyInfo.map((item, id) => {
            const {title, path} = item
            return (
              <Link key={id} href={path}>
                <ButtonTab
                  className="font-medium xl:text-[18px] xl:leading-[27px]"
                  text={title}
                  size="big"
                  textAlign="text-left"
                  clicked={false}
                />
              </Link>
            );
        })}
      </div>
    </section>
  )
}

export default Page;