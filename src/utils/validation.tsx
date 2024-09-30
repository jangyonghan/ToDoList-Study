export const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const passwordRegEx =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%#?&])[A-Za-z\d@!%*#?&]{8,16}$/;

/**
 * 이메일 유효성 검사 함수
 * @param email - 유효성 검사를 할 이메일 값
 * @returns {boolean} 유효하면 true, 유효하지 않으면 false
 */
export const validateEmail = (email: string): boolean => {
  return emailRegEx.test(email);
};

/**
 * 비밀번호 유효성 검사 함수
 * @param password - 유효성 검사를 할 비밀번호 값
 * @returns {boolean} 유효하면 true, 유효하지 않으면 false
 */
export const validatePassword = (password: string): boolean => {
  return passwordRegEx.test(password);
};

/**
 * 비밀번호와 비밀번호 확인 값이 동일한지 확인하는 함수
 * @param password - 입력한 비밀번호 값
 * @param rePassword - 입력한 비밀번호 확인 값
 * @returns {boolean} 동일하면 true, 동일하지 않으면 false
 */
export const validatePasswordMatch = (
  password: string,
  rePassword: string
): boolean => {
  return password === rePassword;
};
