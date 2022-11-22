import React from "react";
// @ts-ignore
import Discount from "../../../public/image/discount.webp";
import { typeStepThree } from "../../../typing";
import Image from "next/image";
const StepThree = ({
  message,
  location,
  countMessage,
  setStep,
}: typeStepThree) => {
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <div className="mt-28 bg-white px-6 py-14 flex items-center border rounded-xl overflow-hidden">
      <div className="flex-1 px-3">
        <div className="flex flex-col gap-6 ">
          <Card
            title="عنوان پیام"
            message={message.title}
          />
          <Card title="متن پیام" message={message.text} />
          <Card
            title=" آدرس :"
            message={`${location.province.Name} ، ${location.state.Name} ، ${location.city.Name} `}
          />

          <Card
            title="ارسال به "
            message={`${countMessage} نفر`}
          />
        </div>
        <div className="mt-16 flex gap-8">
          <button
            onClick={prevStep}
            className="bg-[#0096f5] text-white px-7 py-[8px] rounded-xl border border-white drop-shadow-lg"
          >
            بازگشت
          </button>
          <button
            // onClick={prevStep}
            className="bg-[#0096f5] text-white px-7 py-[8px] rounded-xl border border-white drop-shadow-lg"
          >
            پرداخت
          </button>
        </div>
      </div>
      <Image
        width={400}
        src={Discount}
        alt=""
        className="hidden md:block"
      />
    </div>
  );
};

export default StepThree;

type typeCard = {
  title: string;
  message: string;
};
const Card = ({ title, message }: typeCard) => {
  return (
    <div className="flex gap-1">
      <p className="text-gray-400 font-snasBlack">
        {title} :
      </p>
      <p className="text-black">{message}</p>
    </div>
  );
};
