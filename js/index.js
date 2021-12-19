function openMenu(e){
    let menu = document.querySelector('.menu');
    let btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}

function closeMenu(){
    let menu = document.querySelector('.menu.is-active');
    let btn = document.querySelector('.btn.is-active');
    menu.classList.toggle('.menu');
    btn.classList.toggle('.btn');
    
    e.preventDefault();
}
