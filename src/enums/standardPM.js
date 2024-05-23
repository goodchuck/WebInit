/**
 * 초미세먼지 기준
 * @author TW
 * 기준 변경 가능성 O
 */
const standardPM25 = [
  { value: 'Good', limit: 12, color: '#00cd00' },
  { value: 'Moderate', limit: 35, color: '#c99b03' },
  { value: 'Unhealthy for Sensitive Groups', limit: 55, color: '#ff7d0f' },
  { value: 'Unhealthy', limit: 150, color: '#ff0000' },
  { value: 'Very Unhealthy', limit: 250, color: '#9a3266' },
  { value: 'Hazardous', limit: 9999, color: '#832131' },
];

/**
 * 미세먼지 기준
 * @author TW
 * 기준 변경 가능성 O
 */
const standardPM10 = [
  { value: 'Good', limit: 54, color: '#00cd00' },
  { value: 'Moderate', limit: 154, color: '#c99b03' },
  { value: 'Unhealthy for Sensitive Groups', limit: 254, color: '#ff7d0f' },
  { value: 'Unhealthy', limit: 354, color: '#ff0000' },
  { value: 'Very Unhealthy', limit: 424, color: '#9a3266' },
  { value: 'Hazardous', limit: 9999, color: '#904747' },
];

export const findStandardPM10ByNumberValue = (numberValue) => {
  for (let i = 0; i < standardPM10.length; i++) {
    const { value, limit } = standardPM10[i];
    if (Number(numberValue) <= Number(limit)) return value;
  }
};

export const findStandardPM10ColorByNumberValue = (numberValue) => {
  for (let i = 0; i < standardPM10.length; i++) {
    const { limit, color } = standardPM10[i];
    if (Number(numberValue) <= Number(limit)) return color;
  }
};

export const findStandardPM25ByNumberValue = (numberValue) => {
  for (let i = 0; i < standardPM25.length; i++) {
    const { value, limit } = standardPM10[i];
    if (Number(numberValue) <= Number(limit)) return value;
  }
};

export const findStandardPM25ColorByNumberValue = (numberValue) => {
  for (let i = 0; i < standardPM25.length; i++) {
    const { limit, color } = standardPM10[i];
    if (Number(numberValue) <= Number(limit)) return color;
  }
};
