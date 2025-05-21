import React from "react";
import PropTypes from "prop-types";
import Link from "next/Link";

const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <nav>
          <Link href="/">
            <a>처음으로</a>
          </Link>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </nav>
      </div>
      {children}
    </>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
