import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>REACT SNS APP || Profile</title>
      </Head>
      <AppLayout>
        <div>Profile</div>
      </AppLayout>
    </>
  );
};

export default Profile;
