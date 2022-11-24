import jwt from "jsonwebtoken";

export const createAccessToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(payload, process.env.ACCESS_TOKEN_KEY!);
};

export const createRefreshToken = (payload: any) => {
  // @ts-ignore
  return jwt.sign(
    payload,
    process.env.REFERESH_TOKEN_KEY!,
    { expiresIn: "7d" }
  );
};
