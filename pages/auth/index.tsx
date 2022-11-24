import { useMutation } from "react-query";
import { useState } from "react";
import StepImage from "../../components/auth/StepImage";
import StepOne from "../../components/auth/StepOne";
import StepTwo from "../../components/auth/StepTwo";
import { GetServerSideProps } from "next";
import Head from "next/head";

const Auth = () => {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      <Head>
        <title>ورود یا ثبت نام</title>
      </Head>
      <div className="flex justify-between items-center h-screen w-screen">
        <div className="flex-1 w-full h-full overflow-hidden flex justify-center items-center  flex-col ">
          <StepOne
            phone={phone}
            setPhone={setPhone}
            setStep={setStep}
            step={step}
          />
          <StepTwo
            phone={phone}
            setStep={setStep}
            step={step}
            setCode={setCode}
          />
        </div>
        <StepImage step={step} />
      </div>
    </div>
  );
};



export default Auth;
