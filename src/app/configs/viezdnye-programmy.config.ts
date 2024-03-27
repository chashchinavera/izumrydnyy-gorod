interface ViezdnyeProgrammyInfo {
  title: string;
  path: string;
};

const baseUrl: string = "/nashi-proekti/viezdnye-programmy";

export type ViezdnyeProgrammyInfoArray = ViezdnyeProgrammyInfo[];

export const viezdnyeProgrammyInfo: ViezdnyeProgrammyInfoArray = [
  {
    title: "2009 год",
    path: `${baseUrl}/2009`,
  },
  {
    title: "2015 год",
    path: `${baseUrl}/2015`,
  },
  {
    title: "Декабрь 2016",
    path: `${baseUrl}/12_2016`,
  },
  {
    title: "Лето 2016",
    path: `${baseUrl}/06-08_2016`,
  },
];