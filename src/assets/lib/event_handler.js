let json = require('./assets/dofus-electron.json')

$('.btn-infos')[0].onclick = function (event) {
    show_informations('show')
}

$('.btn-craft')[0].onclick = function (event) {
    show_craft()
}

$('.btn-parchemin')[0].onclick = function (event) {
    show_parchemin()
}

$('.btn-gestation')[0].onclick = function (event) {
    show_gestation()
}

$('.btn-mydd')[0].onclick = function (event) {
    myDragodindes()
}

$('.btn-lastdd')[0].onclick = function (event) {
    lastDragodindes()
}

$(document).ready(() => {
    let top = ($(window).height() / 2) - ($('.home-menu').height() / 2)
    $('.home-menu')[0].style.top = top + "px"
})

function show_home() {
    let infosBtn = create_button('btn btn-infos', 'Informations', () => { show_informations('show') })
    let craftBtn = create_button('btn btn-craft', "Crafts", () => { show_craft() })
    let parcheminBtn = create_button('btn btn-parchemin', "Parchemins", () => { show_parchemin() })
    let gestationBtn = create_button('btn btn-gestation', "Gestation des dragodindes", () => { show_gestation() })
    let myddBtn = create_button('btn btn-gestation', "Mes dragodindes", () => { myDragodindes() })
    let lastBtn = create_button('btn btn-gestation', "Dernière dragodinde fécondée", () => { lastDragodindes() })
    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].className = "principal-container home-menu"
    $('.principal-container')[0].appendChild(infosBtn)
    $('.principal-container')[0].appendChild(craftBtn)
    $('.principal-container')[0].appendChild(parcheminBtn)
    $('.principal-container')[0].appendChild(gestationBtn)
    $('.principal-container')[0].appendChild(myddBtn)
    $('.principal-container')[0].appendChild(lastBtn)
}

function render_home_button(bottomChoice) {
    let homeBtn = create_button('btn btn-home-return', "Retourner à l'accueil", show_home)
    bottomChoice.appendChild(homeBtn)
    $('.principal-container')[0].appendChild(bottomChoice)
}