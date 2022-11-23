import React from "react";
import Logo from "../../public/image/logo.png";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import { ChangeEn } from "../../utils/inputEnToFa";

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

const StepOne = ({
  step,
  setStep,
  phone,
  setPhone,
}: Props) => {
  const change = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(ChangeEn(e.target.value));
  };
  return (
    <div
      className={` min-w-[400px] h-full transition-all  duration-[.500ms] ${
        step === 0
          ? "opacity-100  -translate-x-[0vh] translate-y-1/2"
          : "opacity-0 translate-x-[90vh] translate-y-1/2"
      }`}
    >
      <div className="flex justify-center">
        <Image src={Logo} alt="" />
      </div>
      <h1 className="text-2xl font-snasBlack text-black pt-14">
        آراز فروشگاه بزرگ
      </h1>
      <p className="text-sm pt-2 text-gray-500">
        برای ورود لطفا شماره تلفن خود را وارد کنید
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep(1);
        }}
      >
        <div className="flex items-center border p-3 rounded-lg mt-10 text-black">
          <FaPhone className="w-5 h-5" />
          <input
            value={phone}
            onChange={change}
            type="tel"
            className="bg-transparent ltr w-full  outline-none !text-[16px]"
          />
        </div>
        <button className="bg-[#0096f5] py-3 text-white rounded-lg drop-shadow-md hover:bg-[#0186d9] w-full mt-14">
          ارسال کد
        </button>
      </form>
    </div>
  );
};

export default StepOne;
