"use client";

import React, { useState } from "react";
import newsData from "@/src/app/configs/novosti.config";
import { News } from "@/src/app/configs/novosti.config";
import Image from "next/image";
import SwipeButton from "@/src/shared/ui/swipe-button/SwipeButton";
import PaginationButton from "@/src/shared/ui/pagination-button/PaginationButton";
import Link from "next/link";

interface PageProps {
  params: {
    newsId: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const maxNewsOnPage = 3;
  const numberOfPages = Math.ceil(newsData.length / maxNewsOnPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClickPaginationButton = (index: number) => {
    setCurrentPage(index);
  };

  const news: News | undefined = newsData.find(
    (item) => item.id === params.newsId
  );

  const newsWithoutSelection = newsData.filter(
    (news) => params.newsId !== news.id
  );

  const backToPreviousPage = () => {
    window.history.back();
  };

  return (
    news && (
      <section className="px-[130px] pt-[40px] mb-[80px]">
        <div className="flex gap-[40px]">
          <div className="w-[48.19%]">
            <button
              className="flex gap-[10px] mb-[10px] hover:opacity-80"
              onClick={backToPreviousPage}
            >
              <svg
                className="w-6 h-6 text-black dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span className="text-[16px] leading-[150%] font-normal">
                Назад
              </span>
            </button>

            <h1 className="text-[30px] leading-[150%] font-bold text-[#007084] mb-[10px]">
              {news.title}
            </h1>

            <h2 className="text-[20px] leading-[150%] font-bold mb-[30px]">
              {news.subtitle}
            </h2>

            <div className="flex flex-col gap-[20px] text-[16px] leading-[150%] font-normal">
              <p>{news.fullnews.text1}</p>
              <p>{news.fullnews.text2}</p>
              <p>{news.fullnews.text3}</p>
              <p>{news.fullnews.text4}</p>
              <p>{news.fullnews.text5}</p>
              <p className="px-[50px] py-[20px] rounded-[1000px] bg-blue-light">
                {news.fullnews.greenText}
              </p>
              <p className="mt-10px">{news.date}</p>
            </div>
          </div>
          <div className="w-[49.4%] max-h-[1000px] flex">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              className="rounded-[20px] object-cover"
              src={news.image}
              alt="Картинка новости"
            />
          </div>
        </div>

        <div className="my-[80px] flex gap-[40px] justify-center">
          <SwipeButton
            disabled={1 === currentPage}
            direction="left"
            className={`self-center ${
              1 !== currentPage ? "" : "cursor-not-allowed opacity-50"
            }`}
            onClick={() => {
              handleClickPaginationButton(currentPage - 1);
            }}
          />

          {newsWithoutSelection
            .slice(
              (currentPage - 1) * maxNewsOnPage,
              currentPage * maxNewsOnPage
            )
            .map((item, index) => {
              return (
                <Link
                  href={`http://localhost:3000/novosti/${item.id}`}
                  key={index}
                  className="w-[27.29%] flex hover:opacity-80"
                >
                  <article className="flex flex-col">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src={item.image}
                      alt="Картинка новости"
                      className="mb-[30px]"
                    />
                    <div className="font-normal text-[16px] leading-[150%] flex flex-col gap-[10px]">
                      <h2 className="text-[30px] font-bold text-[#007084]">
                        {item.title}
                      </h2>
                      {item.subtitle && (
                        <h3 className="text-[20px] font-bold">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="line-clamp-3">{item.text}</p>
                    </div>
                    <p className="mt-auto pt-[10px]">{item.date}</p>
                  </article>
                </Link>
              );
            })}

          <SwipeButton
            disabled={numberOfPages === currentPage}
            direction="right"
            className={`self-center ${
              numberOfPages !== currentPage
                ? ""
                : "cursor-not-allowed opacity-50"
            }`}
            onClick={() => {
              handleClickPaginationButton(currentPage + 1);
            }}
          />
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
    )
  );
};

export default Page;
