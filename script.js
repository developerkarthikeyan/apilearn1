
let container=document.querySelector('.container');
const url="https://dummyjson.com/products";
async function gadjets(){
    const url="https://dummyjson.com/products";
   const request=await fetch(url);
   const response=await request.json();
   console.log(response.products);
   const arr=response.products;
   for(let i=0;i<arr.length;i++){
    let product=arr[i]
   
// arr.forEach(product =>{

let template=`       <div class="card" style="width: 250px; ">
<img src="${product.thumbnail}" class="card-img-top rounded mx-auto d-block" alt="...">
<div class="card-body">
  <h5 class="card-title">${product.title}</h5>
  <h5 class="card-text">${product.brand}</h5>
  <p class="card-text">${product.description.slice(0,50)}...></p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">price ${product.price}</li>
  <li class="list-group-item"> Rating ${product.rating}</li>
</ul>
</div>`
    container.innerHTML+=template;
   
}};


gadjets()