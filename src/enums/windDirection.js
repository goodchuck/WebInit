/**
 * 각도별 방향 정리
 * @author TW
 */
const windDirection = [
  { value: 'North', limit: 22.5 },
  { value: 'Northeast', limit: 67.5 },
  { value: 'East', limit: 112.5 },
  { value: 'Southeast', limit: 157.5 },
  { value: 'South', limit: 202.5 },
  { value: 'Southwest', limit: 247.5 },
  { value: 'West', limit: 292.5 },
  { value: 'Northwest', limit: 377.5 },
];

export const findWindDirectionByAngle = (angle) => {
  let result;
  for (let i = 0; i < windDirection.length; i++) {
    const { value, limit } = windDirection[i];
    if (Number(angle) <= Number(limit)) {
      result = value;
      break;
    }
  }

  if (!result) result = windDirection[0].value;
  return result;
};
