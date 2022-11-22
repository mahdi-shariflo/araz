import React, { useState, useRef, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
type props = {
  Icon: any;
};
const DropMenu = ({ Icon }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

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
  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon />
      </button>
      <div className={`${isOpen ? "dropdown" : "hidden"} `}>
        <div>
          <BiUser size={22} />
          <p className="!text-[12px]">پروفایل کاربری</p>
        </div>
        <div className="flex items-center ">
          <AiOutlineLogout size={19} />
          <p className="!text-[12px]">خروج</p>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
