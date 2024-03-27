import Image, { StaticImageData } from "next/image";
import React from "react";

interface Partner {
  imageUrl: StaticImageData;
  name: string;
}

interface PartnerListProps {
  partnerList: Partner[];
}

const PartnerList: React.FC<PartnerListProps> = ({ partnerList }) => {
  return (
    <div className="relative mx-0">
      <h2 className="font-montserrat text-[22px] md:text-[40px] font-bold leading-8 text-center text-turquoise-light">
        Партнёры
      </h2>
      <div className="grid gap-x-10 gap-y-7 md:gap-x-[60px] md:gap-y-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-6 mx-4 mt-[30px] md:mt-[60px] md:mx-11">
        {partnerList.map((partner, index) => (
          <div
            key={index}
            className="w-ful col-span-1 p-0 flex items-center justify-center"
          >
            <Image
              src={partner.imageUrl}
              alt={partner.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
