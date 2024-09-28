import LoginForm from "@/components/login/LoginForm";

const Login = () => {
  return (
    <>
      <header>
        <div>로고 넣어야함</div>
        <h1>깜빡</h1>
        <span>오늘도 만나서 반가워요!</span>
      </header>

      <main>
        <LoginForm />
      </main>

      <footer>
        <span>다른 방식으로 로그인</span>
        <div>구글</div>
        <div>카카오</div>
        <div>네이버</div>
      </footer>
    </>
  );
};

export default Login;
