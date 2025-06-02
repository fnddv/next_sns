import React, { useCallback, useState } from "react";
import styled from "styled-components";

const StyledLoginForm = styled.form`
  div {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
`;

const LoginForm = ({}) => {
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
  const onChangeId = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setUserPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(userId, userPassword);
  }, []);

  return (
    <StyledLoginForm action="" method="post" onFinish={onSubmitForm}>
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
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
