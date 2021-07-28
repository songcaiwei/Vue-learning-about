<template>
  <div class="axios">
    <h1>这是axios请求页面</h1>
    <input type='text' v-model='city' placeholder="请输入你想查询的国内城市"/>
    <button @click="searchFn(city)">查询</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {

   data:function(){
        return{
            city:""
        }
    },
    methods:{
        async search(locationId){
            let httpUrl = `https://devapi.qweather.com/v7/weather/now?`
            let query = `location=${locationId}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            let res = await axios.get(httpUrl+query)
            let data = res.data
            console.log(data)
            // .then(res=>{
            //   let data = res.data
            //   console.log(data)
            //   })
            
        },
        async searchCity(city){
            let httpUrl = 'https://geoapi.qweather.com/v2/city/lookup?'
            let query  = `location=${city}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            let res = await axios.get(httpUrl+query)
            let data = res.data
            console.log(data)
            let locationId = data.location[0].id
            return locationId
            // .then(res=>{
            //   let data  = res.data
            //   console.log(data)
            //   let locationId = data.location[0].id
            //   callback(locationId)
            // })
        },
         async searchFn(city){
             let locationId = await this.searchCity(city)
             this.search(locationId)
         }
    },
  name: 'Axios',
  components: {
    
  }
}
</script>
