import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <header>
        <div>로고 넣어야함</div>
        <h1>깜 빡</h1>
        <span>첫 방문을 환영합니다</span>
      </header>

      <main>
        <form>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임 입력"
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <label htmlFor="repassword">비밀번호 확인</label>
          <input
            id="repassword"
            name="repassword"
            type="password"
            placeholder="비밀번호 확인"
          />
          <span>#체크박슥# 이용 약관에 동의합니다.</span>
          <button>가입하기</button>
        </form>
      </main>

      <footer>
        <span>
          이미 가입하셨나요? <Link href={"/login"}>로그인 하기</Link>
        </span>
      </footer>
    </>
  );
};

export default SignUp;
