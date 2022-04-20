var menuBtn = document.getElementById('menu-btn');
var sideNav = document.getElementById('sideNav');
var menuIcon = document.getElementById('menu-icon');

sideNav.style.right = '-250px';

menuBtn.onclick = () => {
    if (sideNav.style.right == '-250px') {
        sideNav.style.right = '0';
        menuIcon.src = './../images/close.png';
    }
    else {
        sideNav.style.right = '-250px';
        menuIcon.src = './../images/menu.png';
    }
}


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});