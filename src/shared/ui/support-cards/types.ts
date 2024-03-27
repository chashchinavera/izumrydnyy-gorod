import { StaticImageData } from "next/image";

export interface SupportCardInfo {
  id: string;
  title: string;
  description: string;
  boldText?: string;
  image: StaticImageData;
  alt: string;
  donationGoal: number;
  collected: number;
}

export interface SupportCardsProps {
  cardsInfoList: SupportCardInfo[];
}
