import { products } from "/products.js"

// ~ search
let search = document.getElementById("search")
let filteredProducts = []
let input = search.value

function handleChange(e) {
   input = e.target.value
   filteredProducts = products.filter((obj) => {
      return obj.name.toLowerCase().includes(input.toLowerCase())
   })
   main();
}
search.oninput = handleChange
search.onchange = handleChange

// ~ products
let productsSection = document.getElementById("products")
let notFound = document.getElementById("not-found")

function main () {
   productsSection.innerHTML ="";
   
   if(filteredProducts.length!==0 ) {
      notFound.style.display = "none"
      showProducts(filteredProducts)
      
   } else if (filteredProducts.length===0 && input) {
      productsSection.innerHTML ="";
      notFound.style.display = "block"
   } else {
      notFound.style.display = "none"
      showProducts(products)
   }
}
main();

function showProducts(products) {
   products.map(({name, brand, price, description, image}, idx) => {
      return (
         `
         <div class="product-card">
            <div class="brand"> ${brand}</div>
            <div class="image">  
               <img src="${image}" alt="product photo">
            </div>
            <div class="name">  ${name} </div>
            <div class="price"> $${price}</div>
            <div class="description"> ${description}</div>
            <div class="see-more"> <a href="/product_page.html?idx=${idx}"> see more </a></div>
         </div>         
         `
      )
   }).forEach((str) => {productsSection.innerHTML += str} )
}