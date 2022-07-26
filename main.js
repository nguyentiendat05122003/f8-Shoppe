const btnSearch = document.querySelector('.icon-search');
const headerSearch = document.querySelector('.header-search');
const headerCartElement = document.querySelector('.header-cart');
const headerHasCart = document.querySelector('.header-cart-hasItem');
const headerHistory = document.querySelector('.wrapper-input');
const InputElement = document.querySelector('.header-search-input');
const cartElement = document.querySelector('.header-cart-icon');
btnSearch.addEventListener('click',(e)=>{
    if(headerSearch.classList.contains('show')){
       headerSearch.classList.remove('show');
    }
    else{
        headerSearch.classList.add('show');
    }
})
document.body.addEventListener('click',(e)=>{
    if(headerSearch.classList.contains('show') && e.target !== btnSearch && e.target !== headerSearch && e.target!==InputElement){
        headerSearch.classList.remove('show');
    }
})
headerCartElement.addEventListener('click',(e)=>{
    if(headerHasCart.classList.contains('show-cart')){
        headerHasCart.classList.remove('show-cart');
    }
    else{
        headerHasCart.classList.add('show-cart');
    }
})
// document.body.addEventListener('click',(e)=>{
//     if(e.target !== headerCartElement && headerHasCart.classList.contains('show-cart') && e.target !==headerHasCart){
//         headerHasCart.classList.remove('show-cart');
//     }
// })