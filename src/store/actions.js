import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutations-type'
import {
  reqHomeData,
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
  async getNavData ({commit},callback) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },





}
