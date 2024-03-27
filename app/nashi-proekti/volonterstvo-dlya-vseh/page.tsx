import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import volonterstvo1 from "@/public/images/volonterstvo-dlya-vseh/Volonterstvo1.png";
import volonterstvo2 from "@/public/images/volonterstvo-dlya-vseh/Volonterstvo2.png";

export const metadata: Metadata = {
    title: "Волонтёрство для всех",
};

const Page: React.FC = () => {
    return (
        <div className="py-[60px] xl:py-[80px] px-[15px] xl:px-[130px] text-[14px] xl:text-[16px] font-normal leading-[21px] xl:leading-[24px]">
            <h1 className="text-turquoise-light text-[22px] xl:text-[40px] leading-[33px] xl:leading-[60px] font-bold mb-[11px] text-center xl:mb-[16px]">
                Волонтёрство для всех
            </h1>
            <h2 className="italic text-[14px] xl:text-[16px] leading-[21px] xl:leading-[24px] font-normal text-center mb-[30px] xl:mb-[36px]">
                Помогая другим — помогаешь себе!
            </h2>
            <div className="flex flex-col xl:flex-row xl:justify-between text-[14px] xl:text-[16px] leading-[21px] xl:leading-[24px] font-normal xl:mb-[76px]">
                <div className="flex flex-col w-[100%] xl:w-[48.19%] ">
                    <p className="mb-[19px] xl:mb-[20px]">
                        Мы часто слышим слово «волонтёр» и&nbsp;задумываемся над вопросом: «А кто это?» Но&nbsp;не все знают точный ответ. Волонтёр — это&nbsp;доброволец,
                        который занимается общественно полезным делом безвозмездно, ничего не&nbsp;требуя взамен.
                    </p>
                    <p className="bg-blue-light rounded-[40px] xl:rounded-[1000px] text-turquoise-dark text-[14px] xl:text-[16px] leading-[21px] xl:leading-[24px] font-normal pt-[20px] xl:pt-[15px] pl-[30px] xl:pl-[55px] pb-[20px] xl:pb-[22px] pr-[20px] xl:pr-[120px] mb-[20px]">
                        Помогая людям, волонтёр и&nbsp;сам&nbsp;обретает душевное равновесие и&nbsp;покой. Общественная деятельность помогает почувствовать себя
                        необходимым и полезным для&nbsp;мира.
                    </p>
                    <p className="mb-[20px]">
                        Занимаясь волонтёрской деятельностью можно приобрести ценный опыт в&nbsp;различных сферах, специальные навыки и знания, установить
                        личные контакты. Часто волонтёрская деятельность — это путь к&nbsp;оплачиваемой работе, здесь всегда есть&nbsp;возможность проявить
                        и&nbsp;зарекомендовать себя с&nbsp;лучшей стороны, попробовать себя в&nbsp;разных сферах деятельности и&nbsp;определиться с&nbsp;выбором жизненного пути.
                    </p>
                    <p className="mb-[22px] xl:mb-[24px]">
                        Волонтёром может стать любой желающий! Проект «Волонтерство для&nbsp;всех» инклюзивный, а&nbsp;это значит, что, наряду с&nbsp;обычными
                        волонтёрами, в&nbsp;нем принимают участие волонтёры с&nbsp;ментальными особенностями и душевными заболеваниями. Мы всегда поможем подобрать
                        посильную вам работу. В&nbsp;настоящее время волонтёры РБООИ «Изумрудный город» принимают участие в&nbsp;различных активностях:
                    </p>
                    <ol className="pl-[23px] mb-[18px] xl:mb-[20px]">
                        <li className="list-decimal">Посещение отделений милосердия ПНИ. Волонтёры гуляют с&nbsp;девушками из&nbsp;отделения милосердия, рисуют с&nbsp;ними на&nbsp;картоне,
                            из&nbsp;которого потом сотрудники «Маленькой типографии» изготавливают обложки для&nbsp;блокнотов. После реализации блокнотов
                            девушки из&nbsp;отделения милосердия получают оплату и вместе с&nbsp;волонтёрами ходят в&nbsp;ТЦ — учатся тратить заработанные деньги.</li>
                        <li className="list-decimal">Волонтёрские уборки лесопарковых зон&nbsp;Москвы (с&nbsp;апреля по&nbsp;ноябрь).</li>
                        <li className="list-decimal">Индивидуальная помощь (общение, прогулки, помощь с&nbsp;уборкой) людям с&nbsp;ментальными особенностями и&nbsp;душевными заболеваниями,
                            находящимся в&nbsp;трудной жизненной ситуации.</li>
                        <li className="list-decimal">Участие в&nbsp;мероприятиях дружественных фондов.</li>
                    </ol>
                    <div className="flex flex-col xl:flex-row xl:justify-between text-center mb-[30px] xl:mb-0">
                        <div className="bg-blue-light rounded-[40px] xl:rounded-[1000px] font-bold xl:font-normal w-[100%] xl:w-[48.75%] p-[20px] mb-[10px] xl:mb-0">
                            <p>Надежда Степунина</p>
                            <p>+7 915 058-94-26</p>
                            <p>step_an@mail.ru</p>
                        </div>
                        <div className="bg-blue-light rounded-[40px] xl:rounded-[1000px] font-bold xl:font-normal w-[100%] xl:w-[48.75%] p-[20px]">
                            <p>Анастасия Кормакова</p>
                            <p>+7 916 147-63-84</p>
                            <p>nastiakormakova@mail.ru</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] xl:w-[49.4%]">
                    <Image
                        src={volonterstvo1}
                        alt="Картинка раздела волонтерство для всех"
                        className="mb-[30px] xl:mb-[20px] h-[200px] xl:h-[430px] rounded-[20px] xl:rounded-0 xl:mt-[1px]"
                    />
                    <Image
                        src={volonterstvo2}
                        alt="Картинка раздела волонтерство для всех"
                        className="h-[200px] xl:h-[430px] rounded-[20px] xl:rounded-0"
                    />
                </div>
            </div>
            <div className="hidden justify-center xl:flex">
                <p className="w-[43.13%] bg-blue-light rounded-[1000px] text-turquoise-dark text-[18px] leading-[27px] font-medium text-center p-[22px]">
                    Чтобы стать волонтёром Изумрудного города, заполните <Link href="#" className="font-bold underline decoration-solid">анкету</Link>
                </p>
            </div>
        </div>
    )
}

export default Page;