// @ts-ignore
import PN from "persian-number";
const reg = new RegExp("^d+$");

export const ChangeEn = (x:string) => {
    if (!reg.test(x)) {
      return PN.convertEnToPe(x);
    }
    return x;
  };