function get(url,callback){
    let xhr  = new XMLHttpRequest()
    xhr.open('get',url)
    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            let data = JSON.parse(xhr.response)
            callback(data)
        }
    }
}

function pGet(url){
    return new Promise((reslove,reject)=>{

        let xhr  = new XMLHttpRequest()
        xhr.open('get',url)
        xhr.send()
        let state = 'pending'
        setTimeout(()=>{
            var errObj ={
                state: '请求超时',
                error: '出错了',
                xhr
            }
            reject(errObj)
        },1000)
        xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            let data = JSON.parse(xhr.response)
            state = 'fulfill'
            reslove(data)
        }
        if(xhr.readyState == 4 && xhr.status == 0){
            var errObj ={
                state: '网络阻塞',
                error: '出错了',
                xhr
            }
            reject(errObj)
        }
    }
    })
    
}

export default {
    get ,pGet
}