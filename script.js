const btnNav = document.querySelector(".btn-navBar");
const sideBar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const btnClose = document.querySelector(".btn-close");

btnNav.addEventListener("click", function () {
  sideBar.classList.add("show");
  btnClose.classList.add("show");
});

btnClose.addEventListener("click", function () {
  sideBar.classList.remove("show");
  btnClose.classList.remove("show");
});
