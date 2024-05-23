import { formatTimeToString } from './formatDateToString';

export const textAbbreviation = (str) => {
  let length = 13; // 표시할 글자수 기준
  // let str = '자바스크립트문자열테스트중입니다.';
  if (!str) return '';

  if (str.length > length) {
    str = str.substr(0, length - 2) + '...';
  }
  return str;
};
export const formattedDateMonthYear = (dateString) => {
  const dateObj = new Date(dateString);

  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const day = ('0' + dateObj.getDate()).slice(-2);
  const month = months[dateObj.getMonth()];
  const year = (dateObj.getFullYear() % 100).toString().padStart(2, '0');

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};
export const formattedDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${month}.${day}.${year} (${hours}:${minutes})`;

  return formattedDate;
};

export const removeRole = (str) => {
  if (str) return;

  return str.replace('ROLE_', '');
};

export const EXCEL_TYPE =
  'application/vnd.ms-excel;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const addComma = (num) => {
  if (!num) return 0;

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const removeComma = (num) => {
  if (!num) return '';

  return num.replace(/,/g, '');
};

export const maskingName = function (name, isSort = true) {
  if (!name) return;

  if (name.length > 2) {
    const originName = name.trim().split('');

    if (isSort && originName.length > 3) {
      return `${originName[0]}*${originName[originName.length - 1]}`;
    }

    originName.forEach(function (splitName, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });

    const joinName = originName.join();

    return joinName.replace(/,/g, '');
  } else {
    const pattern = /.$/;
    return name.replace(pattern, '*');
  }
};

export const maskingPhone = (phone) => {
  if (phone === null || !phone) return '-';

  const length = phone.split('').length < 13 ? 2 : 3;

  return (
    phone.substring(0, length) +
    '-' +
    '****' +
    '-' +
    phone.substring(phone.length - 4, phone.length)
  );
};

export const maskingAllPhone = (phone) => {
  if (phone === null || !phone) return '-';

  return phone.substring(0, 3) + '-' + '****' + '-' + '****';
};

export const maskingText = (strName) => {
  if (strName.length > 2) {
    const originName = strName.split('');
    originName.forEach(function (name, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });
    const joinName = originName.join();
    return joinName.replace(/,/g, '');
  } else {
    const pattern = /.$/; // 정규식
    return strName.replace(pattern, '*');
  }
};

export const addZero = (text) => {
  const txt = text.toString();
  if (txt.length > 1) return text;
  return '0' + text;
};

export const addProtocol = (url) => {
  const protocolExp = new RegExp('^(https|http?:\\/\\/)');
  if (protocolExp.test(url)) return url;
  return `https://${url}`;
};

export const addHyphen = (phoneNum) => {
  if (!phoneNum) return '';

  if (phoneNum.length === 8) {
    return phoneNum.replace(/^(\d{4})(\d{4})$/, `$1-$2`);
  }

  if (phoneNum.length === 10) {
    return phoneNum.replace(/^(\d{2})(\d{4})(\d{4})$/, `$1-$2-$3`);
  }

  return phoneNum.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const removeHyphen = (phoneNum) => {
  if (!phoneNum) return '';
  return phoneNum.replace(/-/g, '');
};

export const addSlipHyphen = (slipNo) => {
  if (!slipNo) return;
  return slipNo.slice(0, 2) + '-' + slipNo.slice(2, 6) + '-' + slipNo.slice(6);
};

export const addReceiptHyphen = (str) => {
  return str.slice(0, 8) + '-' + str.slice(8, 12) + '-' + str.slice(12);
};

export const addAplfmHyphen = (str) => {
  if (!str) return '';

  return str.slice(0, 4) + '-' + str.slice(4, 8) + '-' + str.slice(8);
};

export const handleCalling = (callNumber) => {
  return (window.location.href = `tel:${callNumber}`);
};

export const handleMessage = (callNumber) => {
  return (window.location.href = `sms:${callNumber}`);
};

export const randomNumBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const convertDataUrlToFile = (name, canvas) => {
  const dataURL = canvas.toDataURL('image/png');
  const decodedURL = atob(dataURL.split(',')[1]);
  const uint8Array = new Uint8Array(decodedURL.length);

  for (let i = 0; i < decodedURL.length; i++) {
    uint8Array[i] = decodedURL.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: 'image/png' });

  return new File([blob], `${name}.png`, { type: 'image/png' });
};

export const convertDataUrlToExcel = (excel) => {
  const blob = new Blob([excel], {
    type: EXCEL_TYPE,
  });

  return new File([blob], excel.name, {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
};

export const removeDuplicates = (arr) => {
  return arr.reduce((uniqueArr, currentItem) => {
    if (
      !uniqueArr.some(
        (u) =>
          u.SORT_SEQNO === currentItem.SORT_SEQNO &&
          u.delv_SLIP_NO === currentItem.delv_SLIP_NO,
      )
    ) {
      uniqueArr.push(currentItem);
    }

    return uniqueArr;
  }, []);
};

export const menuTree = (menu) => {
  const menuMap = {};
  const arr = [];

  menu.forEach((item) => {
    const { MENUID, ...rest } = item;

    menuMap[MENUID] = { ...rest, subMenu: [] };
  });

  menu.forEach((item) => {
    const { MENUID, UP_MENUID } = item;

    if (UP_MENUID && menuMap[UP_MENUID]) {
      menuMap[UP_MENUID].subMenu.push(menuMap[MENUID]);
    } else {
      arr.push(menuMap[MENUID]);
    }
  });

  return arr;
};

export const blobToImage = async (baseUrl) => {
  const url = process.env.REACT_APP_API_URL + `/v1/api`;

  const imgResult = await fetch(`${url}/users/downloads/${baseUrl}`);
  return window.URL.createObjectURL(await imgResult.blob());
};

export const handleInArray = (arr, target) => {
  return arr.some((a) => a === target);
};

export const handlePrivatePage = (list, pathname) => {
  return handleInArray(list, pathname);
};

export const checkingSlipNo = (barcode) => {
  return parseInt(barcode.substring((0, 1), 10) > 1);
};

export const inputHyphenNum = (value) => {
  let addHyphenNum = '';
  const inputNum = value.replace(/-/g, '');

  if (isNaN(inputNum)) {
    return;
  }

  if (inputNum.startsWith('02')) {
    addHyphenNum += inputNum.slice(0, 2) + '-';

    if (inputNum.length > 2) {
      addHyphenNum += inputNum.slice(2, 6) + '-';
    }

    if (inputNum.length > 6) {
      addHyphenNum += inputNum.slice(6);
    }
  } else {
    if (inputNum.length > 2) {
      addHyphenNum += inputNum.slice(0, 3) + '-';
    }

    if (inputNum.length > 3) {
      addHyphenNum += inputNum.slice(3, 7) + '-';
    }

    if (inputNum.length > 7) {
      addHyphenNum += inputNum.slice(7);
    }
  }

  console.log('== addHyphenNum == : ', addHyphenNum);

  return addHyphenNum;
};

export const checkingEqual = (arr) => {
  const isEqual = arr.map(({ isEqual }) => {
    if (!isEqual) return true;

    return false;
  })[0];

  return isEqual;
};

export const compareKeys = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const uniqueToObj1 = keys1.filter((k) => !keys2.includes(k));
  const uniqueToObj2 = keys2.filter((k) => !keys1.includes(k));
  const commonKeys = keys1.filter((k) => keys2.includes(k));

  console.log('-----------------------------------');
  console.log('== uniqueToObj1 == : ', uniqueToObj1);
  console.log('== uniqueToObj2 == : ', uniqueToObj2);
  console.log('== commonKeys == : ', commonKeys);
  console.log('-----------------------------------');

  return {
    uniqueToObj1,
    uniqueToObj2,
    commonKeys,
  };
};

export const getCircularReplacer = () => {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export const hexToRgb = (hex) => {
  // Remove the hash (#) character if it's included
  hex = hex.replace(/^#/, '');

  // Parse the hex string into an integer
  const bigint = parseInt(hex, 16);

  // Extract the RGB values
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGB values as an object
  return { r, g, b };
};

export const mptwItemType = (list, type, icon) => {
  return list
    .filter((item) => item.type === type)
    .map((item) => ({
      ...item,
      seq: item.ord,
      key: item['short-name'].toLowerCase(),
      subTitle: item['short-name'],
      shortTitle: item['short-name'],
      thumbUrl: icon[item['short-name'].toLowerCase()],
    }));
};

export const createSelectOptions = (items) => {
  console.log('=== createSelectOptions ===', items);
  if (Array.isArray(items)) {
    return items.map((item) => ({
      ...item,
      label: item.name,
      value: item.name,
    }));
  } else {
    if (typeof items === 'object') {
      if (items.result) {
        items.result.map((item) => ({
          ...item,
          label: item.name,
          value: item.name,
        }));
      }
    }
  }
  return [];
};

export const findItemByName = (array, name) => {
  return array.find((item) => item.name === name);
};

export const getRandomNumber = (min, max, includeDecimal = false) => {
  if (includeDecimal) {
    // 소수점을 포함한 랜덤 숫자 생성
    return Math.random() * (max - min) + min;
  } else {
    // 정수형 랜덤 숫자 생성
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export const tableIndexCalculator = (total, index, page) => {
  return total - index - 10 * page;
};

export const getRandomList = (size, min, max) => {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push(getRandomNumber(min, max));
  }
  return list;
};

/**
 * weather 전용
 * @param resultList
 * @returns {{}}
 */
export const formatWeatherStatistics = (resultList) => {
  const formatStatistics = {};

  resultList?.forEach((statistics, index) => {
    const headers = Object.keys(statistics);

    headers.forEach((value) => {
      const list = formatStatistics[value] || [];
      let setData = `${statistics[value] || 0}`;
      if (value.includes('airTime')) {
        const date = new Date(statistics[value]);
        setData = formatTimeToString(date);
      }
      list.push(setData);
      formatStatistics[value] = list;
    });
  });
  return formatStatistics;
};

export const getExtensionOfFilename = (filename) => {
  const fileLen = filename.length;

  const lastDot = filename.lastIndexOf('.');

  const fileExt = filename
    .substring(lastDot + 1, fileLen)
    .toLowerCase()
    .toString();

  return fileExt;
};
export const generateRandomHexCode = () => {
  const characters = '0123456789ABCDEF';
  let hexCode = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    hexCode += characters[randomIndex];
  }

  return hexCode;
};
