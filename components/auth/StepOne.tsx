import { useState } from "react";
import Logo from "../../public/image/logo.png";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import { ChangeEn } from "../../utils/inputEnToFa";
import { isError, useMutation } from "react-query";
import { authApi } from "../../utils/api/auth";
import PN from "persian-number";
import { BeatLoader } from "react-spinners";
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
  const [error, setError] = useState("");
  const change = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhone(ChangeEn(e.target.value));
  };
  const data = {
    phonenumber: PN.convertPeToEn(phone),
  };

  // @ts-ignore
  const mutate = useMutation(() => authApi(data), {
    onSuccess: () => {
      setStep(1);
    },
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone)
      return setError("لطفا شماره تلفن خود را وارد کنید");
    mutate.mutate();
  };

  const onKeyDown = () => {
    setError("");
    if (mutate.isError) {
      mutate.reset();
    }
  };
  return (
    <div
      className={` w-full px-6 md:px-0 md:min-w-[400px] h-full transition-all  duration-[.500ms] ${
        step === 0
          ? "opacity-100  translate-x-0 translate-y-1/2"
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
      <form onSubmit={submit}>
        <div className="flex items-center border p-3 rounded-lg mt-10 text-black">
          <FaPhone className="w-5 h-5" />
          <input
            value={phone}
            onChange={change}
            type="tel"
            className="bg-transparent ltr w-full  outline-none !text-[16px]"
            onKeyDown={onKeyDown}
          />
        </div>
        <p className="text-[10px] pt-3 text-red-500">
          {error && "لطفا شماره تلفن خود را وارد کنید"}
        </p>
        <div className="mt-6 ">
          <p className="text-[10px] py-3 text-red-500">
            {mutate.isError && "مشکل سرور، لطفا بعدا تلاش"}
          </p>
          <button className="bg-[#0096f5] py-4 flex justify-center text-white rounded-lg drop-shadow-md hover:bg-[#0186d9] w-full ">
            {mutate.isLoading ? (
              <BeatLoader
                color="white"
                className="py-1"
                size={10}
              />
            ) : (
              "ارسال کد"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
