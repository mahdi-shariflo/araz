import Head from "next/head";
import React from "react";
import Layout from "../components/public/Layout";
import Steps from "../components/public/message/Steps";

const Message = () => {
  return (
    <div className="test min-h-screen h-full">
      <Head>
        <title>سامانه پیامک مشتریان</title>
      </Head>
      <Layout>
        <Steps />
      </Layout>
    </div>
  );
};

export default Message;
