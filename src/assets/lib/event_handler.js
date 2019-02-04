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

$(".btn-fecondation-calculator")[0].onclick = function (event) {
    calculFecondation()
}

$(document).ready(() => {
    let top = ($(window).height() / 2) - ($('.home-menu').height() / 2)
    $('.home-menu')[0].style.top = top + "px"
    render_top_infos()
})

function render_top_infos() {
    if (json['last'] != '') {
        let topTitle = create_h("h4", 'text-center top-title', "Dernière dragodinde fécondée")
        $('.top-infos')[0].appendChild(topTitle)
        let topText = create_p('text-center top-text', json["last"])
        $('.top-infos')[0].appendChild(topText)
        let topPosition = $('.home-menu')[0].style.top.substr(0, $('.home-menu')[0].style.top.length - 2)
        $('.top-infos')[0].style.top = (topPosition - 125) + "px"
        leftToRight($('.top-infos'))
        leftToRight($('.home-menu'), true)
    }
}

function show_home() {
    let infosBtn = create_button('btn btn-infos', 'Informations', () => { show_informations('show') })
    let craftBtn = create_button('btn btn-craft', "Crafts", () => { show_craft() })
    let parcheminBtn = create_button('btn btn-parchemin', "Parchemins", () => { show_parchemin() })
    let gestationBtn = create_button('btn btn-gestation', "Gestation des dragodindes", () => { show_gestation() })
    let myddBtn = create_button('btn mydd', "Mes dragodindes", () => { myDragodindes() })
    let lastBtn = create_button('btn lastdd', "Modifier la dernière dragodinde fécondée", () => { lastDragodindes() })
    let calculBtn = create_button('btn btn-fecondation-calculator', "Calculer les fécondations", () => { calculFecondation() })
    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].className = "principal-container home-menu"
    $('.principal-container')[0].appendChild(infosBtn)
    $('.principal-container')[0].appendChild(craftBtn)
    $('.principal-container')[0].appendChild(parcheminBtn)
    $('.principal-container')[0].appendChild(gestationBtn)
    $('.principal-container')[0].appendChild(myddBtn)
    $('.principal-container')[0].appendChild(lastBtn)
    $('.principal-container')[0].appendChild(calculBtn)
    render_top_infos()
}

function render_home_button(bottomChoice) {
    let homeBtn = create_button('btn btn-home-return', "Retourner à l'accueil", show_home)
    bottomChoice.appendChild(homeBtn)
    $('.principal-container')[0].appendChild(bottomChoice)
}

function leftToRight(selectedDiv, menu = false) {
    if (menu) {
        selectedDiv.children().map((index, div) => {
            div.style.opacity = "0"
            setTimeout(() => {
                $('.' + div.className.substr(4, div.className.length - 4)).animate({
                    opacity: 1
                }, 300)
            }, (index + 1) * 100)

        })
    }
    else {
        selectedDiv[0].style.left = "-300px"
        selectedDiv[0].style.opacity = "0"
        selectedDiv.show()
        selectedDiv.animate({
            left: "+=300",
            opacity: 1
        }, 300)
    }
}