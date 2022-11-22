import { useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PropsStepTwo } from "../../../typing";
import Location from "../Location";

const StepTwo = ({
  location,
  setLocation,
  countMessage,
  setCountMessage,
  setStep,
}: PropsStepTwo) => {
  const [open, setOpen] = useState(false);
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  const nextStep = () => {
    if (location.province.Name && countMessage) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <div className="mt-24 flex flex-col  justify-center items-center  border bg-white p-5  pb-12  md:pb-20 rounded-xl">
        <h1 className="font-snasBlack pt-3 pb-10 text-black text-2xl">انتخاب شهر و تعداد پیامک</h1>
        <div className="flex flex-col md:flex-row   md:items-center gap-14 md:gap-28">
          <div className="flex  items-center gap-2">
            <p className="font-snasBlack text-black">
              {" "}
              مکان :
            </p>
            {location.province.Name ? (
              <div
                onClick={() => setOpen(!open)}
                className="flex gap-1 cursor-pointer"
              >
                <span>
                  {`${location.province.Name} ، ${location.state.Name} ، ${location.city.Name} `}
                </span>
                <MdOutlineAddLocationAlt className="w-6 h-6" />
              </div>
            ) : (
              <button
                onClick={() => setOpen(!open)}
                className="bg-[#3498db] flex items-center text-white px-1 py-[5px] rounded-lg border border-transparent text-xs"
              >
                انتخاب مکان{" "}
                <MdOutlineAddLocationAlt className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex gap-2 items-center ">
            <p className="font-snasBlack text-black">
              ارسال به :
            </p>
            <input
              value={countMessage}
              onChange={(e: any) =>
                setCountMessage(e.target.value)
              }
              type="number"
              placeholder="تعداد پیامک ها"
              className="outline-none border text-center p-2 placeholder:text-sm !text-[15px] rounded-lg"
            />
            <p>نفر</p>
          </div>
        </div>
        <div className="mt-24 flex gap-10">
          <button
            onClick={prevStep}
            className="bg-[#0096f5] text-white px-7 py-[8px] rounded-xl border border-white drop-shadow-lg"
          >
            بازگشت
          </button>
          <button
            onClick={nextStep}
            className="bg-[#0096f5] text-white px-7 py-[8px] rounded-xl border border-white drop-shadow-lg"
          >
            بعدی
          </button>
        </div>
      </div>
      <Location
        open={open}
        setOpen={setOpen}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
};

export default StepTwo;
