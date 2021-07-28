<template>
    <div class="ajax">
    <h1>这是ajax请求页面</h1>
    <!-- <button @click="search">天气查询</button> -->
    <input type='text' v-model='city' placeholder="请输入你想查询的国内城市"/>
    <button @click="searchFn(city)">ajax查询</button>
    </div>
</template>

<script>
import ajax from '../assets/js/ajax';

export default {
    data:function(){
        return{
            city:""
        }
    },
    methods:{
        // search:function(locationId){
        //     let httpUrl = `https://devapi.qweather.com/v7/weather/now?`
        //     let query = `location=${locationId}&key=1dece7d1a705451daa0e03ed5c9b41c1`
        //     ajax.get(httpUrl+query,data=>{
        //         console.log(data)
        //     })
            
        // },
        search:function(locationId){
            let httpUrl = `https://devapi.qweather.com/v7/weather/now?`
            let query = `location=${locationId}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            ajax.pGet(httpUrl+query)
            .then((data)=>{
                console.log(data)
            })
            
        },
        // searchCity:function(city,callback){
        //     let httpUrl = 'https://geoapi.qweather.com/v2/city/lookup?'
        //     let query  = `location=${city}&key=1dece7d1a705451daa0e03ed5c9b41c1`
        //     ajax.get(httpUrl+query,data=>{
        //         console.log(data)
        //         let locationId = data.location[0].id
        //         callback(locationId)
        //     })
        // },
        searchCity:function(city,callback){
            let httpUrl = 'https://geoapi.qweather.com/v2/city/lookup?'
            let query  = `location=${city}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            ajax.pGet(httpUrl+query)
                .then((data)=>{
                    console.log(data)
                    let locationId = data.location[0].id
                    callback(locationId)
                }).catch((res)=>{
                    console.log(res)
                })
        },
         searchFn(city){
             this.searchCity(city,this.search)
         }
    }
}
</script>