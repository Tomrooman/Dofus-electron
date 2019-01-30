$('.btn-infos')[0].onclick = function(event) {
    show_informations()
}

$('.btn-home')[0].onclick = function(event) {
    show_home()
}

function show_informations() {
    console.log('show informations')
    $('.principal-container')[0].innerHTML = ''

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