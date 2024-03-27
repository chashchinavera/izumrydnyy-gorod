import React from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface typeSwiperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    pictureArray:  PicArray;
    breakpoints: SwiperBreakPoints[];
    zoomSelected: true | false;
    infinite: true | false;
    page: "home" | "news";
}
export interface SwiperBreakPoints {
    width: number;
    quantity: number;
    naturalSlideWidth: number;
    naturalSlideHeight: number;
    dragEnabled?: boolean;
}



export interface PicProp 
    {
        url: string;
        name: string;
        description?: string;
        advancedDescription?: string;
        date?: string
        altPic: string;
    }
 export type PicArray = PicProp[
        
 ]