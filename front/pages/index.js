import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>REACT SNS APP</title>
      </Head>
      <AppLayout>
        <div>Home</div>
      </AppLayout>
    </>
  );
};

export default Home;
