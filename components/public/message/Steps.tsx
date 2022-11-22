import { useState } from "react";
import StepLevel from "./StepLevel";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState({
    title: "",
    text: "",
  });
  const [location, setLocation] = useState({
    province: { Name: "" },
    state: { Name: "" },
    city: { Name: "" },
  });
  const [countMessage, setCountMessage] = useState();
  return (
    <div className="">
      <div className="w-[90%] md:w-1/2 mx-auto ">
        <StepLevel step={step} />
        {step === 1 ? (
          <StepOne
            setStep={setStep}
            setMessage={setMessage}
          />
        ) : step === 2 ? (
          <StepTwo
            setStep={setStep}
            setLocation={setLocation}
            location={location}
            countMessage={countMessage}
            // @ts-ignore
            setCountMessage={setCountMessage}
          />
        ) : (
          <StepThree
            setStep={setStep}
            countMessage={countMessage}
            location={location}
            message={message}
          />
        )}
      </div>
    </div>
  );
};

export default Steps;
