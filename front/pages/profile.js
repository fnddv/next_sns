import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>REACT SNS APP || Profile</title>
      </Head>
      <AppLayout>
        <h2>Profile</h2>
        <LoginForm />
      </AppLayout>
    </>
  );
};

export default Profile;
