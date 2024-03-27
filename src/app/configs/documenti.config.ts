
const baseUrl: string = "/files-pdf/documents";

interface ButtonInfo {
  title: string;
  path: string;
} 

export type ButtonsInfo = ButtonInfo[];

export const buttonsInfo: ButtonsInfo = [
  {
    title: "Свидетельство о регистрации НКО",
    path: `${baseUrl}/svidetelstvo-o-registracii-nko.pdf`,
  },
  {
    title: "Устав организации",
    path: `${baseUrl}/ustav-organizacii.pdf`,
  },
  {
    title: "Свидетельство о постановке на учёт в налоговой",
    path: `${baseUrl}/svidetelstvo-o-postanovke-na-uchet-v-nalogovoi.pdf`,
  },
  {
    title: "Благотворительная программа",
    path: `${baseUrl}/blagotvoritelnaya-programma.pdf`,
  },
  {
    title: "Благотворительная программа «Помощь в период эпидемии Covid-2019»",
    path: `${baseUrl}/BP-pomosh-v-period-epidemii-covid-2019.pdf`,
  },
  {
    title: "Отчёты",
    path: `${baseUrl}/otcheti.pdf`,
  },
  {
    title: "Предписания надзорных органов»",
    path: `${baseUrl}/predpisaniya-nadzornih-organov.pdf`,
  },
];