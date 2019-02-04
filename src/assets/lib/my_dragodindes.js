function myDragodindes() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let ressourceDiv = create_div('text-center principal-parcho-div')
    let titleH = create_h('h2', 'craft-title text-center', "Mes dragodindes")
    $('.principal-container')[0].appendChild(titleH)
    let parchoContainer = create_div("parcho-container")
    if (json['Mes dragodindes'].length) {
        let input = create_input('input-parcho', '', "Rechercher")
        input.oninput = myddResearch
        ressourceDiv.appendChild(input)
        json["Mes dragodindes"].sort().map(dragodinde => {
            let divLine = create_div('ressource-line row')
            let pName = create_p("mydd-name", dragodinde)
            divLine.appendChild(pName)
            parchoContainer.appendChild(divLine)
        })
        ressourceDiv.appendChild(parchoContainer)

    }
    else {
        let nodd = create_p('text-center no-dd-title', "Aucune dragodinde actuellement")
        parchoContainer.appendChild(nodd)
        ressourceDiv.appendChild(parchoContainer)
    }
    let addDDBtn = create_button('btn', "Ajouter une dragodinde", addDD)
    let rmvDDBtn = create_button('btn', "Supprimer une dragodinde", rmvDD)
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    bottomChoice.appendChild(addDDBtn)
    bottomChoice.appendChild(rmvDDBtn)
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function myddResearch(e, remove = false) {
    $('.parcho-container')[0].innerHTML = ''
    json['Mes dragodindes'].map(dragodinde => {
        if (e.target.value == '' || dragodinde.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            let divLine
            if (remove == "remove") {

                divLine = create_div('rmvDD-line row', addThisDD)
            }
            else {
                divLine = create_div('ressource-line row', addThisDD)
            }
            let pName = create_p("mydd-name", dragodinde)
            divLine.appendChild(pName)
            $('.parcho-container')[0].appendChild(divLine)
        }
    })
}

function addFilter(e) {
    $('.parcho-container')[0].innerHTML = ''
    dragodindes.map(dragodinde => {
        if (e.target.value == '' || dragodinde[0][0].toLowerCase().indexOf(e.target.value) != -1) {
            let divLine = create_div('addDD-line row', addThisDD)
            let pName = create_p("mydd-name", dragodinde[0])
            divLine.appendChild(pName)
            $('.parcho-container')[0].appendChild(divLine)
        }
    })
}

function addDD() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let ressourceDiv = create_div('text-center principal-parcho-div')
    let titleH = create_h('h2', 'craft-title text-center', "Ajouter une dragodinde")
    $('.principal-container')[0].appendChild(titleH)
    let input = create_input('input-parcho', '', "Rechercher")
    input.oninput = addFilter
    ressourceDiv.appendChild(input)
    let parchoContainer = create_div("parcho-container")
    dragodindes.map(dragodinde => {
        let divLine = create_div('addDD-line row', addThisDD)
        let pName = create_p("mydd-name", dragodinde[0])
        divLine.appendChild(pName)
        parchoContainer.appendChild(divLine)
    })
    ressourceDiv.appendChild(parchoContainer)
    let returnDDBtn = create_button('btn', "Retourner à mes dragodindes", myDragodindes)
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    bottomChoice.appendChild(returnDDBtn)
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function rmvDD() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let ressourceDiv = create_div('text-center principal-parcho-div')
    let titleH = create_h('h2', 'craft-title text-center', "Supprimer une dragodinde")
    $('.principal-container')[0].appendChild(titleH)
    let input = create_input('input-parcho', '', "Rechercher")
    input.oninput = (e) => { myddResearch(e, 'remove') }
    ressourceDiv.appendChild(input)
    let parchoContainer = create_div("parcho-container")
    json["Mes dragodindes"].map(dragodinde => {
        let divLine = create_div('rmvDD-line row', rmvThisDD)
        let pName = create_p("mydd-name", dragodinde)
        divLine.appendChild(pName)
        parchoContainer.appendChild(divLine)
    })
    ressourceDiv.appendChild(parchoContainer)
    let returnDDBtn = create_button('btn', "Annuler la suppression", myDragodindes)
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    bottomChoice.appendChild(returnDDBtn)
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function addThisDD() {
    json['Mes dragodindes'].push(this.children[0].innerHTML)
    fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
    myDragodindes()
}

function rmvThisDD() {
    delete json['Mes dragodindes'][this.children[0].innerHTML]
    fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
    myDragodindes()
}