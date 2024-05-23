import AxiosInstanceCreator from '@/services/api';
import qs from 'qs';

let chzzkBaseUrl = `https://api.chzzk.naver.com`;
let gameBaseUrl = `https://comm-api.game.naver.com/nng_main`;
const chzzkInstance = new AxiosInstanceCreator({
  baseURL: `${chzzkBaseUrl}/service/v1/lives?size=20&sortType=POPULAR`,
}).create();

export const chzzkApi = {
  async getPopularLiveList() {
    return await chzzkInstance.get('').then((res) => res.data);
  },
};
