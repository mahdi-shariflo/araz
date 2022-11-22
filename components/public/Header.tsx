import Link from "next/link";
import React from "react";
import { MenuIcons } from "../../utils/data";
import { HiShoppingCart } from "react-icons/hi";
import { FiUser, FiMenu } from "react-icons/fi";
import { getRecoil, setRecoil } from "recoil-nexus";
import DropMenu from "./DropMenu";
import { drawerState } from "../../atom/atom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
type Props = {};

const Header = () => {
  const router = useRouter();
  const isLogin = false;
  const drawer = useRecoilValue(drawerState);
  return (
    <header className="sticky top-0 shadow-sm z-50 bg-white">
      <div className="flex justify-between items-center py-5 w-[95%] mx-auto">
        {/* header right */}
        <div className="flex items-center gap-4">
          <FiMenu
            onClick={() => setRecoil(drawerState, !drawer)}
            className="cursor-pointer  hidden md:block text-black"
          />
          <h1 className="font-snasBlack text-2xl text-black">
            آراز فروشگاه بزرگ
          </h1>
        </div>
        {/* header center */}
        <div className="hidden md:block">
          <ul className="flex justify-between gap-10 items-center">
            {MenuIcons.map(({ href, Icon, id }) => (
              <li
                className="flex flex-col items-center"
                key={id}
              >
                <Link
                  className={` ${
                    router.pathname === href
                      ? "text-[#0096f5]"
                      : "text-black"
                  }`}
                  href={href}
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* header left */}
        <div className="flex gap-4 items-center">
          <HiShoppingCart className="text-black" />

          {isLogin ? (
            <DropMenu Icon={FiUser} />
          ) : (
            <button className="bg-[#0095f5]  text-[11px] drop-shadow-sm text-white p-3 rounded-lg">
              ورود یا ثبت نام
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
