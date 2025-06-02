import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

const Profile = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Profile || REACT SNS APP </title>
      </Head>
      <AppLayout>
        <h2>Profile</h2>
        {isLoggedIn ? <UserProfile /> : <LoginForm />}
      </AppLayout>
    </>
  );
};

export default Profile;
