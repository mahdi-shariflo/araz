import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import Cookie from "cookie";
import { useRouter } from "next/router";
import { setRecoil } from "recoil-nexus";
import { userState } from "../../atom/atom";
const logout = () => {
  const router = useRouter();
  useEffect(() => {
    setRecoil(userState, {});
    localStorage.clear();
    router.push("/");
  }, []);
  return null;
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    await ctx.res.setHeader(
      "Set-Cookie",
      Cookie.serialize("auth", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    // your

    return {
      props: {},
    };
  };
export default logout;
