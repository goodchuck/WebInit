// 타입에 맞게 데이터를 문자열로 변환하는 함수
export const formatJsonToDescription = (value: any): string => {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value.toString();
  }
  if (Array.isArray(value)) {
    return value.map((item) => JSON.stringify(item)).join(', ');
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return '';
};
