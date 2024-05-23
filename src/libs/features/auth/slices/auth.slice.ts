// base
import { createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '@/types';
import { AUTH_SLICE_NAME } from '../action/auth.action';

// thunks
import { userLogin, userLogout } from '../thunks/auth.thunk';

interface AuthIntialState {
  userInfo: IUserInfo;
  isLogin: boolean;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  verifyResult: boolean;
  temporaryPaswdStatus: boolean;
  userId: string;
}

// IUserInfo의 초기 상태 정의
const initialUserInfo: IUserInfo = {
  id: '',
  password: '',
  username: '',
  email: '',
  fullName: '',
  profilePicture: '',
  phoneNumber: '',
  address: '',
  accountStatus: '',
  emailVerified: false,
  phoneVerified: false,
  accountCreatedDate: '',
  lastLogin: '',
  loginAttempts: 0,
  lastActivity: '',
  recentActivities: [],
  loginHistory: [],
  role: '',
  permissions: [],
  settings: {},
  subscriptions: [],
  paymentMethods: [],
  orderHistory: [],
  supportTickets: [],
};

// initialState
const initialState: AuthIntialState = {
  userInfo: initialUserInfo,
  isLogin: false,
  status: 'idle',
  verifyResult: false,
  temporaryPaswdStatus: false,
  userId: '',
};

// createSlice
const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    isLogout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (!action.payload) return;
        const { isLogin, userInfo, temporaryPaswdStatus, userId } =
          action.payload;

        state.status = 'succeeded';
        state.isLogin = isLogin;
        state.userInfo = userInfo;
        state.temporaryPaswdStatus = temporaryPaswdStatus;
        state.userId = userId;
      })
      .addCase(userLogin.rejected, (state) => {
        return initialState;
      })
      .addCase(userLogout.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
