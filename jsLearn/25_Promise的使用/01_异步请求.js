

function requestData(url,successCallback,failCallback) {


    setTimeout( ()=> {
        if(url === '123') {
        successCallback('success')
        }else{
            failCallback('error')
        }

    },3000)
}

requestData('12',res => console.log(res),err => console.log(err))