import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div>로고 넣어야함</div>
      <h1>프로젝트 제목</h1>
      <span>첫 방문을 환영합니다</span>
      <form>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" />
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" type="text" />
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="text" />
        <label htmlFor="repassword">비밀번호 확인</label>
        <input id="repassword" type="text" />
        <span>#체크박슥# 이용 약관에 동의합니다.</span>
        <button>가입하기</button>
      </form>
      <span>
        이미 가입하셨나요? <Link href={"/login"}>로그인 하기</Link>
      </span>
    </>
  );
};

export default SignUp;
