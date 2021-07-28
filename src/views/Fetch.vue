<template>
    <div class="fetch">
    <h1>这是fetch请求页面</h1>
    <!-- <button @click="search">天气查询</button> -->
    <input type='text' v-model='city' placeholder="请输入你想查询的国内城市"/>
    <button @click="searchFn(city)">查询</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            city:""
        }
    },
    methods:{
        search:function(locationId){
            let httpUrl = `https://devapi.qweather.com/v7/weather/now?`
            let query = `location=${locationId}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            fetch(httpUrl+query)
            .then((res)=>res.json())
            .then(data=>{console.log(data)})
            
        },
        searchCity:function(city,callback){
            let httpUrl = 'https://geoapi.qweather.com/v2/city/lookup?'
            let query  = `location=${city}&key=1dece7d1a705451daa0e03ed5c9b41c1`
            fetch(httpUrl+query)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data)
                let locationId = data.location[0].id
                callback(locationId)
            })
        },
         searchFn(city){
             this.searchCity(city,this.search)
         }
    }
}
</script>