import { Button } from "@mui/material";
import { useFormik } from "formik";
import { BeatLoader } from "react-spinners";
import { useMutation } from "react-query";

import axios from "axios";
import InputProfile from "../../components/public/InputProfile";

const Edit = () => {
  // const mutatation = useMutation((data: any) =>
  //   // editUserProfileApi({ id: user._id, data }),{
  //   //   onSuccess(data, variables, context) {
  //   //     axios.get('http://localhost:3000/api/auth/session?update');
  //   //   },
  //   // }
  // // );
  const formik = useFormik({
    initialValues: {
      profile: null,
      name: "",
      familyName: "",
      bio: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      if (values.profile)
        formData.append("image", values.profile);
      formData.append(
        "fullname",
        `${values.name} ${values.familyName}`
      );
      formData.append("bio", values.bio);

      // mutatation.mutate(formData);
    },
  });

  return (
    <div className="bg-test1 w-screen min-h-screen h-full flex justify-center items-center">
      <div className=" w-full">
        <h1 className="font-sansBlack text-center text-2xl text-white pb-10 pt-10 md:pt-0">
          ویرایش پروفایل کاربری
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="px-4 grid grid-col-1 gap-5 w-full  md:max-w-[700px] mx-auto"
        >
          <div className="md:col-span-2 w-full">
            <label
              className="h-36 w-36 md:h-28 md:w-28 block mx-auto border-2 shadow-2xl rounded-full overflow-hidden"
              htmlFor="upload-photo"
            >
              <img
                className="w-full h-full"
                // src={
                //   formik.values.profile
                //     ? URL.createObjectURL(
                //         formik.values.profile
                //       )
                //     : user.image
                // }
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
          <InputProfile
            className="-mt-7 md:mt-0"
            placeholder="نام کاربری"
            label="نام کاربری"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
          <InputProfile
            className="-mt-0 md:mt-0"
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
          />
          <InputProfile
            placeholder="شغل"
            label="شغل"
            onChange={formik.handleChange}
            value={formik.values.familyName}
            name="familyName"
          />
          <InputProfile
            placeholder="کد ملی "
            label="کد ملی "
            onChange={formik.handleChange}
            value={formik.values.familyName}
            name="familyName"
          />
          <InputProfile
            placeholder="آدرس"
            className="md:col-span-2"
            textarea
            label="آدرس"
            onChange={formik.handleChange}
            value={formik.values.bio}
            name="bio"
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
