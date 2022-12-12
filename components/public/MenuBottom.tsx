import { useRouter } from "next/router";
import React from "react";
import { mobileMenuItems } from "../../utils/data";
const MenuBottom = () => {
  const router = useRouter();
  return (
    <div className="container-menu">
      <div className="flex justify-around items-center ">
        {mobileMenuItems.map(({ id, href, Icon }) => (
          <div
            onClick={() => router.push(href)}
            key={id}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              className={`${
                router.pathname === href
                  ? "text-[#0095f5]"
                  : ""
              }`}
            />
            <span
              className={`block rounded-full w-2 h-2  ${
                router.pathname === href
                  ? "bg-[#0095f5] block"
                  : " hidden"
              }`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBottom;
