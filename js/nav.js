const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.navbar-mobile');


function showSidebar() {
    sideBar.style.display = 'flex';
}

function hideSidebar() {
    sideBar.style.display = 'none';
}

menu.addEventListener('click', showSidebar);
menuClose.addEventListener('click', hideSidebar);