let json = require('./dofus-electron.json')

$('.btn-infos')[0].onclick = function(event) {
    show_informations()
}

$('.btn-home')[0].onclick = function(event) {
    show_home()
}

function show_informations() {
    console.log('show informations')
    $('.principal-container')[0].innerHTML = ''
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
        div.appendChild(title)
        div.appendChild(p)
        $('.principal-container')[0].appendChild(div)
        console.log(key + " : " + values[index])
    })
    render_home_button()
}

function show_home() {
    console.log('show home')
    let homeBtn = document.createElement('button')
    let infosBtn = document.createElement('button')

    homeBtn.className = "btn btn-home"
    infosBtn.className = "btn btn-infos"

    homeBtn.onclick = show_home
    infosBtn.onclick =  show_informations

    homeBtn.textContent = "Accueil"
    infosBtn.textContent = "Informations"

    $('.principal-container')[0].innerHTML = ""
    $('.principal-container')[0].appendChild(homeBtn)
    $('.principal-container')[0].appendChild(infosBtn)
}

function render_home_button() {
    console.log('render home button')
    let homeBtn = document.createElement('button')
    homeBtn.innerText = "Retourner à l'accueil"
    homeBtn.className = "btn btn-home"
    homeBtn.onclick = show_home
    $('.principal-container')[0].appendChild(homeBtn)
}