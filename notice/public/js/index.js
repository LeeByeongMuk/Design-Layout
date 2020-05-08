window.onload = function(){
    var showButton = document.querySelectorAll('.btn-show-text');

    for(var i = 0; i < showButton.length ; i++){
        showButton[i].addEventListener('click', function(e){
            e.preventDefault();

            document.querySelector('.text-container').classList.toggle('show');
        });
    }
};