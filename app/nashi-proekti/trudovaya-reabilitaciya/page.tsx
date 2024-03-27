import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import socialnieTreneri1 from "@/public/images/trudovaya-reabilitaciya-page/socialnie-treneri-1.png";
import socialnieTreneri2 from "@/public/images/trudovaya-reabilitaciya-page/socialnie-treneri-2.png";
import tipographiya1 from "@/public/images/trudovaya-reabilitaciya-page/malenkaya-tipographiya-1.png";
import tipographiya2 from "@/public/images/trudovaya-reabilitaciya-page/malenkaya-tipographiya-2.png";
import kurieri from "@/public/images/trudovaya-reabilitaciya-page/kurieri-dlya-svoih-1.png";
import domTrav1 from "@/public/images/trudovaya-reabilitaciya-page/dom-trav-1.png";
import domTrav2 from "@/public/images/trudovaya-reabilitaciya-page/dom-trav-2.png";

export const metadata: Metadata = {
  title: "Трудовая реабилитация",
};

const Page: React.FC = () => {
  return (
    <div className="py-[60px] xl:py-[80px] px-[15px] xl:px-[130px] text-[14px] xl:text-[16px] font-normal leading-[21px] xl:leading-[24px]">
      <h1 className="text-turquoise-light text-[22px] xl:text-[40px] leading-[33px] xl:leading-[60px] font-bold mb-[30px] xl:text-center xl:mb-[60px]">
        Трудовая реабилитация
      </h1>
      <div className="flex flex-col mb-[60px]">
        <div className="flex gap-[57px]">
          <Image
            src={socialnieTreneri1}
            alt="Картинка Социальные тренеры"
            className="hidden w-[22.47%] self-center xl:block"
          />
          <div className="flex flex-col xl:w-[48.19%] gap-5 xl:gap-[30px]">
            <h2 className="text-[18px] xl:text-[30px] xl:leading-[45px] leading-[27px] font-bold">
              Социальные тренеры
            </h2>
            <div className="flex flex-col gap-5">
              <p className="font-semibold xl:font-medium xl:text-[18px] xl:leading-[27px]">
                Многие социальные тренеры в наших проектах — бывшие клиенты
                организации. Это ребята, имеющие проблемы социальной адаптации
                и успешно их решающие.
              </p>
              <p>
                Те, кто на собственном опыте знают, каково это: быть одиноким
                и непонятым, беспомощным, зависимым, слабым, и как из этого
                выбираться. Тренеры «вырастают» из наших пациентов.
              </p>
            </div>
            <p className="px-[30px] py-[20px] xl:px-[40px] xl:py-[30px] text-turquoise-dark bg-blue-light rounded-[40px] xl:rounded-[1000px]">
              Социальное тренерство — работа. Оплачивается она довольно скромно,
              поэтому пользоваться услугами социального тренера могут даже люди
              с очень небольшим достатком.
            </p>
            <p className="">
              Подход — исключительно индивидуальный: удобные для подопечных
              время, место, частота встреч, актуальные задачи и непрерывный
              поиск наиболее эффективных способов работы с каждым человеком.
              Мы можем помочь ребятам, никогда не выходящим из дома, беспомощным
              и по‑настоящему одиноким. Это круто!
            </p>
            <div className="flex flex-col gap-5">
              <p className="font-semibold xl:font-medium xl:text-[18px] xl:leading-[27px]">
                Для самих тренеров эта работа — опора, стимул для внутреннего
                роста, решения собственных проблем, взросления. Возможность
                делать что‑то действительно полезное и интересное одновременно.
              </p>
              <p>
                Возможность быть частью классной команды, работать в удобном
                для себя режиме и получать зарплату (для кого‑то — первую
                в жизни). Тренерство может быть важным промежуточным этапом
                трудовой адаптации или определить призвание и будущую профессию.
              </p>
            </div>

            <p className="font-bold xl:text-[20px] xl:leading-[30px]">
              Если вам или Вашему ребёнку требуется помощь социальных тренеров,
              или вы хотели бы узнать об этом подробнее — пишите
              step_an@mail.ru.
            </p>
          </div>
          <Image
            src={socialnieTreneri2}
            alt="Картинка Социальные тренеры"
            className="hidden w-[22.47%] xl:block self-center"
          />
        </div>
      </div>

      <span className="block w-full h-[4px] bg-blue-medium mb-[60px]"></span>

      <div className="flex flex-col gap-5 mb-[60px]">
        <div className="flex gap-[57px]">
          <Image
            src={tipographiya1}
            alt="Картинка раздела маленькая типография"
            className="hidden w-[23.16%]  self-center xl:block"
          />
          <div className="flex flex-col xl:w-[49.67%] gap-5 xl:gap-[30px]">
            <h2 className="text-[18px] leading-[27px] font-bold xl:text-[30px] xl:leading-[45px]">
              Маленькая типография
            </h2>
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold xl:font-medium xl:text-[18px] xl:leading-[27px]">
                Предыстория
              </h3>
              <p className="italic">
                Идея типографии выросла из тренерского проекта. В наши
                тренерские задачи входит помощь в поиске работы для подопечных.
                Мы занялись устройством Саши П. (после должны были заняться
                другими ребятами). В течение года звонили, писали, создавали
                резюме. Обращались в общественные организации и фонды. И в итоге
                потерпели фиаско — ничего подходящего для Саши не оказалось.
                Тут мы поняли, что наткнулись на провал в системе
                трудоустройства инвалидов. Ситуация с Сашей надоумила заняться
                созданием рабочих местах для подопечных. Весной 2016 года
                мы организовали сбор средств на открытие мини-типографии,
                а уже в конце лета начали работать.
              </p>
            </div>

            <p className="px-[30px] py-[20px] xl:px-[40px] xl:py-[30px] text-turquoise-dark bg-blue-light rounded-[40px] xl:rounded-[1000px]">
              Типография — это проект для людей с ментальной инвалидностью,
              которых не берут на обычную работу. Здесь у них есть возможность
              заниматься трудом, преодолевать свои проблемы, быть включёнными
              в процесс.
            </p>
            <p>
              У типографии есть три основные задачи:<br/> Поддержка: занятость,
              наполненность жизни, ощущение, что ты полезен и день прожит
              не зря.<br/> Формирование трудовых навыков и трудовой дисциплины:
              работа с различным типографским оборудованием, навыки курьерской
              доставки, умение приезжать к назначенному времени, выполнять
              порученное, доводить начатое до конца, исправлять ошибки,
              устранять брак. <br/>Обучение работе в команде.
            </p>
            <p>
              Мастерская «Маленькая типография» сейчас располагается по адресу:
              г. Москва, ул. Енисейская, д. 10, отдельный вход со стороны
              ул. Енисейская, слева от арки, в помещении, выделенном нашей
              организации в безвозмездное пользование на 3 года от ДТСЗН
              г. Москвы. <br/>Мастерская оснащена всей необходимой техникой
              для цифровой печати (в том числе сублимационной, шелкографической)
              нарезки, брошюровки. В наличии также свободная библиотека
              и настольные игры для досуговой занятости.
            </p>
            <p className="font-bold xl:text-[20px] xl:leading-[30px]">
              Посещение клиентами типографии возможно только после собеседования
              с психологом.
            </p>
          </div>
          <Image
            src={tipographiya2}
            alt="Картинка раздела маленькая типография"
            className="hidden w-[23.16%]  self-center xl:block"
          />
        </div>
      </div>

      <span className="block w-full h-[4px] bg-blue-medium mb-[60px]"></span>

      <div className="flex flex-col gap-5 mb-[60px]">
        <div className="flex gap-[57px]">
          <Image
            src={kurieri}
            alt="Картинка раздела курьеры для сових"
            className="hidden w-[23.16%] self-center xl:block"
          />
          <div className="flex flex-col xl:w-[49.67%] gap-5 xl:gap-[30px]">
            <h2 className="text-[18px] leading-[27px] font-bold xl:text-[30px] xl:leading-[45px] xl:mb-2.5">
              Курьеры для своих
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                В нашей курьерской службе работают ребята с ментальной
                инвалидностью, мизерной пенсией и многолетним опытом социальной
                изоляции.
              </p>
              <p>
                Участники проекта — жители Москвы старше 18 лет с психическими
                расстройствами или ментальными особенностями, владеющих речевой
                коммуникацией и навыками самостоятельного передвижения по городу
                и нуждающихся в трудовой реабилитации.
              </p>
              <p>
                Этот проект направлен на активизацию и трудовую адаптацию
                работников. Мы предлагаем курьерам график с постепенным
                увеличением нагрузки, обучение и поддержку в процессе работы.
                После такого опыта шансов устроиться на работу на открытом рынке
                у работников становится больше.
              </p>
              <p>
                Доставка осуществляется за оплату самозанятым курьерам
                от физических лиц или по договору с РБООИ «Изумрудный город»
                по безналу для юридических лиц.
              </p>
            </div>

            <p className="px-[30px] py-[20px] xl:px-[40px] xl:py-[30px] text-center text-turquoise-dark bg-blue-light rounded-[40px] xl:rounded-[1000px]">
              Заказы принимаются по телефону +7 910 413-71-80 или через форму
              на сайте проекта с 10.00 до 20.00, на следующий день.
            </p>
            <p className="font-semibold xl:font-medium xl:text-[18px] xl:leading-[27px]">
              Мы НЕ возим: хрупкие предметы без надёжной упаковки (ребята
              пользуются общественным транспортом, в т.ч. в часы пик),
              химические вещества, сумки/коробки/конверты без возможности
              проверить содержимое (это вопрос безопасности курьеров и города).
              Максимальная материальная ответственность курьера — 3 000 ₽.<br/>Грузы
              весом более 5 кг возим по предварительной договорённости
              с курьером и с доплатой за перевес.
            </p>

            <div className="flex flex-col 2xl:flex-row 2xl:justify-center gap-2.5 2xl:gap-5 xl:text-[18px] xl:leading-[27px] font-bold xl:font-medium">
              <Link
                href="https://dostavka.izumrud.moscow/"
                className="px-[30px] py-[20px] xl:px-[50px] xl:py-[20px] xl:underline text-turquoise-dark bg-blue-light rounded-[1000px] text-center hover:opacity-80"
              >
                Сайт проекта
              </Link>

              <Link
                href="https://vk.com/club148176224"
                className="px-[30px] py-[20px] xl:px-[50px] xl:py-[20px] xl:underline text-turquoise-dark bg-blue-light rounded-[1000px] text-center hover:opacity-80"
              >
                Сайт проекта
              </Link>

              <Link
                href="https://m.facebook.com/kuriery"
                className="px-[30px] py-[20px] xl:px-[50px] xl:py-[20px] xl:underline text-turquoise-dark bg-blue-light rounded-[1000px] text-center hover:opacity-80"
              >
                Группа в фэйсбуке
              </Link>
            </div>

            <p className="font-bold xl:text-[20px] xl:leading-[30px]">
              Если вы хотите работать курьером, заполните анкету и с вами
              свяжется наш координатор.
            </p>
          </div>

          <Image
            src={kurieri}
            alt="Картинка раздела курьеры для сових"
            className="hidden w-[23.16%] self-center xl:block"
          />
        </div>
      </div>

      <span className="block w-full h-[4px] bg-blue-medium mb-[60px]"></span>

      <div className="flex flex-col gap-5">
        <div className="flex gap-[57px]">
          <Image
            src={domTrav1}
            alt="Картинка раздела дом трав"
            className="hidden w-[23.16%] self-center xl:block"
          />
          <div className="flex flex-col xl:w-[49.67%] gap-5 xl:gap-[30px]">
            <h2 className="text-[18px] leading-[27px] font-bold xl:text-[30px] xl:leading-[45px] xl:mb-2.5">
              Дом трав
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                Мастерская «Дом трав» — социальный проект трудовой занятости
                и трудоустройства для людей с ментальными особенностями, которым
                сложно найти работу на открытом рынке труда. Мы рады,
                что у нас они могут реализовать своё желание работать, общаться,
                приносить радость и пользу другим людям. Покупая наши товары,
                вы помогаете людям с ментальными проблемами жить полной жизнью.
                Это делает наше общество гуманнее.
              </p>
              <p>
                Мы изготавливаем флорентийское саше, бумагу ручного литья
                на основе трав и изделия из неё (конверты, открытки), ароматные
                свечи с травами, подсвечники.
              </p>
            </div>

            <p>
              Мастерская «Маленькая типография» сейчас располагается по адресу:
              г. Москва, ул. Енисейская, д. 10, отдельный вход со стороны
              ул. Енисейская, слева от арки, в помещении, выделенном нашей
              организации в безвозмездное пользование на 3 года от ДТСЗН
              г. Москвы. <br/>Мастерская оснащена всей необходимой техникой
              для цифровой печати (в том числе сублимационной, шелкографической)
              нарезки, брошюровки. В наличии также свободная библиотека
              и настольные игры для досуговой занятости.
            </p>
            <Link
              href="http://mastdomtrav.ru/"
              className="px-[30px] py-[20px] xl:px-[50px] xl:py-[20px] text-turquoise-dark bg-blue-light rounded-[40px] hover:opacity-80 xl:underline xl:w-[47.56%] xl:rounded-[1000px] self-center"
            >
              Более подробно с продукцией мастерской можно познакомиться
              на сайте проекта
            </Link>
            <p className="font-bold xl:text-[20px] xl:leading-[30px]">
              Посещение для участия в работе мастерской возможно только
              после собеседования с психологом.
            </p>
          </div>
          <Image
            src={domTrav2}
            alt="Картинка раздела дом трав"
            className="hidden w-[23.16%] self-center xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
