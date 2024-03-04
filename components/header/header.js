let navbar = document.getElementById("navbar")
console.log(navbar);
let button = document.querySelector(".burger")
button.onclick = function () {
   button.classList.toggle("active")
   navbar.classList.toggle("active")
}
