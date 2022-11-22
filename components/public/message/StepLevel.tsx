import React from "react";
import {
  BiLocationPlus,
  BiMessageAltAdd,
  BiMessageAltCheck,
} from "react-icons/bi";
type Props = {
  step: number;
};

const StepLevel = ({ step }: Props) => {
  return (
    <div className="flex justify-center  pt-10 w-full mx-auto">
      <div className="relative flex justify-between h-1 w-full bg-white mt-14">
        <div
          className={`${
            step === 2 || step === 3
              ? "w-1/2 bg-[#0096f5] transition-all duration-200"
              : ""
          }`}
        >
          <div
            className={`step-class  right-0 bg-[#0096f5] `}
          >
            <BiMessageAltAdd className="text-white w-8 h-8" />
          </div>
        </div>
        <div
          className={`step-class right-1/2 translate-x-1/2 ${
            step === 2 || step === 3
              ? "bg-[#0096f5]"
              : "bg-white"
          }`}
        >
          <BiLocationPlus className={` w-8 h-8 ${step === 2 || step === 3 ? "text-white" : "text-gray-500"}`} />
        </div>
        <div
          className={`${
            step === 3
              ? "w-1/2 bg-[#0096f5] transition-all duration-200"
              : ""
          }`}
        >
          <div
            className={`step-class left-0  ${
              step === 3 ? "bg-[#0096f5]" : "bg-white"
            }`}
          >
            <BiMessageAltCheck className={` w-8 h-8 ${step === 3 ? "text-white" : "text-gray-500"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLevel;
