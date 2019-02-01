let json = require('./assets/dofus-electron.json')
let infos_choice = []
let input

$('.btn-infos')[0].onclick = function (event) {
    show_informations()
}

$('.btn-home')[0].onclick = function (event) {
    show_home()
}

function show_informations() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let infos = json.infos
    let keys = Object.keys(infos)
    let values = Object.values(infos)
    keys.forEach((key, index) => {
        let value = values[index]
        let div = create_div("one_infos text-center", modify_infos)
        let title = create_h("h3", false, key)
        let p = create_p(false, value)
        div.appendChild(title)
        div.appendChild(p)
        $('.principal-container')[0].appendChild(div)
    })
    let bottomChoice = create_div('bottom-choice')
    let addInfosBtn = create_button('btn btn-add-infos', "Ajouter une information", add_infos)
    bottomChoice.appendChild(addInfosBtn)
    render_home_button(bottomChoice)
}

function modify_infos() {
    if (this.children[1].type === undefined) {
        infos_choice = this.children[1].innerHTML
        input = create_input("infos-input", infos_choice)
        input.style.borderRadius = '10px'
        this.removeChild(this.children[1])
        this.appendChild(input)
        $('.infos-input').focus()
    }
    else {
        let p = create_p(false, infos_choice)
        this.removeChild(this.children[1])
        this.appendChild(p)
        console.log('modify choice : ', input.value)
    }
}

function add_infos() {
    console.log('add infos')
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