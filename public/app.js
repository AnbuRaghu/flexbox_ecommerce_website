let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";

const menuToggle = () => {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
};

// for product gallery

let productImg = document.getElementById("productImg");
let smallImg = document.querySelectorAll(".small-img"); ///it is an array
console.log(smallImg);

// smallImg[0].onclick = function () {
//   productImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function () {
//   productImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   productImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   productImg.src = smallImg[3].src;
// };

//to loop HtmlCollections we have to use Array.from()
Array.from(smallImg).forEach((img) => {
  console.log(img);
  img.onclick = () => {
    productImg.src = img.src;
    //console.log(img.src)
  };
});

// toggle form
let loginForm = document.getElementById("loginForm");
let regForm = document.getElementById("regForm");
let indicator = document.getElementById("indicator");

const register = () => {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
};
const login = () => {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
};


