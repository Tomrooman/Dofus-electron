const json = require('./assets/dofus-electron.json');
const moment = require('moment');
const _ = require('lodash');
const MomentRange = require('moment-range');
const momentR = MomentRange.extendMoment(moment);

$('.btn-infos')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), show_infos)
};

function show_infos() {
    show_informations('show');
}

$('.btn-craft')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), show_craft)
};

$('.btn-parchemin')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), show_parchemin)
};

$('.btn-gestation')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), show_gestation)
};

$('.btn-mydd')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), myDragodindes)
};

$('.btn-lastdd')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), lastDragodindes)
};

$('.btn-fecondation-calculator')[0].onclick = function (event) {
    disappearToRight($('.home-menu'), calculFecondation)
};

$(document).ready(() => {
    const top = ($(window).height() / 2) - ($('.home-menu').height() / 2);
    $('.home-menu')[0].style.top = `${top}px`;
    render_top_infos();
});

function render_top_infos() {
    if (json.last[0] != '') {
        const topTitle = create_h('h4', 'text-center top-title', 'Dernière dragodinde fécondée');
        $('.top-infos')[0].appendChild(topTitle);
        const topText = create_p('text-center top-text', json.last[0]);
        $('.top-infos')[0].appendChild(topText);
        const topPosition = $('.home-menu')[0].style.top.substr(0, $('.home-menu')[0].style.top.length - 2);
        $('.top-infos')[0].style.top = `${topPosition - 125}px`;
        leftToRight($('.top-infos'));
    }
    leftToRight($('.home-menu'), true);
}

function show_home() {
    const infosBtn = create_button('btn btn-infos', 'Informations', () => { disappearToRight($('.home-menu'), show_infos); });
    const craftBtn = create_button('btn btn-craft', 'Crafts', () => { disappearToRight($('.home-menu'), show_craft); });
    const parcheminBtn = create_button('btn btn-parchemin', 'Parchemins', () => { disappearToRight($('.home-menu'), show_parchemin); });
    const gestationBtn = create_button('btn btn-gestation', 'Gestation des dragodindes', () => { disappearToRight($('.home-menu'), show_gestation); });
    const myddBtn = create_button('btn mydd', 'Mes dragodindes', () => { disappearToRight($('.home-menu'), myDragodindes); });
    const lastBtn = create_button('btn lastdd', 'Modifier la dernière dragodinde fécondée', () => { disappearToRight($('.home-menu'), lastDragodindes); });
    const calculBtn = create_button('btn btn-fecondation-calculator', 'Calculer les fécondations', () => { disappearToRight($('.home-menu'), calculFecondation); });
    $('.principal-container')[0].innerHTML = '';
    $('.principal-container')[0].className = 'principal-container home-menu';
    $('.principal-container')[0].appendChild(infosBtn);
    $('.principal-container')[0].appendChild(craftBtn);
    $('.principal-container')[0].appendChild(parcheminBtn);
    $('.principal-container')[0].appendChild(gestationBtn);
    $('.principal-container')[0].appendChild(myddBtn);
    $('.principal-container')[0].appendChild(lastBtn);
    $('.principal-container')[0].appendChild(calculBtn);
    render_top_infos();
}

function render_home_button(bottomChoice) {
    const homeBtn = create_button('btn btn-home-return', "Retourner à l'accueil", show_home);
    bottomChoice.appendChild(homeBtn);
    $('.principal-container')[0].appendChild(bottomChoice);
}

function disappearToRight(selectedDiv, callback) {
    selectedDiv.children().map((index, div) => {
        setTimeout(() => {
            div.className = div.className + "-animate"
            $(`.${div.className.split(' ')[1]}`).animate({
                opacity: 0,
            }, 200);
        }, (index + 1) * 100);
        setTimeout(() => {
            callback()
        }, selectedDiv.children().length * 160)
        $('.top-infos').animate({
            opacity: 0
        }, 500)
    });
}

function appearEffect2(selectedDiv) {
    selectedDiv.children().map((index, div) => {
        div.style.opacity = '0';
        setTimeout(() => {
            $(div).animate({
                opacity: 1,
            }, 300);
        }, (index + 1) * 100);
    });
}

function appearEffect(selectedDiv) {
    selectedDiv.children().map((index, div) => {
        div.style.opacity = '0';
        setTimeout(() => {
            $(`.${div.className.split(' ')[2]}`).animate({
                opacity: 1,
            }, 200);
        }, (index + 1) * 100);
    });
}

function leftToRight(selectedDiv, menu = false) {
    if (menu) {
        selectedDiv.children().map((index, div) => {
            div.style.opacity = '0';
            setTimeout(() => {
                $(`.${div.className.substr(4, div.className.length - 4)}`).animate({
                    opacity: 1,
                }, 200);
            }, (index + 1) * 100);
        });
    } else {
        selectedDiv[0].style.left = '-300px';
        selectedDiv[0].style.opacity = '0';
        selectedDiv.show();
        selectedDiv.animate({
            left: '+=300',
            opacity: 1,
        }, 200);
    }
}
