import React from "react";
import Button from "../Button/Button";
import { projectsData } from "@/src/app/configs/our-projects.config";

interface OurProject {
  title: string;
  highlight?: string;
  description?: string;
  link: string;
}

interface OurProjectsListProps {
  projectsList: OurProject[];
}

const OurProjects: React.FC<OurProjectsListProps> = () => {
  return (
    <div>
      <h2 className="font-bold text-[22px] md:text-[40px] leading-[33px] md:leading-[60px] text-center text-turquoise-light mb-[30px] md:mb-[60px]">Наши проекты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[600fr_600fr_400fr] auto-rows-min gap-[20px] md:gap-y-[30px] xl:gap-[25px]">
        {projectsData.map((project, index) => (
          // Первый элемент массива
          index === 0 ? <div key={index} className="flex flex-col md:col-span-2 xl:col-span-1 justify-between rounded-[20px] 
          bg-blue-light bg-right-bottom bg-no-repeat
          bg-human0 md:bg-human21 xl:bg-human1
          pt-[21px] md:pt-[40px]
          pl-[20px] md:pl-[40px]
          pb-[20px] md:pb-[40px] xl:pb-[37px]">
            <p className="font-bold text-[18px] md:text-[30px] leading-[27px] md:leading-[45px] text-turquoise-dark mb-[6px] md:max-w-[320px]">{project.title}</p>
            <p className="font-normal italic text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-turquoise-dark mb-[18px] md:mb-[37px] md:max-w-[320px]">{project.description}</p>
            <a href={project.link}>
              <Button
                variant="regular-1"
                arrowColor="secondary"
                withArrow={true}
                sizeArrow="primary"
                className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[320px] w-[100%] justify-center"
              >
                Подробнее
              </Button>
            </a>
          </div> :
            // Второй элемент массива
            index === 1 ? <div key={index} className="flex flex-col md:col-span-2 xl:col-span-1 justify-between rounded-[20px] 
            bg-blue-light bg-right-bottom bg-no-repeat 
            bg-human0 md:bg-human22 xl:bg-human2
            pt-[21px] md:pt-[40px]
            pl-[20px] md:pl-[40px]
            pb-[20px] md:pb-[37px]">
            <p className="font-bold text-[18px] md:text-[30px] leading-[27px] md:leading-[45px] text-turquoise-dark mb-[6px] md:max-w-[320px]">{project.title}</p>
            <p className="font-normal italic text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-turquoise-dark mb-[18px] md:mb-[37px] md:max-w-[320px]">{project.description}</p>
            <a href={project.link}>
              <Button
                variant="regular-1"
                arrowColor="secondary"
                withArrow={true}
                sizeArrow="primary"
                className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[320px] w-[100%] justify-center"
              >
                Подробнее
              </Button>
            </a>
            </div> :
              // Третий элемент массива
              index === 2 ? <div key={index} className="flex flex-col md:col-span-2 xl:col-span-2 xl:row-span-2 xl:order-3 justify-between rounded-[20px] 
              bg-blue-light bg-right-bottom bg-no-repeat xl:bg-human4
              pt-[21px] md:pt-[40px] xl:pt-[39px]
              pl-[20px] md:pl-[40px]
              pb-[20px] md:pb-[40px] xl:pb-[36px]">
              <p className="font-bold text-[18px] md:text-[30px] leading-[27px] md:leading-[45px] text-turquoise-dark mb-[5px] md:mb-[12px] xl:mb-[15px] md:max-w-[617px]">{project.title}</p>
              <p className="font-normal italic text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-turquoise-dark mb-[5px] md:mb-[7px] xl:mb-[17px] md:max-w-[617px]">{project.description}</p>
              <p className="font-bold text-[14px] md:text-[20px] leading-[21px] md:leading-[30px] text-turquoise-dark mb-[20px] md:mb-[17px] xl:mb-[80px] md:max-w-[617px]">{project.highlight}</p>
              <a href={project.link}>
                <Button
                  variant="regular-1"
                  arrowColor="secondary"
                  withArrow={true}
                  sizeArrow="primary"
                  className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[320px] w-[100%] justify-center"
                >
                  Подробнее
                </Button>
              </a>
              </div> :
                // Четвертый элемент массива
                index === 3 ? <div key={index} className="flex flex-col md:flex-row xl:flex-col md:col-span-2 xl:col-span-1 xl:order-2 justify-between md:justify-normal rounded-[20px] 
                bg-blue-light
                pt-[20px] md:pt-[40px]
                pl-[20px] md:pl-[40px]
                pb-[19px] md:pb-[40px]
                xl:pr-[10px]">
                <p className="font-bold text-[18px] md:text-[30px] leading-[27px] md:leading-[45px] text-turquoise-dark mb-[9px] md:mb-[0px] xl:mb-[45px] md:max-w-[320px]">{project.title}</p>
                <a href={project.link}>
                  <Button
                    variant="regular-1"
                    arrowColor="secondary"
                    withArrow={true}
                    sizeArrow="primary"
                    className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[244px] w-[100%] justify-center
                    md:mt-[18px] md:ml-[6px]"
                  >
                    Подробнее
                  </Button>
                </a>
                </div> :
                  // Пятый элемент массива
                  index === 4 ? <div key={index} className="flex flex-col xl:order-5 justify-between rounded-[20px] bg-blue-light
                  pt-[22px] md:pt-[40px]
                  pl-[20px] md:pl-[40px]
                  pb-[19px] md:pb-[40px]
                  xl:pr-[10px]">
                  <p className="font-bold text-[18px] md:text-[25px] leading-[27px] md:leading-[37.5px] text-turquoise-dark mb-[9px] md:mb-[54px] xl:mb-[0px]">{project.title}</p>
                  <a href={project.link}>
                    <Button
                      variant="regular-1"
                      arrowColor="secondary"
                      withArrow={true}
                      sizeArrow="primary"
                      className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[244px] w-[100%] justify-center"
                    >
                      Подробнее
                    </Button>
                  </a>
                  </div> :
                    // Шестой элемент массива
                    <div key={index} className="flex flex-col xl:order-6 justify-between rounded-[20px] bg-blue-light 
                    pt-[22px] md:pt-[40px]
                    pl-[20px] md:pl-[40px]
                    pb-[19px] md:pb-[40px]
                    xl:pr-[10px]">
                    <p className="font-bold text-[18px] md:text-[25px] leading-[27px] md:leading-[37.5px] text-turquoise-dark mb-[9px] md:mb-[17px] xl:mb-[0px]">{project.title}</p>
                    <a href={project.link}>
                      <Button
                        variant="regular-1"
                        arrowColor="secondary"
                        withArrow={true}
                        sizeArrow="primary"
                        className="bg-white text-turquoise-light font-bold text-[14px] md:text-[20px] leading-[17px] md:leading-[30px] max-w-[305px] md:max-w-[244px] w-[100%] justify-center"
                      >
                        Подробнее
                      </Button>
                    </a>
                    </div>
        ))}
      </div>
      <a href="#" className="flex md:hidden xl:flex xl:flex-row xl:justify-end xl:mt-[27px] w-[px]">
        <Button
          variant="regular-2"
          arrowColor="secondary"
          withArrow={true}
          sizeArrow="primary"
          className="w-[100%] xl:max-w-[393px] bg-white text-turquoise-light mt-[30px] mb-[20px] xl:mb-[0px] 
          text-[14px] xl:text-[20px] leading-[17px] xl:leading-[30px] font-bold justify-center">
          Посмотреть все проекты
        </Button>
      </a>
    </div>
  );
};

export default OurProjects;
