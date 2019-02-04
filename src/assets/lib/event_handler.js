let json = require('./assets/dofus-electron.json')

$('.btn-infos')[0].onclick = function (event) {
    show_informations('show')
}

$('.btn-home')[0].onclick = function (event) {
    show_home()
}

$('.btn-craft')[0].onclick = function (event) {
    show_craft()
}

$('.btn-parchemin')[0].onclick = function (event) {
    show_parchemin()
}

function show_home() {
    let homeBtn = create_button('btn btn-home', "Accueil", show_home)
    let infosBtn = create_button('btn btn-infos', 'Informations', () => { show_informations('show') })
    let craftBtn = create_button('btn btn-craft', "Crafts", () => { show_craft() })
    let parcheminBtn = create_button('btn btn-parchemin', "Parchemins", () => { show_parchemin() })
    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].className = "principal-container home-menu"
    $('.principal-container')[0].appendChild(homeBtn)
    $('.principal-container')[0].appendChild(infosBtn)
    $('.principal-container')[0].appendChild(craftBtn)
    $('.principal-container')[0].appendChild(parcheminBtn)
}

function render_home_button(bottomChoice) {
    let homeBtn = create_button('btn btn-home-return', "Retourner à l'accueil", show_home)
    bottomChoice.appendChild(homeBtn)
    $('.principal-container')[0].appendChild(bottomChoice)
}