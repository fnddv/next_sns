import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  position: fixed;
  bottom: 0;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
  }
`;

const StyledContentsLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <StyledContentsLayout>
        <StyledContents>{children}</StyledContents>
      </StyledContentsLayout>
      <StyledNavigation>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/">
          <a>LIKE</a>
        </Link>
        <Link href="/">
          <a>SEARCH</a>
        </Link>
        <Link href="./profile">
          <a>PROFILE</a>
        </Link>
      </StyledNavigation>
    </>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
