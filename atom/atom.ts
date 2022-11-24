import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const drawerState = atom({
  key: "drawerState",
  default: false,
});
export const userState = atom({
  key: "userState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
