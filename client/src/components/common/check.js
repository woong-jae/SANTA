export function isPassword(asValue) {
  var regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; // 8 ~ 15 특수문자, 영문, 숫자
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
