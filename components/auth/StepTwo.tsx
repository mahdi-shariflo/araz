import React from "react";
import Logo from "../../public/image/logo.png";
import Image from "next/image";
import ReactCodeInput from "react-verification-code-input";
import { useMutation } from "react-query";
import { authVerifyApi } from "../../utils/api/auth";
import PN from "persian-number";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";
import { setRecoil } from "recoil-nexus";
import { userState } from "../../atom/atom";
import * as Yup from "yup"

type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
};

const StepTwo = ({
  step,
  setStep,
  setCode,
  phone,
}: Props) => {
  const router = useRouter();

  // @ts-ignore
  const { isLoading, error, isError, mutate } = useMutation(
    // @ts-ignore
    (data) => authVerifyApi(data),
    {
      onSuccess: ({ data }) => {
        setRecoil(userState, {
          ...data.user,
        });
        router.push("/");
      },
    }
  );
  const onComplete = (code: string) => {
    const data = {
      phonenumber: PN.convertPeToEn(phone),
      code: Number(code),
    };
    // @ts-ignore
    mutate(data);
  };
  return (
    <div
      className={`w-[90%] md:min-w-[400px] opacity-100 transition-all ${
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
          {phone}
        </p>
      </div>

      <div className="flex items-center justify-center  p-3 mt-10  md:mt-16">
        <ReactCodeInput
          fields={5}
          className="ltr w-full"
          onChange={(i) => setCode(i)}
          onComplete={onComplete}
        />
      </div>
      <div className="mt-6">
        <p className="text-[10px] text-red-500 pr-2">
          {isError
            ? // @ts-ignore
              error?.response?.status === 400
              ? "کد وارد شده صحیح نمی باشد"
              : "مشکل سرور"
            : ""}
        </p>
        <button className="bg-[#0096f5] py-3 text-white rounded-lg drop-shadow-md hover:bg-[#0186d9] w-full mt-5">
          {isLoading ? (
            <BeatLoader
              color="white"
              className="mt-2"
              size={10}
            />
          ) : (
            " ارسال"
          )}
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
