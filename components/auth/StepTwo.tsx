import React from "react";
import Logo from "../../public/image/logo.png";
import Image from "next/image";
import ReactCodeInput from 'react-verification-code-input';
import { ChangeEn } from "../../utils/inputEnToFa";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCode:React.Dispatch<React.SetStateAction<string>>
};

const StepTwo = ({ step, setStep , setCode}: Props) => {
  return (
    <div
      className={`min-w-[400px] opacity-100 transition-all ${
        step === 1
          ? "  translate-x-0 -translate-y-[25vh] duration-500  "
          : "opacity-100 translate-x-[100vh] -translate-y-[25vh] duration-300  "
      }`}
    >
      <div className="flex justify-center">
        <Image src={Logo} alt="" />
      </div>
      <h1 className="text-2xl font-snasBlack text-black pt-14">
        لطفا کد ارسالی وارد شده را وارد کنید
      </h1>
      <div className="flex items-center gap-2 mt-5">
        <p className="text-sm text-gray-500">
          آیا شماره تلفن اشتباه است؟
        </p>
        <p
          onClick={() => setStep(0)}
          className="text-blue-500 cursor-pointer underline"
        >
          009142652183
        </p>
      </div>

      <div className="flex items-center justify-center  p-3  mt-16">
        <ReactCodeInput fields={5} className="ltr w-full" onChange={(i)=> setCode((i))} />
      </div>
      <button className="bg-[#0096f5] py-3 text-white rounded-lg drop-shadow-md hover:bg-[#0186d9] w-full mt-14">
        ارسال کد
      </button>
    </div>
  );
};

export default StepTwo;
