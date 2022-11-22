import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import {MdImageSearch} from "react-icons/md"
import Logo from "../../public/image/logo.png";
const SearchInput = () => {
  return (
    <div className=" flex items-center justify-center flex-col px-5 md:px-0">
      <div className=" flex-1 flex flex-col items-center justify-center pt-14 md:pt-24 w-full md:w-[600px]">
        <Image
          src={Logo}
          alt="logo"
          width={300}
          placeholder="empty"
        />
        <div className="flex-1 flex items-center border border-gray-200 py-3  rounded-full w-full px-3  mt-8">
          <BsSearch className="text-gray-700 !w-6 !h-6" />
          <input
            placeholder="کالا، محصول مورد نظر خود را سرچ کنید"
            className="bg-transparent outline-none px-2 w-full placeholder:text-[11px]"
          />
          <BiLocationPlus className="text-[#EC4338] w-7 h-7 cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 flex text-[#EC4338] items-center w-full md:w-[600px] pr-3 pt-3 gap-1">
        <MdImageSearch className="w-4 h-4"/>
        <p className=" text-xs  font-snasBlack">پر بازدید‌ترین ها</p>
      </div>
    </div>
  );
};

export default SearchInput;
