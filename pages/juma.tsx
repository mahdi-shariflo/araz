import Head from "next/head";
import React from "react";
import CardProduct from "../components/public/CardProduct";
import Drawer from "../components/public/Drawer";
import Layout from "../components/public/Layout";
import SearchInput from "../components/public/SearchInput";

const Juma = () => {
  return (
    <div>
      <Head>
        <title>جمعه بازار</title>
      </Head>
      <Layout>
        <SearchInput />
        <div className=" flex flex-wrap justify-center gap-4 md:gap-y-14 pb-28 justify-items-start px-4 md:px-14 mt-14">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </Layout>
    </div>
  );
};

export default Juma;
