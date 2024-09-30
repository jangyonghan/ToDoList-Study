import React, { useState } from "react";
import InputField from "../common/InputField";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "@/utils/validation";

const SignupFrom = () => {
  const [email, setEmail] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [rePasswordErr, setRePasswordErr] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "nickname") setNickName(value);
    if (name === "password") setPassword(value);
    if (name === "repassword") setRePassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isRePasswordValid = validatePasswordMatch(password, rePassword);

    setEmailErr(!isEmailValid);
    setPasswordErr(!isPasswordValid);
    setRePasswordErr(!isRePasswordValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="email"
        type="text"
        name="email"
        title="아이디"
        value={email}
        placeholder="아이디를 입력하세요"
        onChange={handleChange}
      />
      {emailErr && (
        <span style={{ color: "red" }}>유효하지 않은 이메일 입니다.</span>
      )}
      <InputField
        id="nickname"
        type="text"
        name="nickname"
        title="닉네임"
        value={nickName}
        placeholder="닉네임을 입력하세요"
        onChange={handleChange}
      />

      <InputField
        id="password"
        type="password"
        name="password"
        title="비밀번호"
        value={password}
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
      />
      {passwordErr && (
        <span style={{ color: "red" }}>유효하지 않은 비밀번호입니다.</span>
      )}

      <InputField
        id="repassword"
        type="password"
        name="repassword"
        title="비밀번호 확인"
        value={rePassword}
        placeholder="비밀번호 확인"
        onChange={handleChange}
      />
      {rePasswordErr && (
        <span style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</span>
      )}

      <span>
        <input type="checkbox" />
        이용 약관에 동의합니다.
      </span>
      <button>가입하기</button>
    </form>
  );
};

export default SignupFrom;
