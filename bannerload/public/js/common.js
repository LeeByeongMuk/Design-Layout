window.addEventListener('scroll', function(){
    var _scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(_scrollTop);

    if(_scrollTop > 118){
        document.querySelector('.header-container').classList.add('header-fixed');
    }else{
        document.querySelector('.header-container').classList.remove('header-fixed');
    }
});