//library
import dayjs from 'dayjs';
import { monthList, weekendList } from '../enums';
import { DEFAULT_DATE_FORTMAT, DEFAULT_DATE_TIME_FORMAT_V2 } from 'consts';
import { addZero } from './functions';

export function formatDateSaudiToString(date) {
  //객체 + 유효날짜인지 유효성검사
  if (!(date instanceof Date) || !dayjs(date).isValid()) return;

  // 사우디 날짜
  const saudiDate = dayjs(date).tz('Asia/Riyadh');
  return saudiDate.$d;
}

export function formatDateToString(date) {
  //객체 + 유효날짜인지 유효성검사
  if (!(date instanceof Date) || !dayjs(date).isValid()) return;

  // 사우디 날짜
  const saudiDate = dayjs(date).tz('Asia/Riyadh');
  return saudiDate.toDate();
}

export function dateToString(date) {
  return dayjs(date).format(DEFAULT_DATE_FORTMAT);
}
export function dateSaudiToString(date) {
  return dayjs(date).tz('Asia/Riyadh').format(DEFAULT_DATE_FORTMAT);
}

export const formatDateToStringForWeather = () => {
  // 현재 날짜와 시간을 UTC로 가져옵니다.
  const currentUTCDate = new Date();
  // 사우디 아라비아 시간대의 오프셋 (+3)을 적용합니다.
  const saudiArabiaOffset = 3 * 60; // 분 단위로 변환
  const date = new Date(currentUTCDate.getTime() + saudiArabiaOffset * 60000);

  // 사우디 아라비아 현지 시간 적용
  const year = date.getUTCFullYear();
  const strMonth = monthList[date.getUTCMonth()];
  const dayOfMonth = date.getUTCDate();
  const strWeekend = weekendList[date.getUTCDay()];

  return `${strWeekend} ${dayOfMonth} ${strMonth} ${year}`;
};

export const formatTimeToStringForWeather = () => {
  const initDate = new Date();
  // 현재 날짜와 시간을 UTC로 가져옵니다.
  const currentUTCDate = initDate;
  // 사우디 아라비아 시간대의 오프셋 (+3)을 적용합니다.
  const saudiArabiaOffset = 3 * 60; // 분 단위로 변환
  const date = new Date(currentUTCDate.getTime() + saudiArabiaOffset * 60000);

  let localHour = date.getUTCHours();
  let localMinute = date.getUTCMinutes();

  let amPm;
  if (localHour >= 0 && localHour < 12) {
    amPm = 'AM';
  } else {
    amPm = 'PM';
    if (localHour > 12) {
      localHour -= 12;
    }

    if (localHour < 10) {
      localHour = `0${localHour}`;
    }

    if (localMinute < 10) {
      localMinute = `0${localMinute}`;
    }
  }

  return `Update ${localHour}:${localMinute} ${amPm}`;
};

export const formatTimeToString = (date) => {
  let localHour = date.getHours();
  let localMinute = date.getMinutes();

  let amPm;
  if (localHour >= 0 && localHour < 12) {
    amPm = 'AM';
  } else {
    amPm = 'PM';
    if (localHour > 12) {
      localHour -= 12;
      localHour = `0${localHour}`;
    }

    if (localMinute < 10) {
      localMinute = `0${localMinute}`;
    }
  }

  return `${localHour}:${localMinute} ${amPm}`;
};

export const formatDateToStringForEntry = () => {
  // 현재 날짜와 시간을 UTC로 가져옵니다.
  const currentUTCDate = new Date();
  // 사우디 아라비아 시간대의 오프셋 (+3)을 적용합니다.
  const saudiArabiaOffset = 3 * 60; // 분 단위로 변환
  const date = new Date(currentUTCDate.getTime() + saudiArabiaOffset * 60000);

  // 사우디 아라비아 현지 시간 적용
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const dayOfMonth = date.getUTCDate();
  let localHour = date.getUTCHours();
  let localMinute = date.getUTCMinutes();

  return `Update : ${year}-${addZero(month)}-${addZero(dayOfMonth)} ${addZero(
    localHour
  )}:${addZero(localMinute)}`;
};
