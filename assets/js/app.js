var nav = document.getElementById('navbar');
var navbarMobile = document.getElementById('navbarMobile');
var menuBtn = document.getElementById('burger');
var menu = document.getElementById('menu');
var menuLine1 = document.getElementById('menuLine1');
var menuLine2 = document.getElementById('menuLine2');
var body = document.querySelector('body');
var modeIcon1 = document.getElementById('modeIcon1');
var modeIcon2 = document.getElementById('modeIcon2');
var projectLink1 = document.getElementById('projectLink1');
var projectLink2 = document.getElementById('projectLink2');
var projectLink3 = document.getElementById('projectLink3');
var projectLink4 = document.getElementById('projectLink4');
var menuControlLink1 = document.getElementById('menuControlLink1');
var menuControlLink2 = document.getElementById('menuControlLink2');
var menuControlLink3 = document.getElementById('menuControlLink3');
var menuControlLink4 = document.getElementById('menuControlLink4');
var switchInner = document.getElementById('switchInner');
var skill = document.getElementsByClassName('skill');

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        nav.style.width = '80vw';
        nav.style.position = 'fixed';
        nav.style.marginLeft = '10vw';
        nav.style.marginTop = '0vh';
        nav.style.borderBottomRightRadius = '40px';
        nav.style.borderBottomLeftRadius = '40px';
        // nav.style.marginLeft = '10vw';
        // nav.style.marginTop = '5vh';
        // nav.style.borderRadius = '40px';
        nav.style.boxShadow = '5px 5px 30px rgba(0, 0, 0, 0.25)';
        nav.style.height = '12.5vh';
    }
    else {
        nav.style.width = '100vw';
        nav.style.position = 'fixed';
        nav.style.marginLeft = '0vw';
        nav.style.marginTop = '0vh';
        nav.style.borderRadius = '0px';
        nav.style.boxShadow = 'none';
        nav.style.height = '15vh';
    }
}

menu.style.opacity = '0';

menuBtn.addEventListener("click", menuBtnClick);

function menuBtnClick() {
    if (menu.style.opacity === '0') {
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'all';
        menuLine1.style.transform = 'rotate(45deg) translateY(2.5vh)';
        menuLine2.style.transform = 'rotate(-45deg) translateY(-2.5vh)';
        menuLine2.style.width = '10vw';
        navbarMobile.style.boxShadow = 'none'
    }
    else {
        menu.style.opacity = '0';
        menu.style.pointerEvents = 'none';
        menuLine1.style.transform = 'rotate(0deg) translateY(0vh)';
        menuLine2.style.transform = 'rotate(0deg) translateY(0vh)';
        menuLine2.style.width = '7.5vw';
        navbarMobile.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.15)'
    }
}

switchInner.style.justifyContent = 'flex-start';

function modeSwitch() {
    if (switchInner.style.justifyContent === 'flex-start') {
        switchInner.style.justifyContent = 'flex-end';
        nav.classList.add("navbarDark");
        body.classList.add("bodyDark");
        modeIcon1.style.filter = 'invert()';
        modeIcon2.style.filter = 'invert()';
        projectLink1.style.color = 'rgb(212, 212, 212)';
        projectLink2.style.color = 'rgb(212, 212, 212)';
        projectLink3.style.color = 'rgb(212, 212, 212)';
        projectLink4.style.color = 'rgb(212, 212, 212)';
        menu.style.backgroundColor = '#111111';
        menuControlLink1.style.color = 'white';
        menuControlLink2.style.color = 'white';
        menuControlLink3.style.color = 'white';
        menuControlLink4.style.color = 'white';
        navbarMobile.style.backgroundColor = 'rgb(34, 34, 34)';
        menuLine1.style.backgroundColor = 'white';
        menuLine2.style.backgroundColor = 'white';
        for (var i = 0; i < skill.length; i++) {
            skill[i].style.color = 'rgb(212, 212, 212)';
        }
    }
    else {
        switchInner.style.justifyContent = 'flex-start';
        nav.classList.remove("navbarDark");
        body.classList.remove("bodyDark");
        modeIcon1.style.filter = 'none';
        modeIcon2.style.filter = 'none';
        projectLink1.style.color = 'black';
        projectLink2.style.color = 'black';
        projectLink3.style.color = 'black';
        projectLink4.style.color = 'black';
        menu.style.backgroundColor = 'white';
        menuControlLink1.style.color = 'black';
        menuControlLink2.style.color = 'black';
        menuControlLink3.style.color = 'black';
        menuControlLink4.style.color = 'black';
        navbarMobile.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        menuLine1.style.backgroundColor = 'black';
        menuLine2.style.backgroundColor = 'black';
        for (var i = 0; i < skill.length; i++) {
            skill[i].style.color = 'black';
        }
    }
}