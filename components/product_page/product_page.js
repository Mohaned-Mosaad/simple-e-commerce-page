import { getParameterValueByName } from "../../index.js";
import { products } from "/products.js";

let tableBody = document.getElementById("table-body")


let idx = getParameterValueByName("idx")
let product = products[idx]
let props = Object.keys(product) 

tableBody.innerHTML += `
   <tr>
      <td class="td-prop">${"image"}</td>
      <td>
         <img src=${product["image"]}>
      </td>
   </tr>
`
for (let prop of props) {
   if(prop !== "image") {
      tableBody.innerHTML += `
         <tr>
            <td class="td-prop">${prop}</td>
            <td>${product[prop]}</td>
         </tr>
      `
   }
}

console.log(props);
