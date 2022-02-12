const menuIcon = document.querySelector('#menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

function changeMenu() {

    if (mobileMenu.classList.contains('open')) { // close menu
        mobileMenu.classList.remove('open');
        mobileMenu.classList.remove('fade-in');
        mobileMenu.classList.add('fade-out');
    } else {
        mobileMenu.classList.add('open');
        mobileMenu.classList.remove('fade-out');
        mobileMenu.classList.add('fade-in');
    }
}

menuIcon.addEventListener('click', changeMenu);