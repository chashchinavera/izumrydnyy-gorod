"use client";

import React, { useState } from "react";
import Image from "next/image";
import newsData from "@/src/app/configs/novosti.config";
import PaginationButton from "@/src/shared/ui/pagination-button/PaginationButton";
import Link from "next/link";
import { News } from "@/src/app/configs/novosti.config";

const News: React.FC = () => {
  const maxNewsOnPage = 6;
  const numberOfPages = Math.ceil(newsData.length / maxNewsOnPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const handleClickPaginationButton = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <>
      <section className="px-[15px] py-[60px] xl:hidden">
        <h1 className="text-center font-bold text-[22px] leading-[150%] text-turquoise-light mb-[30px]">
          Новости
        </h1>

        <div className="flex flex-col gap-[60px] mb-[60px]">
          {newsData
            .slice(
              (currentPage - 1) * maxNewsOnPage,
              currentPage * maxNewsOnPage
            )
            .map((item, index) => {
              return (
                <article
                  className={`flex flex-col ${
                    selectedNews && selectedNews.id === item.id
                      ? ""
                      : "hover:opacity-80 cursor-pointer"
                  }`}
                  key={index + 1}
                  onClick={() => {
                    setSelectedNews(item);
                  }}
                >
                  {selectedNews && selectedNews.id === item.id ? (
                    <>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={selectedNews.image}
                        alt="Картинка новости"
                        className="mb-[20px]"
                      />
                      <h2 className="font-bold text-[18px] text-turquoise-light mb-[10px]">
                        {selectedNews.title}
                      </h2>
                      <p className="font-bold text-[14px] mb-[20px]">
                        {selectedNews.subtitle}
                      </p>
                      <div className="flex flex-col gap-[20px] text-[14px] font-normal leading-[150%]">
                        <p>{selectedNews.fullnews.text1}</p>
                        <p>{selectedNews.fullnews.text2}</p>
                        <p>{selectedNews.fullnews.text3}</p>
                        <p>{selectedNews.fullnews.text4}</p>
                        <p>{selectedNews.fullnews.text5}</p>
                        <p className="px-[30px] py-[20px] rounded-[40px] bg-blue-light">
                          {selectedNews.fullnews.greenText}
                        </p>
                        <p className="blue-gray">{item.date}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={item.image}
                        alt="Картинка новости"
                        className="mb-[20px]"
                      />
                      <div className="flex flex-col gap-[10px] text-[14px] font-normal leading-[150%]">
                        <h2 className="font-bold text-[18px] text-[#007084]">
                          {item.title}
                        </h2>
                        <p className="font-bold text-[14px]">{item.subtitle}</p>
                        <p className="line-clamp-4">{item.text}</p>
                        <p className="blue-gray">{item.date}</p>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
        </div>
        <div className="flex gap-[10px] justify-center">
          {Array.from(Array(numberOfPages)).map((_, index) => (
            <PaginationButton
              isActive={index + 1 === currentPage}
              key={index + 1}
              onClick={() => {
                handleClickPaginationButton(index + 1);
              }}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </div>
      </section>

      <section className="hidden xl:block xl:px-[30px] 2xl:px-[130px] pt-[40px] pb-[80px]">
        <h1 className="text-center font-bold text-[40px] leading-[150%] text-[#007084] mb-[40px]">
          Новости
        </h1>

        <div className="flex justify-around flex-wrap mb-[80px]">
          {newsData
            .slice(
              (currentPage - 1) * maxNewsOnPage,
              currentPage * maxNewsOnPage
            )
            .map((item, index) => {
              return (
                <Link
                  className="w-[31.69%] mb-[40px] flex hover:opacity-80"
                  href={`http://localhost:3000/novosti/${item.id}`}
                  key={index + 1}
                >
                  <article className="flex flex-col">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "526px", height: "429px" }}
                      src={item.image}
                      alt="Картинка новости"
                      className="mb-[30px] object-cover rounded-[20px]"
                    />
                    <div className="flex flex-col gap-[10px] text-[16px] font-normal leading-[150%] justify-between mb-[10px]">
                      <h2 className="font-bold text-[30px] text-[#007084] mb-[15px]">
                        {item.title}
                      </h2>
                      {item.subtitle && (
                        <p className="font-bold text-[20px]">{item.subtitle}</p>
                      )}
                      <p className="line-clamp-4">{item.text}</p>
                    </div>
                    <p className="blue-gray mt-auto">{item.date}</p>
                  </article>
                </Link>
              );
            })}
        </div>
        <div className="flex gap-[10px] justify-center">
          {Array.from(Array(numberOfPages)).map((_, index) => (
            <PaginationButton
              isActive={index + 1 === currentPage}
              key={index + 1}
              onClick={() => {
                handleClickPaginationButton(index + 1);
              }}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
