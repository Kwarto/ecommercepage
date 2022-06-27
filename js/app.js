const navBar = document.querySelector('.navbar');
const menuList = document.querySelector('.menu_list');
const menuBar = document.querySelector('#menuBar');
const menuBarClose = document.querySelector('#menuBarClose');
const cartIcon = document.querySelector('#cartIcon');
const cartIconClose = document.querySelector('#cartIconClose');
const cartSummary = document.querySelector('#cartSummary');

//Menu List display

menuBar.addEventListener('click', () =>{
    menuList.style.display = 'block';
    menuBarClose.style.display = 'block';
    menuBar.style.display = 'none';
})  

menuBarClose.addEventListener('click', () =>{
    menuList.style.display = 'none';
    menuBar.style.display = 'block';
    menuBarClose.style.display = 'none';
})


//cart summary dispay
cartIcon.addEventListener('click', () =>{
    cartSummary.style.display = 'block';
    cartIcon.style.display = 'none';
    cartIconClose.style.display = 'block';
})

cartIconClose.addEventListener('click', () =>{
    cartSummary.style.display = 'none';
    cartIcon.style.display = 'block';
    cartIconClose.style.display = 'none';
})
//Cart Quantity Increment and Decrement
const cartQty = document.querySelector('#cartQty');
const qtyPlus = document.querySelector('#qtyPlus');
const qtyMinus = document.querySelector('#qtyMinus');

qtyPlus.onclick = () => {
    cartQty.innerHTML = 0 + 1
}
qtyMinus.onclick = () => {
    cartQty.innerHTML = -0
}

//Change navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})
//js for product small img 
    const ProductImg = document.getElementById("productImg");
    const SmallImg = document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function()
    {
      ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
      ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
      ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
      ProductImg.src = SmallImg[3].src;
    }
ProductImg.onclick = function(){
        ProductImg.style.transform = 'Scale(1.1)';
        smallImgNext.style.display = 'block';
        smallImgBack.style.display = 'block';
        productImgScaleClose.style.display = 'flex';
}

//Small screen product controllers
const smallImgBack = document.getElementById("controllerOne")
const smallImgNext = document.getElementById("controllerTwo")
const productImgScaleClose = document.querySelector('.productImgScaleClose')

smallImgNext.onclick = () =>{
  if (ProductImg.src = SmallImg[0].src) {
      ProductImg.src = SmallImg[1].src;
  }
}
smallImgBack.onclick = () =>{
    if (ProductImg.src = SmallImg[1].src) {
        ProductImg.src = SmallImg[0].src;
    }
}
productImgScaleClose.onclick = function(){
    ProductImg.style.transform = 'none';
    smallImgNext.style.display = 'none';
    smallImgBack.style.display = 'none';
    productImgScaleClose.style.display = 'none';
    if (ProductImg.src = SmallImg[1].src) {
        ProductImg.src = SmallImg[3].src;
    }
}