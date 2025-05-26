import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navigation from "./Navigations";

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
`;
const AppLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
