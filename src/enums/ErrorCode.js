export const ErrorCode = {
  AUTHORIZATION_REQUIRED: 'AUTHORIZATION_REQUIRED',
};

export const errorCodeMethods = {
  getErrorMsg: (key) => {
    switch (key) {
      case ErrorCode.AUTHORIZATION_REQUIRED:
        return '사용자 인증 실패';

      default:
        return '';
    }
  },
};
