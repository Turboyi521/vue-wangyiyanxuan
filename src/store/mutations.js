/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA
} from './mutations-type'
export default {
  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },

  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_TOPICDATA] (state, {topicData}) {
    state.topicData = topicData
  },
}
