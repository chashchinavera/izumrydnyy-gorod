
const baseUrl: string = "/files-pdf/socialnoe-obsluzhivanie";

interface ButtonInfo {
  title: string;
  path: string;
}

export type ButtonsInfo = ButtonInfo[];

export const buttonsInfo: ButtonsInfo = [
  {
    title: "Перечень социальных услуг и тарифы",
    path: `${baseUrl}/perechecn-socialnih-uslug-i-tarifi.pdf`,
  },
  {
    title: "Правила внутреннего распорядка",
    path: `${baseUrl}/pravila-vnutrennego-rasporyadka.pdf`,
  },
  {
    title: "Информация о количестве мест",
    path: `${baseUrl}/informaciya-o-kolichestve-mest.pdf`,
  },
  {
    title: "Порядок предоставления социальных услуг в полустационарной форме",
    path: `${baseUrl}/poryadok-predostavleniya-socialnih-uslug-v-polustacionarnoi-forme.pdf`,
  },
];