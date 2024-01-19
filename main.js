let menu = document.getElementById("menu-icone");
let navList = document.querySelector(".nav-items");
let list = document.querySelectorAll("nav-item");
console.log(list);
menu.addEventListener("click", () => {
  navList.classList.toggle("active");
  menu.classList.toggle("fa-times");
});
