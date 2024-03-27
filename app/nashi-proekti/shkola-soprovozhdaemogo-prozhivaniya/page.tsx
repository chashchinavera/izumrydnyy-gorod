import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import prozhivanie1 from '@/public/images/shkola-soprovozhdaemogo-prozhivaniya-page/prozhivanie-1.png'
import prozhivanie2 from '@/public/images/shkola-soprovozhdaemogo-prozhivaniya-page/prozhivanie-2.png'
import prozhivanie3 from '@/public/images/shkola-soprovozhdaemogo-prozhivaniya-page/prozhivanie-3.png'
import prozhivanie4 from '@/public/images/shkola-soprovozhdaemogo-prozhivaniya-page/prozhivanie-4.png'
import Tab from '@/src/shared/ui/Tab/Tab';

const Page: React.FC = () => {
  return (
    <div className='max-w-[1660px] box-content xl:px-10 px-[15px] xl:mt-[80px] mt-[60px] xl:mb-[80px] mb-[60px] mx-auto'>
      <h1 className='text-turquoise-light xl:text-[40px] text-[22px] xl:text-center text-left font-bold'>
        Школа сопровождаемого проживания
      </h1>
      <div className='flex flex-col xl:flex-row justify-center gap-[60px] xl:mt-[40px] mt-[30px]'>
        <div className='flex gap-[30px] xl:gap-[50px] flex-col'>
          <div className='width-[800px] flex flex-col gap-[10px]'>
            <h2 className='font-bold text-[14px] xl:text-[20px]'>
              Проект реализуется при поддержке Фонда Президентских грантов
            </h2>
            <p className='xl:text-[16px] text-[14px]'>
              Соорганизаторы: Центр лечебной педагогики «Особое детство», 
              <br/>
              Союз охраны психического здоровья
            </p>
            <p className='font-medium xl:text-[16px] text-[14px]'>
              Сроки проведения: май 2022 — декабрь 2023
            </p>
            <p className='xl:text-[16px] text-[14px]'>
              Участники: сопровождающе и организаторы сопровождаемого проживания
              <br/>
              для людей с ментальными особенностями в разных регионах
            </p>
          </div>
          <div className='flex xl:flex-row flex-col gap-[10px]'>
            <Tab
              text={'Занятия проходят 1 раз в месяц'}  
              size={'small'} 
              textAlign='text-left' 
              textStyle='font-normal' 
              className='xl:w-[395px] w-[345px]'
            />
            <Tab  
              text={'Школа бесплатная для участников'}  
              size={'small'} 
              textAlign='text-left' 
              textStyle='font-normal' 
              className='xl:w-[395px] w-[345px]'
            />
          </div>
          <div className='width-[800px] flex flex-col gap-[10px]'>
            <h2 className='font-bold text-[14px] xl:text-[20px]'>
              Мы приглашаем экспертов из разных профессиональных 
             <br/>
              НКО по вопросам организации сопровождаемого проживания.
            </h2>
            <p className='xl:text-[16px] text-[14px]'>
              В программе — этические, юридические, психологические и психиатрические аспекты 
              <br/>
              сопровождаемого проживания (в т.ч. поведение сопровождающих в кризисных ситуациях), 
              <br/>
              вопросы трудоустройства и оформления самозанятости для проживающих.
            </p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <Tab   
              size={'small'} 
              textAlign='text-left' 
              textStyle='font-normal' 
              className='xl:w-[800px] w-[345px] xl:px-[50px] px-[20px]'>
              <span>
                Анна Львовна Битова, председатель правления ЦЛП «Особое детство» рассказала
                про международный опыт в организации сопровождаемого проживания
              </span>
            </Tab> 
            <Tab   
              size={'small'} 
              textAlign='text-left' 
              textStyle='font-normal' 
              className='xl:w-[800px] w-[345px] xl:px-[50px] px-[20px]'>
              <span>
                Надежда Евгеньевна Степунина, директор РБООИ «Изумрудный город»
                рассказала про опыт организация квартир сопровождаемого проживания
              </span>
            </Tab> 
          </div>
          <div>
            <p className='font-bold xl:text-[20px] text-[14px]'>
              Для участия необходимо заполнить&nbsp;
              <Link 
                href="#" 
                className='text-turquoise-light xl:underline'
              >
                анкету.
              </Link>
            </p>
          </div>
        </div>
        <div className='grid xl:grid-cols-2 gap-[20px] width-[800px]'>
          <div className='xl:col-span-2 max-h-[255px]'>
            <Image
              src={prozhivanie1}
              alt="Группа людей обедает за столом"
              className="xl:w-[800px] xl:h-[255px] w-[345px] h-[200px] object-cover rounded-[20px]"
            />
          </div>
          <Image
            src={prozhivanie2}
            alt="Две девушки нарезают ткань"
            className="xl:w-[390px] xl:h-[255px] w-[345px] h-[200px] object-cover rounded-[20px]"
          />
          <Image
            src={prozhivanie3}
            alt="Два человека чистят картошку"
            className="xl:w-[390px] xl:h-[255px] w-[345px] h-[200px] object-cover rounded-[20px]"
          />
          <div className='xl:col-span-2 max-h-[255px]'>
            <Image
              src={prozhivanie4}
              alt="Мужчина собирает стеллаж"
              className="xl:w-[800px] xl:h-[255px] w-[345px] h-[200px] object-cover xl:object-[0_-100px] rounded-[20px]"
            />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Page;