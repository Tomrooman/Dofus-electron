const fs = require('fs');

let input = ''
let last_infos_value = ''

function show_informations(showOrRemove = "show") {
    $('.top-infos')[0].innerHTML = ''
    $('.top-infos').hide()
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let infos_title = create_h('h2', 'infos-title text-center', 'Informations')
    $('.principal-container')[0].appendChild(infos_title)
    let keys = Object.keys(json.infos).sort()
    keys.forEach(key => {
        let div = ''
        let value = json.infos[key]
        let title = create_h("h4", false, key)
        let p = create_p(false, value)
        if (showOrRemove == "show") {
            div = create_div("one_infos text-center", modify_infos)
        }
        else {
            div = create_div("one_infos text-center", remove_infos)
        }
        div.appendChild(title)
        div.appendChild(p)
        $('.principal-container')[0].appendChild(div)
    })
    let bottomChoice = create_div('bottom-choice')
    if (showOrRemove === "show") {
        let addInfosBtn = create_button('btn btn-add-infos', "Ajouter une information", add_infos)
        let removeInfosBtn = create_button('btn', "Supprimer une information", () => { show_informations('remove') })
        bottomChoice.appendChild(addInfosBtn)
        bottomChoice.appendChild(removeInfosBtn)
    }
    else {
        let show_infos_btn = create_button('btn btn-add-infos', "Annuler la suppression", () => { show_informations('show') })
        bottomChoice.appendChild(show_infos_btn)
    }

    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function remove_infos() {
    delete json.infos[this.children[0].innerHTML]
    fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
    show_informations('show')
}

function modify_infos() {
    if (this.children[1].type === undefined) {
        last_infos_value = this.children[1].innerHTML
        input = create_input("infos-input", this.children[1].innerHTML)
        input.style.borderRadius = '10px'
        input.onkeypress = handle_keypress
        this.removeChild(this.children[1])
        this.appendChild(input)
        $('.infos-input').focus()
    }
    else {
        let p = create_p(false, input.value)
        this.removeChild(this.children[1])
        this.appendChild(p)
        json.infos[this.children[0].innerHTML] = input.value
        if (last_infos_value != input.value) {
            fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
        }
    }
}

function handle_keypress(e) {
    if (e.key == 'Enter') {
        let p = create_p(false, e.target.value)
        let parentDiv = $('.' + this.className).parent()[0]
        parentDiv.removeChild(this)
        parentDiv.appendChild(p)
        let infos_to_modify = parentDiv.firstChild.innerHTML
        json.infos[infos_to_modify] = e.target.value
        fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));

    }
}

function add_infos() {
    $('.principal-container')[0].innerHTML = ''
    let div = create_div('add-infos-div')
    let divName = create_div('col-10 row center-div')
    let divValue = create_div('col-10 row center-div')
    let title = create_h('h4', "text-center", 'Rajouter une information')
    let confirmBtn = create_button('btn', "Ajouter", confirm_add_infos)
    let inputName = create_input("col-8", false)
    let inputValue = create_input("col-8", false)
    let infosDiv = create_div('add-infos-form col-12')
    let labelName = create_p('col-3 label-add-infos', "Nom")
    let labelValue = create_p('col-3 label-add-infos', "Valeur")
    let returnInfos = create_button('btn', "Retourner aux informations", () => { show_informations('show') })
    divName.appendChild(labelName)
    divName.appendChild(inputName)
    divValue.appendChild(labelValue)
    divValue.appendChild(inputValue)
    infosDiv.appendChild(divName)
    infosDiv.appendChild(divValue)
    div.appendChild(title)
    div.appendChild(infosDiv)
    let bottomChoice = create_div('bottom-choice')
    $('.principal-container')[0].appendChild(div)
    bottomChoice.appendChild(confirmBtn)
    bottomChoice.appendChild(returnInfos)
    render_home_button(bottomChoice)
}

function confirm_add_infos() {
    if ($('input')[0].value != '' && $('input')[1].value != '') {
        json.infos[$('input')[0].value] = $('input')[1].value
        fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
    }
    show_informations('show')
}