import React from "react";
import Button from "@/src/shared/ui/Button/Button";

const Page: React.FC = () => {
  return (
    <div className='flex flex-col xl:max-w-[800px] max-w-[375px] xl:box-content xl:gap-[40px] gap-[30px] xl:px-10 px-[15px] xl:mt-[80px] mt-[60px] xl:mb-[80px] mb-[60px] mx-auto'>
      <h1 className='text-turquoise-light xl:text-[40px] text-[22px] text-center font-bold'>
        Контакты
      </h1>
      <p className="xl:text-[16px] text-[14px]">
        Социально-трудовые услуги оказываются в помещении инклюзивных мастерских,
        предоставленном организации в безвозмездное пользование на 3 года Департаментом труда
        и социальной защиты города Москвы, расположенном по адресу: г. Москва, ул. Енисейская,
        д. 10, отдельный вход со стороны ул. Енисейская, слева от арки. График работы мастерских —
        по будням с 12.30 до 18.00.
      </p>
      <Button 
        variant="primary-2"
        arrowColor="default"
        withArrow={false}
        sizeArrow="secondary"
        className="text-white justify-center font-bold text-[14px] xl:text-[20px] xl:w-[800px] w-[345px]"
      >
        Получить консультацию
      </Button>
      <div className="grid xl:grid-cols-[267px_523px] grid-cols-1 gap-[10px] xl:gap-x-[10px] xl:gap-y-[40px]">
        <h2 className="font-medium xl:text-[18px] text-[14px] mb-">
          Юридический адрес:
        </h2>
        <p className="mb-[20px] xl:text-[16px] text-[14px]">
          117593, г. Москва, Новоясеневский пр-т, дом 25/20
        </p>
        <h2 className="font-medium xl:text-[18px] text-[14px]">
          Полное наименование:
        </h2>
        <p className="mb-[20px] xl:text-[16px] text-[14px]">
          Региональная благотворительная общественная 
          организация инвалидов «Центр адаптации и развития 
          «Изумрудный город»
        </p>
        <h2 className="font-medium xl:text-[18px] text-[14px]">
          Контактный телефон:
        </h2>
        <p className="mb-[20px] xl:text-[16px] text-[14px]">
          По вопросам участия в проектах трудовой занятости, 
          <br/>
          размещения заказов в «Маленькой типографии» и 
          <br/>
          мастерской «Дом трав»: +7 916 155-96-91 — Анна Гришина
          <br/>
          По вопросам участия проекте «Волонтёрство для всех»:
          <br/>
          +7 916 147-63-84 — Анастасия Кормакова
          <br/><br/>
          Для знакомства с организацией и составления 
          <br/>
          индивидуального реабилитационного маршрута:
          <br/>
          +7 905 704-36-40 Аня Ярмушевская, психолог
        </p>
        <h2 className="font-medium xl:text-[18px] text-[14px]">
          Эл. почта:
        </h2>
        <p className="mb-[20px] xl:text-[16px] text-[14px]">
          izumrudnygorod@inbox.ru
        </p>
        <h2 className="font-medium xl:text-[18px] text-[14px]">
          Реквизиты:
        </h2>
        <p className="xl:text-[16px] text-[14px]">
          РБООИ «ИЗУМРУДНЫЙ ГОРОД»
          <br/>
          Номер счета: 40703810038000009367
          <br/>
          Банк: ПАО СБЕРБАНК
          <br/>
          БИК: 044525225
          <br/>
          Кор. Cчет: 30101810400000000225
          <br/>
          ОГРН: 1187700006845
          <br/>
          ИНН: 7728425668
          <br/>
          КПП: 772801001
        </p>
      </div>
  </div>
  )
}

export default Page;