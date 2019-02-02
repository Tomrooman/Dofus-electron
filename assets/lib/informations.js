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