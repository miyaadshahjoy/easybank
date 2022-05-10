const togglebutton= document.querySelector('#togglebutton');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const mmenu=document.querySelector('.header__mmenu');
const body=document.querySelector('body');
togglebutton.addEventListener('click', function()
{
    if(header.classList.contains('toggle'))
    {//closing the hamburger menu
        header.classList.remove('toggle');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mmenu.classList.remove('fade-in');
        mmenu.classList.add('fade-out');
        body.classList.remove('noscroll');
        
    }
    else
    {//opening the hamburger menu
        header.classList.add('toggle');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        mmenu.classList.remove('fade-out');
        mmenu.classList.add('fade-in');
        body.classList.add('noscroll');
    }
});