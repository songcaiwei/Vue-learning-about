export default {
    state:()=>({
      userinfo:'人菜瘾还大',
      user:'娄底张若昀',
      type:'游戏菜鸡'
    }),
    getters:{
      description:function(state,getters,rootstate){
        console.log(getters)
        console.log(rootstate)
        return state.user+state.type
      }
    },
    mutations:{
      setUser:function(state,payload){
        state.user = payload
      },
      setType:function(state,payload){
        state.type = payload
      }
    },
    actions:{
      asyncSetType:function(content,payload){
        setTimeout(()=>{
          content.commit('setType',payload)
        },3000)
      }
    }
  }