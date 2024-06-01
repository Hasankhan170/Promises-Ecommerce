const div = document.querySelector('#card-div')

axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data)
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card m-2" style="width: 16rem;">
        <img width= "1000px" src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
        <h5 class="card-title">category : ${item.category}</h5>
        <h5 class="card-title">Title : ${item.title}</h5>
        <p class="card-text">Price : ${item.price}</p>
        <a href="#" class="btn btn-primary">ADD TO CARD</a>
  </div>
</div>
        
        `
    })
    
})
.catch((err)=>{
    console.log(err)
})