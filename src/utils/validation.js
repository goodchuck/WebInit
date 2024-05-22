/**
 * TODO
 * 1. 프로젝트에서 자주 사용하는 정규식을 모아두는곳
 * 아래의 정규식은 샘픙
 */

// 완성형 한글, 영어 체크 정규식
export const regExpDefault = /^[가-힣a-zA-Z\s]+$/;

// 영어, 숫자만 가능한 정규식
export const regExpId = /^[a-zA-Z0-9\s]+$/;

// 비밀번호 정규식
export const _regExpPassword = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}\s]+$/;
export const regExpPassword =
  /^(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[a-z\d@#$%^&+=!]{8,15}$/;

// 숫자 정규식
export const regExpNumber = /^[0-9\s]+$/;

// 도로명 번호 정규식
export const regExpRoadNumber = /[^0-9^-]/g;

// 핸드폰번호 정규식
export const regExpPhone = /^\d{3}-\d{3,4}-\d{4}$/;

// 일반 전화번호 정규식
export const regExpNormalPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 이메일 정규식
export const regExpEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// 특수문자
export const regExpEmoji = /[~!@#$%^&*()_+|<>?:{}]/;
