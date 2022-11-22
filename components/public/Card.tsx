import React from "react";
import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
interface props {
  onClick: (i: any) => void;
  item: any
}
const Card = ({ item, onClick }: props) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between cursor-pointer px-2 regular text-sm py-4 text-gray-700 hover:bg-gray-100"
    >
      <div className="flex items-center gap-1">
        <GoLocation />
        <p>{item.Name}</p>
      </div>
      <IoIosArrowBack size={20} />
    </div>
  );
};

export default Card;
