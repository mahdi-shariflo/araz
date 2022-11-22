import { AiFillHome } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { BiMessageSquareAdd,BiUser } from "react-icons/bi";
import { categoryItemsType, menuIconType } from "../typing";
import Tool from "../public/image/tool.png";
import Devices from "../public/image/devices.png";
import Dress from "../public/image/dress.png";
import Kitchen from "../public/image/kitchen.png";
import Store from "../public/image/store.png";
import Child from "../public/image/child.png";
import Native from "../public/image/native.png";
import Stationery from "../public/image/stationery.png";
import Sport from "../public/image/sport.png";
import Health from "../public/image/health.png";
import Building from "../public/image/building.png";
export const MenuIcons: menuIconType[] = [
  {
    id: 1,
    Icon: AiFillHome,
    href: "/",
  },
  {
    id: 2,
    Icon: DiCodeigniter,
    href: "/juma",
  },
  {
    id: 3,
    Icon: BiMessageSquareAdd,
    href: "/message",
  },
];

export const categoryItems: categoryItemsType[] = [
  {
    src: Devices,
    name: "کالای دیجیتال",
    id: 1,
    query: "digital",
  },
  {
    src: Tool,
    name: "تجهیزات صنعتی",
    id: 2,
    query: "",
  },
  {
    src: Dress,
    name: "مد‌و‌پوشاک",
    id: 3,
    query: "",
  },
  {
    src: Kitchen,
    name: "خانه‌وآشپزخانه",
    id: 4,
    query: "",
  },
  {
    src: Store,
    name: "سوپرمارکت",
    id: 5,
    query: "",
  },
  {
    src: Child,
    name: "نوزادوبچگانه",
    id: 6,
    query: "",
  },
  {
    src: Native,
    name: "محصولات بومی",
    id: 7,
    query: "",
  },
  {
    src: Stationery,
    name: "لوازم تحریر",
    id: 8,
    query: "",
  },
  {
    src: Sport,
    name: "ورزش سفر",
    id: 9,
    query: "",
  },
  {
    src: Health,
    name: "زیبایی‌وسلامت",
    id: 10,
    query: "",
  },
  {
    src: Building,
    name: "مصالح‌ساختمانی",
    id: 11,
    query: "",
  },
];

export const mobileMenuItems: menuIconType[] = [
  {
    id: 1,
    href: "/",
    Icon: AiFillHome,
  },
  {
    id: 2,
    href: "/juma",
    Icon: DiCodeigniter,
  },
  {
    id: 3,
    href: "/message",
    Icon: BiMessageSquareAdd,
  },
  {
    id: 4,
    href: "/profile",
    Icon: BiUser,
  },
];
