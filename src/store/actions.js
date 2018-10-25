import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutations-type'
import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'

export default {
  async getHomeData ({commit}, callback) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
      callback && callback()
    }
  },
  async getTopicData ({commit}) {
      const result = await reqTopicData()
    /*  console.log(result, 'xxxxxxxxxxxxxxxxxxxxxxxx')*/
      if (result.code === 0) {
        const topicData = result.data
        commit(RECEIVE_TOPICDATA, {topicData})
      }
    },





}
