const div = document.querySelector('#card-div')

axios('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data);
    res.data.map((item) => {
        div.innerHTML += `
        <div class="card h-100% m-2" style="width: 16rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">Category: ${item.category}</h5>
                <h5 class="card-title">Title: ${item.title}</h5>
                <p class="card-text">Price: $${item.price}</p>
                <a href="#" class="btn btn-primary">ADD TO CART</a>
            </div>
        </div>
        `;
    });
})
.catch((err) => {
    console.log(err);
});