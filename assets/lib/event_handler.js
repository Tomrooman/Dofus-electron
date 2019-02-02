let json = require('./assets/dofus-electron.json')

$('.btn-infos')[0].onclick = function (event) {
    show_informations()
}

$('.btn-home')[0].onclick = function (event) {
    show_home()
}

function show_home() {
    let homeBtn = create_button('btn btn-home', "Accueil", show_home)
    let infosBtn = create_button('btn btn-infos', 'Informations', show_informations)

    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].className = "principal-container home-menu"
    $('.principal-container')[0].appendChild(homeBtn)
    $('.principal-container')[0].appendChild(infosBtn)
}

function render_home_button(bottomChoice) {
    let homeBtn = create_button('btn btn-home-return', "Retourner à l'accueil", show_home)
    bottomChoice.appendChild(homeBtn)
    $('.principal-container')[0].appendChild(bottomChoice)
}