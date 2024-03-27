import React from 'react';
import {ISocialNetsListProps} from "@/src/shared/ui/socialnets-list/types";
import Image from "next/image";


const SocialNetsList: React.FC<ISocialNetsListProps> = ({ buttonList }) => {
  return (
    <div className="flex items-center gap-[10px]">
      {buttonList.map((button, index) => (
        <a key={index} href={button.link} className="flex items-center justify-center" target="_blank">
          <Image className='object-cover' width={50} height={50} src={button.imageUrl} alt={button.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialNetsList;
