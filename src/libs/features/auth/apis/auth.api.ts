import AxiosInstanceCreator from '@/services/api';
import { ILogin, IResponseLogin, IUserInfo } from '@/types';
import { sleep } from '@/utils/timer';
import qs from 'qs';

const authInstance = new AxiosInstanceCreator({
  baseURL: `${process.env.REACT_APP_API_URL}/v1/api`,
}).create();

const dummyUserInfo: IUserInfo = {
  id: '12345',
  password: 'password123',
  username: 'johndoe',
  email: 'johndoe@example.com',
  fullName: 'John Doe',
  profilePicture: 'https://example.com/profile/johndoe.jpg',
  phoneNumber: '+1-234-567-8901',
  address: '123 Main St, Anytown, USA',
  accountStatus: 'active',
  emailVerified: true,
  phoneVerified: true,
  accountCreatedDate: '2022-01-01T00:00:00Z',
  lastLogin: '2022-05-20T15:00:00Z',
  loginAttempts: 1,
  lastActivity: '2022-05-20T15:00:00Z',
  recentActivities: ['Logged in', 'Viewed dashboard', 'Updated profile'],
  loginHistory: [
    { ip: '192.168.1.1', date: '2022-05-20T15:00:00Z' },
    { ip: '192.168.1.2', date: '2022-05-19T14:00:00Z' },
  ],
  role: 'user',
  permissions: ['read', 'write'],
  settings: {
    theme: 'dark',
    notifications: true,
  },
  subscriptions: [
    {
      plan: 'basic',
      startDate: '2022-01-01T00:00:00Z',
      endDate: '2023-01-01T00:00:00Z',
    },
  ],
  paymentMethods: [{ type: 'credit card', lastFour: '1234', expiry: '12/23' }],
  orderHistory: [
    {
      orderId: 'order123',
      status: 'delivered',
      date: '2022-05-15T12:00:00Z',
    },
  ],
  supportTickets: [
    {
      ticketId: 'ticket123',
      status: 'open',
      createdDate: '2022-05-10T10:00:00Z',
    },
  ],
};

export const authApi = {
  async fetchLogin(data) {
    return await authInstance
      .post(`/auth/login`, JSON.stringify(data))
      .then((res) => res.data);
  },

  async fetchLoginTest(data: ILogin) {
    await sleep(2000);
    const item: IResponseLogin = {
      ACCESS_TOKEN: 'ATTest',
      REFRESH_TOKEN: 'RFTest',
      userId: 'testUser',
      temporaryPaswdStatus: data.remember,
      userInfo: dummyUserInfo,
    };
    return item;
  },

  /**
   * 회원가입
   * @param {username, password, roles, mobile, preferLang, nationalId, companyId, designationId, birthDate, iqamaNo, bloodType, agreement} data
   * @returns
   */

  async fetchSignUp(data) {
    return await authInstance
      .post(`/auth`, JSON.stringify(data))
      .then((res) => res.data);
  },

  /**
   * 토큰 재발급
   * TODO: 나중에 header 넣는 방식 로직구현해야함
   * @param {*} data
   * @returns
   */
  async getToken(data) {
    return await authInstance.get('/token', data).then((res) => res.data);
  },

  /**
   * 비밀번호 변경
   * @param {userId, currentPassword,newPassword} data
   * @returns
   */
  async postPassword(data) {
    return await authInstance
      .post(`/auth/passwd`, data)
      .then((res) => res.data);
  },

  /**
   * 관리자 승인 대기 리스트 조회
   * @param {company, keyword} data
   * @returns
   */
  async getAuth(data) {
    return await authInstance
      .get(`/auth/approval?${qs.stringify(data)}`)
      .then((res) => res.data);
  },

  /**
   * 관리자 승인 (개별,단체)
   * @param {userId, status, mobilization} data
   * @returns
   */
  async postApproval(data) {
    return await authInstance
      .post(`/auth/approval`, JSON.stringify(data))
      .then((res) => res.data);
  },

  /**
   * 관리자 승인 거절 (개별,단체)
   * @param {userId, status} data
   * @returns
   */
  async postReject(data) {
    return await authInstance
      .post(`/auth/approval/reject`, JSON.stringify(data))
      .then((res) => res.data);
  },
};
