function lastDragodindes() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let ressourceDiv = create_div('text-center principal-parcho-div')
    let titleH = create_h('h2', 'craft-title text-center', "Dernière dragodinde fécondée")
    $('.principal-container')[0].appendChild(titleH)
    let parchoContainer = create_div("parcho-container")
    if (json['Mes dragodindes'].length) {
        let input = create_input('input-parcho', '', "Rechercher")
        input.oninput = myddResearch
        ressourceDiv.appendChild(input)
        json["Mes dragodindes"].sort().map(dragodinde => {
            let divLine = create_div('last-line row', addLastDD)
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
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function myddResearch(e) {
    $('.parcho-container')[0].innerHTML = ''
    json['Mes dragodindes'].map(dragodinde => {
        if (e.target.value == '' || dragodinde.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            let divLine = create_div('last-line row', addLastDD)
            let pName = create_p("mydd-name", dragodinde)
            divLine.appendChild(pName)
            $('.parcho-container')[0].appendChild(divLine)
        }
    })
}

function addLastDD() {
    json['last'][0] = this.children[0].innerHTML
    let dds = json['Mes dragodindes'].filter((drago, index) => {
        if (drago != this.children[0].innerHTML && drago != null) {
            return drago
        }
    })
    json["Mes dragodindes"] = dds
    fs.writeFileSync(__dirname + '/assets/dofus-electron.json', JSON.stringify(json));
    myDragodindes()
}