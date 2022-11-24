import { useMutation } from "react-query";
import { useState } from "react";
import StepImage from "../../components/auth/StepImage";
import StepOne from "../../components/auth/StepOne";
import StepTwo from "../../components/auth/StepTwo";
import { GetServerSideProps } from "next";

const Auth = () => {
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
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

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token = ctx.req.cookies["auth"];
    if (token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return { props: {} };
  };

export default Auth;
