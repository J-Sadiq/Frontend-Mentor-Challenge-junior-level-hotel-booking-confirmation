const btnNav = document.querySelector(".btn-navBar");
const sideBar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const btnClose = document.querySelector(".btn-close");

btnNav.addEventListener("click", function () {
  sideBar.style.display = "grid";
  mainContent.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", function () {
  sideBar.style.display = "none";
  mainContent.style.display = "grid";
});
