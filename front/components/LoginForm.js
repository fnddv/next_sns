import React, { useCallback, useState } from "react";
import Link from "next/Link";

const LoginForm = () => {
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
  const onChangeId = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setUserPassword(e.target.value);
  }, []);
  return (
    <form action="" method="post">
      <div>
        <label htmlFor="user-id">id</label>
        <input
          name="user-id"
          type="text"
          value={userId}
          onChange={onChangeId}
          required
        />
      </div>

      <div>
        <label htmlFor="user-password">password</label>
        <input
          name="user-password"
          type="password"
          value={userPassword}
          onChange={onChangePassword}
          required
        />
      </div>

      <div>
        <button type="submit">login</button>
        <Link href="./signup">
          <a>SignUp</a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
