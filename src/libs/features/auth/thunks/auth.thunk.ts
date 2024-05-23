// base
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// api
import { authApi } from '../apis/auth.api';

// action
import { actions } from '../action/auth.action';

// service
import { COOKIE_KEYS, cookieStorage } from '@/services/cookie';
import { ILogin } from '@/types';

/**
 * 로그인
 */
export const userLogin = createAsyncThunk(
  actions.AUTH_USER_LOGIN,
  async (data: ILogin, { fulfillWithValue, rejectWithValue }) => {
    try {
      cookieStorage.removeCookie(COOKIE_KEYS.ACCESS_TOKEN);
      cookieStorage.removeCookie(COOKIE_KEYS.REFRESH_TOKEN);

      // const res = await authApi.fetchLogin(data);
      const res = await authApi.fetchLoginTest(data);

      const {
        ACCESS_TOKEN,
        REFRESH_TOKEN,
        userId,
        temporaryPaswdStatus,
        userInfo,
      } = res;

      if (!ACCESS_TOKEN) {
        toast('Available after administrator sign-up approval.');
        return;
      }

      cookieStorage.setCookie(COOKIE_KEYS.ACCESS_TOKEN, ACCESS_TOKEN);
      cookieStorage.setCookie(COOKIE_KEYS.REFRESH_TOKEN, REFRESH_TOKEN);

      return fulfillWithValue({
        isLogin: true,
        userInfo,
        temporaryPaswdStatus,
        userId,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/**
 * 로그아웃
 */
export const userLogout = createAsyncThunk(
  actions.AUTH_USER_LOGOUT,
  (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      // save Id 저장 위해 임시 주석
      // clearUserToken();
      console.log('userLogout chunk');
      cookieStorage.removeCookie(COOKIE_KEYS.ACCESS_TOKEN);
      cookieStorage.removeCookie(COOKIE_KEYS.REFRESH_TOKEN);

      return fulfillWithValue({});
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/**
 * 회원가입
 */
export const userSignUp = createAsyncThunk(
  actions.AUTH_USER_SIGNUP,
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await authApi.fetchSignUp(data);
      console.log('=====signup===== : ', res);

      if (!res) return;

      return fulfillWithValue(res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/**
 * 비밀번호 변경
 */
export const postPassword = createAsyncThunk(
  actions.POST_PASSWORD,
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await authApi.postPassword(data);
      console.log('=====post Password===== : ', res);
      if (!res) return;

      return fulfillWithValue(res.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
