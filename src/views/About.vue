<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>用户：{{$store.state.userModule.user}}</h1>
    <h1>描述：{{$store.getters.description}}</h1>
    <button @click="changeUser">修改用户名称</button>
    <button @click="achangeUsertype">异步修改用户类型</button>


    <h1>这带上命名空间的模块</h1>
    <h1>mallname:{{$store.state.mallModule.mallname}}</h1>
    <h1>description :{{$store.getters['mallModule/description']}}</h1>
    <button @click="changeMallname">修改电商名称</button>
    <button @click="achangeMallType">异步修改电商类型</button>
    <h1>商城的描述信息{{mallDes}}</h1>
     <button @click="setMallname('tmall天猫')">修改电商名称</button>
    <button @click="setType('综合电商')">异步修改电商类型</button>
  </div>
</template>

<script>
import { mapState , mapGetters , mapMutations , mapActions} from 'vuex'
export default {
  mounted(){
    console.log(this)
  },
  computed:{
    ...mapState(['userModule','mallModule']),
    ...mapGetters(['description']),
    ...mapGetters('mallModule',{
      mallDes:'description'
    }),
  },
  methods:{
    changeUser:function(){
      this.$store.commit('setUser','攀枝花高圆圆')
    },
    achangeUsertype:function(){
      this.$store.dispatch('asyncSetType','游戏大佬')
    },
    changeMallname(){
      this.$store.commit('mallModule/setMallname','JD')
    },
    achangeMallType(){
      this.$store.dispatch('mallModule/asyncSetType','综合电商')
    },
    ...mapMutations('mallModule',['setMallname','setType']),
    ...mapActions('mallModule',['asyncSetType'])
  }
}
</script>