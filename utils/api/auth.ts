import API from "./axios";

// auth
type Props = {
  phonenumber: string;
};
export const authApi = (data: Props) => {
  API.post("/auth", data);
};

type verify = {
  phonenumber: string;
  code: string;
};
export const authVerifyApi = (data: any) => API.post("/auth/verify", data);
