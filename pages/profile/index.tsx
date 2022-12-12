import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import ProfileImage from "../../public/image/avatar.webp";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userState } from "../../atom/atom";
import { convertEnToPe } from "persian-number";
import { BsSearch } from "react-icons/bs";
import CardProduct from "../../components/public/CardProduct";
import { useRouter } from "next/router";
import Layout from "../../components/public/Layout";

const Profile = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const fullname = false;
  return (
    <Layout>

    <div className=" min-h-screen  container-profile h-full w-full">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <div className="hidden md:flex justify-between  py-8  px-4">
            <RiEdit2Fill
              className="cursor-pointer"
              onClick={() => router.push("/profile/edit")}
            />
            <IoIosArrowBack />
          </div>
          <div className="flex flex-col gap-2 mt-3 md:mt-10 items-center">
            <div className="border-2 border-white rounded-full shadow-lg">
              <Image
                src={ProfileImage}
                alt=""
                className="object-contain w-28 h-28 rounded-full"
              />
            </div>
            <p className="text-[14px]">
              {/* {user && user.phonenumber} */}
            </p>
          </div>
          <div className="flex flex-col justify-around items-center md:flex-row-reverse">
            <div className="flex justify-around gap-8 mt-8 md:mt-16">
              <div className="flex-col text-center">
                <p className="font-snasBlack text-xl ">
                  {convertEnToPe("78%")}
                </p>
                <p>رضایت مشتری</p>
              </div>
              <div className="flex-col text-center">
                <p className="font-snasBlack text-xl ">
                  {convertEnToPe("128")}
                </p>
                <p>تعداد پست</p>
              </div>
            </div>
            <div className="flex justify-center mt-14 gap-10">
              <button className="btn-profile-screen">
                دنبال کردن
              </button>
              <button className="btn-profile-screen">
                پیام
              </button>
            </div>
          </div>
          <div className="mx-auto mt-14 md:mt-20 w-[90%] md:w-1/2 text-black flex items-center bg-gray-100 py-[12px] rounded-full gap-3">
            <BsSearch className="w-5 h-5 mx-3 " />
            <input
              placeholder="جستجو"
              className="bg-transparent w-full outline-none text-[12px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 px-4 md:px-0  md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-20 pb-10">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
