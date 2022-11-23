import Image from "next/image";
import React from "react";
import ImageAuth from "../../public/image/phonenumber.webp";
import ImageCode from "../../public/image/code.webp";

type Props = {
    step:number
}
const StepImage = ({step}:Props) => {
  return (
    <div className="hidden lg:flex flex-1  justify-center items-center h-full  w-full overflow-hidden">
      <Image
        className={` ${
          step === 0
            ? "opacity-100 transition-all -translate-x-[50vh]  duration-500 "
            : " opacity-0 -translate-x-[90vh]"
        }`}
        src={ImageAuth}
        alt=""
      />
      <Image
        className={` ${
          step === 1
            ? "opacity-100 transition-all translate-x-[55vh]  duration-500 "
            : "opacity-0 -translate-x-[90vh]"
        }`}
        src={ImageCode}
        alt=""
      />
    </div>
  );
};

export default StepImage;
