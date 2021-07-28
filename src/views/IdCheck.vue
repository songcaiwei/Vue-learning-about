<template>
    <div class="idcheck">
        <h1>获取身份证数据功能</h1>
        <input ref="idCardInput" type="file" name="" id="idCard" @change="uploadIdCard" hidden='hidden'>
        <label for="idCard">
            <img src="../assets/uploadimg.png" alt="">
        </label>
        <hr>
        <img ref='preImg' :src="idCardSrc" alt="" style="width:200px;">
    </div>

</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
    mounted(){
        console.log(this)
    },
    data:function(){
        return {
            idCardSrc:''
        }
    },
    methods:{
        uploadIdCard(){
            //使用浏览器自带的创建图片的接口
            //第一步 使用 ref获取输入框
            // var input  = document.querySelector('#idCard')
            let input = this.$refs.idCardInput
            // console.dir(input)
            //通过URL.createObjectURL()将文件转成对于的url地址
            let url = URL.createObjectURL(input.files[0])
            this.idCardSrc = url
            //获取图片元素
            let img = this.$refs.preImg
            img.addEventListener('load',()=>{
                let base64data = this.getBase64Img()
                // console.log(base64data)
                this.getIdCard(base64data)
            })
        },
        //通过canvas的方法将图片转换成base64位的方法
        getBase64Img(){
            let canvas = document.createElement('canvas')
            let img = this.$refs.preImg
            canvas.width = img.width
            canvas.height = img.width
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img,0,0,img.width,img.height)
            //使用画布生成64位地址的方法
            let dataUrl = canvas.toDataURL('image/png')
            return dataUrl
        },
        getIdCard(imgStr){
            let imgData ={
                imgStr:imgStr
            }
            //  console.log(imgData)
            imgData = qs.stringify(imgData)
            let httpUrl = 'https://lfeid.market.alicloudapi.com/thirdnode/ImageAI/idcardfrontrecongnition'
            let config = {
                headers:{
                "Authorization":"APPCODE 3f71af25daf943dc9347fd3685dd6d96"
                }
            }
            console.log(imgData)
            axios.post(httpUrl,imgData,config)
            .then((res)=>console.log(res))
        }
    }
}
</script>