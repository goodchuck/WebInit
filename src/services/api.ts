import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";
import { ErrorCode } from "../enums"; // 경로가 올바른지 확인하세요

// services
import { cookieStorage, COOKIE_ACCESS_TOKEN } from "../services/cookie";

export const extractErrorMsg = (error: AxiosError): string => {
    if (!error.response) {
        return "서버에 접속할 수 없습니다";
    } else {
        return error.response.data.message || "에러 발생";
    }
};

const source = axios.CancelToken.source();

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
            (config: InternalAxiosRequestConfig) => {
                const token = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

                if (!config.headers["Authorization"]) {
                    if (token && token !== "undefined" && token !== undefined) {
                        Object.assign(config.headers, {
                            Authorization: `Bearer ${token}`,
                        });
                    }
                }

                if (!config.headers["Content-Type"]) {
                    Object.assign(config.headers, {
                        "Content-Type": "application/json",
                    });
                }

                return config;
            }
        );

        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                if (res.data.code && res.data.code !== 200) {
                    throw new Error(res.data.message);
                }

                return res;
            },

            (error: AxiosError) => {
                if (axios.isCancel(error)) {
                    clearUserToken();
                    throw error;
                } else {
                    if (error.response) {
                        if (
                            error.response.status ===
                            ErrorCode.AUTHORIZATION_REQUIRED
                        ) {
                            clearUserToken();
                            return;
                        }

                        const result = {
                            ...error.response.data,
                            message: extractErrorMsg(error),
                        };

                        throw result;
                    } else {
                        const result = {
                            message: extractErrorMsg(error),
                        };

                        throw result;
                    }
                }
            }
        );
    }

    public create(): AxiosInstance {
        return this.instance;
    }
}

export default AxiosInstanceCreator;
