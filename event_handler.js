let json = require('./dofus-electron.json')
let infos_choice = []
let input

$('.btn-infos')[0].onclick = function (event) {
    show_informations()
}

$('.btn-home')[0].onclick = function (event) {
    show_home()
}

function show_informations() {
    console.log('show informations')
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let infos = json.infos
    let keys = Object.keys(infos)
    let values = Object.values(infos)
    console.log(infos)
    keys.forEach((key, index) => {
        let value = values[index]
        let div = document.createElement('div')
        let title = document.createElement('h3')
        let p = document.createElement('p')
        title.textContent = key
        p.textContent = value
        div.className = "one_infos text-center"
        div.onclick = modify_infos
        div.appendChild(title)
        div.appendChild(p)
        $('.principal-container')[0].appendChild(div)
        console.log(key + " : " + values[index])
    })
    let bottomChoice = document.createElement('div')
    let addInfosBtn = document.createElement('button')
    bottomChoice.className = 'bottom-choice'
    addInfosBtn.innerText = "Ajouter une information"
    addInfosBtn.className = "btn btn-add-infos"
    addInfosBtn.onclick = add_infos
    bottomChoice.appendChild(addInfosBtn)
    render_home_button(bottomChoice)
}

function modify_infos() {
    if (this.children[1].type === undefined) {
        infos_choice = this.children[1].innerHTML
        input = document.createElement('input')
        input.value = infos_choice
        input.className = "infos-input"
        input.style.borderRadius = '10px'
        this.removeChild(this.children[1])
        this.appendChild(input)
        $('.infos-input').focus()
    }
    else {
        let choice = this.firstChild.innerHTML
        let p = document.createElement('p')
        p.innerText = infos_choice
        this.removeChild(this.children[1])
        this.appendChild(p)
        console.log('modify choice : ', input.value)
    }
}

function add_infos() {
    console.log('add infos')
}

function show_home() {
    console.log('show home')
    let homeBtn = document.createElement('button')
    let infosBtn = document.createElement('button')

    homeBtn.className = "btn btn-home"
    infosBtn.className = "btn btn-infos"

    homeBtn.onclick = show_home
    infosBtn.onclick = show_informations

    homeBtn.textContent = "Accueil"
    infosBtn.textContent = "Informations"

    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].className = "principal-container home-menu"
    $('.principal-container')[0].appendChild(homeBtn)
    $('.principal-container')[0].appendChild(infosBtn)
}

function render_home_button(bottomChoice) {
    console.log('render home button')
    let homeBtn = document.createElement('button')
    homeBtn.innerText = "Retourner à l'accueil"
    homeBtn.className = "btn btn-home-return"
    homeBtn.onclick = show_home
    bottomChoice.appendChild(homeBtn)
    $('.principal-container')[0].appendChild(bottomChoice)
}