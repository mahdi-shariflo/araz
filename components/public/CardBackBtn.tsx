import React from "react";
import { IoIosArrowBack } from "react-icons/io";
interface props {
  onClick: () => void;
  name: string;
}
const CardBackBtn = ({ onClick, name }: props) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center py-3 mr-3 cursor-pointer text-gray-600"
    >
      <IoIosArrowBack size={20} className="rotate-180" />
      <span className="bold text-[14px]">{name}</span>
    </div>
  );
};

export default CardBackBtn;
