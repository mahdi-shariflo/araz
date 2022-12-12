import { Button } from "@mui/material";
import { useFormik } from "formik";
import InputProfile from "../../components/public/InputProfile";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { editProfile } from "../../utils/api/user";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("لطفا یک نام کاربری انتخاب کنین ")
    .matches(
      /^(?=.*[a-z])(?=.{6,})/,
      "باید حداقل 6 کاراکتر، انگلیسی و شامل حداقل یک حرف باشه"
    ),
});
const Edit = () => {
  const mutatation = useMutation((data: any) =>editProfile(data));
  const formik = useFormik({
    initialValues: {
      profile: null,
      username: "",
      name: "",
      familyName: "",
      codemili: "",
      job: "",
      address: "",
    },
    validationSchema,
    onSubmit: (values) => {
   
      const formData = new FormData();
      if (values.profile) formData.append("image", values.profile);
      formData.append("fullname", `${values.name} ${values.familyName}`);
      formData.append("username", values.username);
      formData.append("codemili", values.codemili);
      formData.append("job", values.job);
      formData.append("address", values.address);
     

      mutatation.mutate(formData);
    },
  });

  return (
    <div className=" w-screen min-h-screen h-full flex justify-center items-center">
      <div className=" w-full">
        <h1 className="font-sansBlack text-center text-2xl text-black pb-10 pt-10 md:pt-0">
          ویرایش پروفایل کاربری
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="px-4 flex flex-col gap-4 w-full  md:max-w-[700px] mx-auto"
        >
          <div className=" w-full">
            <label
              className="h-36 w-36 md:h-28 md:w-28 block mx-auto border-2 shadow-2xl rounded-full overflow-hidden"
              htmlFor="upload-photo"
            >
              <img
                className="w-full h-full"
                src={
                  formik.values.profile! &&
                  URL.createObjectURL(formik.values.profile)
                }
              />
            </label>
            <input
              id="upload-photo"
              name="profile"
              type="file"
              onChange={(event) => {
                formik.setFieldValue(
                  "profile",
                  // @ts-ignore
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <div className="flex items-center gap-6">
            <InputProfile
              className="-mt-7 md:mt-0"
              placeholder="نام کاربری"
              label="نام کاربری"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              error={
                formik.errors.username &&
                formik.touched.username &&
                formik.errors.username
              }
            />
            <InputProfile
              placeholder="شغل"
              label="شغل"
              onChange={formik.handleChange}
              value={formik.values.job}
              name="job"
            />
          </div>
          <div className="flex items-center gap-6 mt-3">
            <InputProfile
              placeholder="نام"
              label="نام"
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
            />
            <InputProfile
              placeholder="نام خانوادگی"
              label="نام‌ خانوادگی"
              onChange={formik.handleChange}
              value={formik.values.familyName}
              name="familyName"
              error=""
            />
          </div>

          <InputProfile
            placeholder="کد ملی "
            label="کد ملی "
            onChange={formik.handleChange}
            value={formik.values.codemili}
            name="codemili"
          />
          <InputProfile
            placeholder="آدرس"
            textarea
            label="آدرس"
            onChange={formik.handleChange}
            value={formik.values.address}
            name="address"
          />
          <p className="text-red-500">
            {/* {mutatation.isError && "مشکلی رخ داده است"} */}
          </p>
          <Button
            type="submit"
            className="md:col-span-2 hover:bg-[#0096f5] bg-[#0096f5] w-full text-white py-2 rounded-lg !font-sansMedium"
          >
            ویرایش
            {/* {mutatation.isLoading ? (
              <BeatLoader color="#fff" size={9} />
            ) : (
              "ویرایش"
            )} */}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
