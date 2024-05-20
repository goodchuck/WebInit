import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const cookieStorage = {
  setCookie: (key, value, options) => {
    return cookies.set(key, value, {
      path: '/',
      secure: process.env.REACT_APP_BUILD_MODE === 'prod' ? true : false,
      sameSite: 'Lax',
      ...options
    });
  },

  getCookie: (key) => {
    return cookies.get(key);
  },

  removeCookie: (key) => {
    return cookies.remove(key, { path: '/' });
  },

  clearAllCookie: () => {
    cookies.remove(COOKIE_ACCESS_TOKEN, { path: '/' });
    cookies.remove(COOKIE_REFRESH_TOKEN, { path: '/' });
    cookies.remove(COOKIE_SAVE_USER_ID, { path: '/' });
    cookies.remove(COOKIE_SAVE_WORKER_ID, { path: '/' });
    cookies.remove(COOKIE_SAVE_TYPE, { path: '/' });
    cookies.remove(COOKIE_CERT, { path: '/' });
    cookies.remove(COOKIE_MOBILE, { path: '/' });
    cookies.remove(COOKIE_LANGUAGE, { path: '/' });
    cookies.remove(COOKIE_USER_FILE_ID, { path: '/' });
    cookies.remove(COOKIE_WORKER_FILE_ID, { path: '/' });
  }
};

const COOKIE_BASE_NAME = '4s';

export const COOKIE_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_acst`;
export const COOKIE_REFRESH_TOKEN = `${COOKIE_BASE_NAME}_rfst`;
export const COOKIE_SAVE_USER_ID = `${COOKIE_BASE_NAME}_suid`;
export const COOKIE_SAVE_WORKER_ID = `${COOKIE_BASE_NAME}_swid`;
export const COOKIE_SAVE_TYPE = `${COOKIE_BASE_NAME}_type`;
export const COOKIE_CERT = `${COOKIE_BASE_NAME}_cert`;
export const COOKIE_MOBILE = `${COOKIE_BASE_NAME}_mobile`;
export const COOKIE_LANGUAGE = `${COOKIE_BASE_NAME}_language`;
export const COOKIE_USER_FILE_ID = `${COOKIE_BASE_NAME}_userFileId`;
export const STORAGE_LOCAL_COLLAPSED = `${COOKIE_BASE_NAME}_collapsed`;
export const STORAGE_LOCAL_MENU_COLLAPSED = `${COOKIE_BASE_NAME}_menu_collapsed`;
export const STORAGE_LOCAL_MENU_COLLAPSED_KEY = `${COOKIE_BASE_NAME}_menu_collapsed_key`;
export const COOKIE_WORKER_FILE_ID = `${COOKIE_BASE_NAME}_workerFileId`;
