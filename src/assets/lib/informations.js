const fs = require('fs');

let input = ''
let last_infos_value = ''

function show_informations() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let infos = json.infos
    let keys = Object.keys(infos)
    let values = Object.values(infos)
    keys.forEach((key, index) => {
        let value = values[index]
        let div = create_div("one_infos text-center", modify_infos)
        let title = create_h("h4", false, key)
        let p = create_p(false, value)
        div.appendChild(title)
        div.appendChild(p)
        $('.principal-container')[0].appendChild(div)
    })
    let bottomChoice = create_div('bottom-choice')
    let addInfosBtn = create_button('btn btn-add-infos', "Ajouter une information", add_infos)
    bottomChoice.appendChild(addInfosBtn)
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function modify_infos() {
    if (this.children[1].type === undefined) {
        last_infos_value = this.children[1].innerHTML
        input = create_input("infos-input", this.children[1].innerHTML)
        input.style.borderRadius = '10px'
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

function add_infos() {
    $('.principal-container')[0].innerHTML = ''
    let div = create_div('add-infos-div')
    let divName = create_div('col-10 row center-div')
    let divValue = create_div('col-10 row center-div')
    let title = create_h('h4', "text-center", 'Rajouter une informations')
    let confirmBtn = create_button('btn btn-home', "Ajouter", confirm_add_infos)
    let inputName = create_input("col-8", false)
    let inputValue = create_input("col-8", false)
    let infosDiv = create_div('add-infos-form col-12')
    let labelName = create_p('col-3 label-add-infos', "Nom")
    let labelValue = create_p('col-3 label-add-infos', "Valeur")
    let returnInfos = create_button('btn', "Retourner aux informations", show_informations)
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
    show_informations()
}