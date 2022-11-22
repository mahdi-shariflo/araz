import React, { Dispatch, SetStateAction } from "react";
// formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  title: "",
  message: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required(
    "لطفا عنوان پیام را وارد کنید"
  ),
  message: Yup.string().required("متن پیام را وارد کنید"),
});

type Props = {
  setStep: Dispatch<SetStateAction<number>>;
  setMessage: React.Dispatch<
    React.SetStateAction<{
      title: string;
      text: string;
    }>
  >;
};

type typeValues = {
  title: string;
  message: string;
};
const StepOne = ({ setStep, setMessage }: Props) => {
  const onSubmit = ({ title, message }: typeValues) => {
    setMessage({
      title,
      text: message,
    });
    setStep((prev) => prev + 1);
  };
  return (
    <div className="mt-20 md:mt-28 bg-white  p-5 py-8 md:py-14  rounded-xl">
      <h1 className="font-snasBlack text-2xl text-center pb-10 text-black">
        متن ارسالی به کاربران
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="flex flex-col gap-2 text-xs text-red-500">
            <label className="text-black text-md">
              عنوان
            </label>
            <Field
              className="outline-none border  border-gray-300 rounded-lg px-2 py-3 text-black placeholder:text-sm !text-[15px] max-w-[350px]"
              name="title"
              placeholder="مثلا تخفیف 4 درصد میوه"
            />
            <ErrorMessage name="title" />
          </div>
          <div className="flex flex-col gap-2 text-xs text-red-500 mt-8">
            <label className="text-black text-md">
              متن پیام
            </label>
            <Field
              as="textarea"
              className="outline-none border  border-gray-300 rounded-lg px-2 py-4 text-black !text-[15px] placeholder:text-sm resize-none h-36"
              name="message"
              placeholder="متن پیام"
            />
            <ErrorMessage name="message" />
          </div>
          <button
            type="submit"
            className="bg-[#0096f5] text-white px-10 py-[8px] rounded-xl mt-12 border border-white drop-shadow-lg"
          >
            بعدی
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
