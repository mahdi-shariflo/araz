import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { drawerState } from "../../atom/atom";
import { categoryItems } from "../../utils/data";
import { IoIosArrowBack } from "react-icons/io";
const Drawer = () => {
  const [openDrawer, setOpenDrawer] =
    useRecoilState(drawerState);
  return (
    <div className="h-full flex w-full">
      <div
        className={` fixed top-[68px] h-full  w-[270px] bg-white transition-all duration-700 ${
          openDrawer
            ? "translate-x-0 z-50 right-0"
            : "translate-x-96"
        }`}
      >
        <div className="p-3 flex flex-col cursor-pointer">
          {categoryItems.map(({ id, src, name, query }) => (
            <div
              key={id}
              className="flex items-center justify-between hover:bg-gray-50 transition-all rounded-lg px-2 py-5"
            >
              <div className="flex items-center gap-2 ">
                <Image
                  src={src}
                  alt=""
                  width={25}
                  height={25}
                />
                <p>{name}</p>
              </div>
              <IoIosArrowBack className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpenDrawer(!openDrawer)}
        className={`h-full fixed top-[70px] ${
          openDrawer
            ? "bg-[#00000044] z-20 left-0 w-full "
            : "w-0 -left-96"
        }`}
      ></div>
    </div>
  );
};

export default Drawer;
