import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "./style.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>REACT SNS APP</title>
      </Head>
      <Component />
    </>
  );
};

App.prototype = {
  Component: PropTypes.node.isRequired,
};
export default App;
