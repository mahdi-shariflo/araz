import React, { useState, useRef, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
type props = {
  Icon: any;
};
const DropMenu = ({ Icon }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (e.path[1] !== btnRef.current) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () =>
      document.body.removeEventListener(
        "click",
        closeDropdown
      );
  }, []);

  const logout = () => {
    localStorage.clear();
    router.push("/auth/logout");
  };
  return (
    <div className="relative">
      <button
        className="btn-profile"
        ref={btnRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon className="w-8 h-8 " />
      </button>
      <div className={`${isOpen ? "dropdown" : "hidden"} `}>
        <div onClick={() => router.push("/profile")}>
          <BiUser size={22} />
          <p className="!text-[12px]">پروفایل کاربری</p>
        </div>
        <div
          onClick={logout}
          className="flex items-center "
        >
          <AiOutlineLogout size={19} />
          <p className="!text-[12px]">خروج</p>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
