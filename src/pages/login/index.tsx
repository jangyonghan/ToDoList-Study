import Link from "next/link";

const Login = () => {
  return (
    <>
      <div>로고 넣어야함</div>
      <h1>프로젝트 제목</h1>
      <span>오늘도 만나서 반가워요!</span>
      <form>
        <label htmlFor="email">이메일</label>
        <input id="email" />
        <label htmlFor="password">비밀번호</label>
        <input id="password" />
        <button>로그인</button>
        <span>
          회원이 아니신가요? <Link href={"/signup"}>회원가입하기</Link>
        </span>
      </form>

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
