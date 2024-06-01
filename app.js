const div = document.querySelector('#card-div')

axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    
})
.catch((err)=>{
    console.log(err)
})