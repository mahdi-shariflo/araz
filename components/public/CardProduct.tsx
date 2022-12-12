import Image from "next/image";
import React from "react";
import Product from "../../public/image/product.jpg";
const CardProduct = () => {
  return (
    <div className="container-card-product">
      <p className="roban">
        تخفیف ۱۲%
      </p>
      <Image
        className="card-image"
        src={Product}
        alt=""
        loading="lazy"
      />
      <div className="mt-6 flex-1 md:flex-[0] md:mt-4 px-3 text-black ">
        <p className="cursor-pointer text-[11px] md:text-xs overflow-hidden whitespace-nowrap overflow-ellipsis w-[80%]">
          هندزفری بلوتوثی مدل lopon 12
        </p>
        <div className="flex items-center justify-between mt-7">
          <span className="text-xs text-gray-400">
            فروشگاه معاصر
          </span>

          <p className="font-snasBlack text-[14px] md:text-[17px]">
            127,000{" "}
            <span className="text-gray-500">تومان</span>
          </p>
        </div>
        <div className="mt-5 hidden md:block">
          <span>توضیحات:</span>
          <p className="text-xs text-justify leading-5 text-gray-400 ">
            در واقع طراحی این هدفون ها به گونه ای است در گوش
            ثابت بماند و در هنگام راه‌رفتن، دویدن و حرکت‌های
            عادی و روزمره از گوش خارج نشوند؛ اما در این سری
            نسبتا خوبی در برابر ضربه دارد
          </p>
        </div>
        <button className="text-xs hidden bg-[#0096f5] text-white p-2 py-3 rounded-md my-4">
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
