import Link from "next/link";
import SignupFrom from "@/components/signup/SingupForm";

const SignUp = () => {
  return (
    <>
      <header>
        <div>로고 넣어야함</div>
        <h1>깜 빡</h1>
        <span>첫 방문을 환영합니다</span>
      </header>

      <main>
        <SignupFrom />
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
