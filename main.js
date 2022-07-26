const btnSearch = document.querySelector('.icon-search');
const headerSearch = document.querySelector('.header-search');
btnSearch.addEventListener('click',(e)=>{
    if(headerSearch.classList.contains('show')){
       headerSearch.classList.remove('show');
    }
    else{
        headerSearch.classList.add('show');
    }
})
document.body.addEventListener('click',(e)=>{
    if(e.target !== headerSearch && headerSearch.classList.contains('show') && e.target !== btnSearch){
        headerSearch.classList.remove('show');
    }
})