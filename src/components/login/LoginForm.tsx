import { useState } from "react";
import InputField from "../common/InputField";
import { validateEmail, validatePassword } from "@/utils/validation";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setEmailErr(!isEmailValid);
    setPasswordErr(!isPasswordValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="email"
        type="text"
        name="email"
        value={email}
        placeholder="아이디를 입력하세요"
        onChange={handleChange}
        title="아이디"
      />
      {emailErr && (
        <span style={{ color: "red" }}>유효하지 않은 이메일입니다.</span>
      )}

      <InputField
        id="password"
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호를 입력하세요"
        onChange={handleChange}
        title="비밀번호"
      />
      {passwordErr && (
        <span style={{ color: "red" }}>유효하지 않은 비밀번호입니다.</span>
      )}

      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
