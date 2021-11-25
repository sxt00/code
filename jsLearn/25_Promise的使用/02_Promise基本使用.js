function foo () {
    return new Promise( (resolve,reject)=> {
        setTimeout( ()=> {
                resolve('success')
                reject('err')
        },3000)
    })
}


foo().then( res =>
    console.log(res),
    err => console.log(err)
)