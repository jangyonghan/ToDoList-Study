import Link from "next/link";

const Login = () => {
  return (
    <>
      <header>
        <div>로고 넣어야함</div>
        <h1>깜빡</h1>
        <span>오늘도 만나서 반가워요!</span>
      </header>

      <main>
        <form>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            name="eamil"
            placeholder="아이디를 입력하세요"
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <button>로그인</button>
          <span>
            회원이 아니신가요? <Link href={"/signup"}>회원가입하기</Link>
          </span>
        </form>
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
