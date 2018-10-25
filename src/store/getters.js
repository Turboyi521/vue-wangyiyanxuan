
export default {
  newHome(state){
    if(!state.homeData.tagList){
      return
    }
    let arr = []
    arr = state.homeData.tagList.slice(0,4)
    return arr
  }
}



