
const baseUrl: string = "/files-pdf/otcheti";

interface ButtonInfo {
  title: string;
  path: string;
}

export type ButtonsInfo = ButtonInfo[];

export const buttonsInfo: ButtonsInfo = [
  {
    title: "Отчёт 2022",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Содержательный отчёт 2021",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Бюджет и отчёт 2021",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Содержательный отчёт 2020 РБООИ Изумрудный город",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Смета и отчёт 2020 РБООИ Изумрудный город»",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Смета и отчёт 2019 РБООИ Изумрудный город",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Смета и отчёт 2018 РБООИ Изумрудный город»",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Бюджет 2018, 2021, 2022»",
    path: `${baseUrl}/otcheti.pdf`,
  },
];