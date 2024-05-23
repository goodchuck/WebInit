import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { ErrorCode } from '../enums'; // 경로가 올바른지 확인하세요

// services
import { cookieStorage, COOKIE_KEYS } from '../services/cookie';

// 에러 메시지를 추출하는 함수
export const extractErrorMsg = (error: AxiosError): string => {
  if (!error.response) {
    return '서버에 접속할 수 없습니다';
  } else {
    return (error.response.data as any).message || '에러 발생';
  }
};

const source = axios.CancelToken.source();

// 사용자 토큰을 지우는 함수
export const clearUserToken = (): void => {
  cookieStorage.clearAllCookie();
};

class AxiosInstanceCreator {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.defaults.cancelToken = source.token;
    this.interceptors();
  }

  private interceptors(): void {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = cookieStorage.getCookie(COOKIE_KEYS.ACCESS_TOKEN);

        if (!config.headers['Authorization']) {
          if (token && token !== 'undefined' && token !== undefined) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
        }

        if (!config.headers['Content-Type']) {
          config.headers['Content-Type'] = 'application/json';
        }

        return config;
      },
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse): AxiosResponse => {
        if ((res.data as any).code && (res.data as any).code !== 200) {
          throw new Error((res.data as any).message);
        }

        return res;
      },

      (error: AxiosError): Promise<AxiosError> => {
        if (axios.isCancel(error)) {
          clearUserToken();
          return Promise.reject(error);
        } else {
          if (error.response) {
            if (error.response.status === ErrorCode.AUTHORIZATION_REQUIRED) {
              clearUserToken();
              return Promise.reject(error);
            }

            const result = {
              ...error.response.data,
              message: extractErrorMsg(error),
            };

            return Promise.reject(result);
          } else {
            const result = {
              message: extractErrorMsg(error),
            };

            return Promise.reject(result);
          }
        }
      },
    );
  }

  public create(): AxiosInstance {
    return this.instance;
  }
}

export default AxiosInstanceCreator;
