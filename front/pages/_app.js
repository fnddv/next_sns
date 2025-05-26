import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    font-family: Nanum Barun Gothic, sans-serif;
  }
`;

const App = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
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
