import AxiosInstanceCreator from "@/services/api";
import qs from "qs";

const authInstance = new AxiosInstanceCreator({
    baseURL: process.env.REACT_APP_API_URL,
}).create();

export const authApi = {
    async fetchLogin(data) {
        return await authInstance
            .post(`/auth/login`, JSON.stringify(data))
            .then((res) => res.data);
    },
};
