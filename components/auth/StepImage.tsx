import Image from "next/image";
import React from "react";
import ImageAuth from "../../public/image/phonenumber.webp";
import ImageCode from "../../public/image/code.webp";

type Props = {
  step: number;
};
const StepImage = ({ step }: Props) => {
  return (
    <div className="flex-1  overflow-hidden h-full">
      {step === 0 ? (
        <Image
          className="h-full object-contain"
          src={ImageAuth}
          alt=""
        />
      ) : (
        <Image
          className="h-full object-contain"
          src={ImageCode}
          alt=""
        />
      )}
    </div>
  );
};

export default StepImage;
