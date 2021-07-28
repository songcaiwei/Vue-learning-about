export default  {
    namespaced:true,
    state:()=>({
        mallname:'MI',
        type:'智能家电'
    }),
    getters:{
        description:function(state){
            return state.mallname+state.type
        }
    },
    mutations:{
        setMallname:function(state,payload){
            state.mallname = payload
        },
        setType:function(state,payload){
            state.type = payload
        }
    },
    actions:{
        asyncSetType:function(content,payload){
            setTimeout(()=>{
                content.commit('setType',payload)
            },1000)
        }
    }
}