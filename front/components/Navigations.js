import React from "react";
import Link from "next/Link";

const navigation = () => {
  return (
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
  );
};

export default navigation;
